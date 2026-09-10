package project.web.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.web.data.domain.Hotel;
import project.web.data.domain.User;
import project.web.data.dto.*;
import project.web.data.service.NativePage.NativePageService;
import project.web.data.service.hotel.HotelService;
import project.web.data.service.reservation.ReservationService;
import project.web.data.service.review.ReviewService;
import project.web.data.service.user.UserService;
import project.web.data.service.wishList.WishListService;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/my-page")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true", methods = {RequestMethod.GET, RequestMethod.POST})
public class MyPageController {
    private static final String UPLOAD_DIR = "./uploads/";
    private final UserService userService;
    private final ReservationService reservationService;
    private final HotelService hotelService;
    private final ReviewService reviewService;
    private final NativePageService nativePageService;
    private final HttpServletRequest request;
    private final WishListService wishListService;

//   중복되는 세션관련해서 메서드 하나 만듬, id를 가져오는 메서드
    public String sessionId() {
        HttpSession session = request.getSession();
        String id = (String) session.getAttribute("id");
        return id;
    }

//    로그인 유저 비번 변경
    @PostMapping(value = "/update-pw")
    public String updatePw(@RequestBody UpdatePwDTO updatePwDTO){
//        세션정보를 가져와 자신의 pw 를 변경
        String id = sessionId();
//        자신의 아이디와 변경 pw를 service에 넣어 pw 변경
        return userService.updatePw(updatePwDTO, id);
    }

//    로그인 유저 정보
    @GetMapping(value = "/user-info")
    public MyPageUserDTO getUserInfo(){
//        세션정보를 가져와 해당 id에 해당하는 유저 정보를 가져옴
        String id = sessionId();
        MyPageUserDTO user = userService.getUserInfo(id);

        return user;
    }


//    예약 정보
    @GetMapping(value = "/res-info")
    public List<MyResInfoDTO> getResInfo() {
//        세션정보를 가져와 해당 id에 해당하는 예약정보를 가져옴
        String id = sessionId();
        List<MyResInfoDTO> myResInfoDTOS = reservationService.getResInfo(id);
        
        return myResInfoDTOS;
    }

//    예약 삭제
    @PostMapping(value = "/res-delete")
    public String deleteRes(@RequestParam Long resNum, Long paNum) {
        try {
            // 예약 번호를 받아와 해당 예약일정을 삭제
            nativePageService.updateResB(paNum);
            reservationService.deleteRes(resNum);
        } catch (Exception e){
            return e.getMessage();
        }

        return "삭제 완료";
    }


    //    리뷰 작성 ( img x )
    @PostMapping(value = "/write-review")
    public String writeReview(@RequestParam Long hNum, @RequestBody ReviewDTO reviewDTO) {
        String id = sessionId();
        User user = userService.getUser(id);
        Hotel hotel = hotelService.getHotel(hNum);

//      리뷰 작성시에 user 정보와 hotel 정보를 얻기위해 각 service에서 정보를 얻어온 뒤 매개변수로 넘겨줌
        reviewService.insertReview(reviewDTO, user, hotel);
        long countRev = reviewService.countReview(hNum);
        long sumRate = reviewService.sumRate(hNum);

        hotel.setHRate((double)sumRate / countRev);
        hotelService.updateRate(hotel);
        return "리뷰작성성공";
    }

    @PostMapping(value = "/update")
    public String update(Long hNum) {

        Hotel hotel = hotelService.getHotel(hNum);

        long countRev = reviewService.countReview(hNum);
        long sumRate = reviewService.sumRate(hNum);

        hotel.setHRate((double)sumRate / countRev);
        hotelService.updateRate(hotel);
        return "good";
    }

//    작성 리뷰 사진업로드 및 db 저장
    @PostMapping(value = "/insert-reviewImg")
    public String uploadReviewImg(@RequestParam("files[]") List<MultipartFile> files) {
        String id = sessionId();
        User user = userService.getUser(id);
        List<String> url = new ArrayList<>();
        try {
            if (files.isEmpty()) {
                return "업로드 파일이 비었습니다.";
            }
            for (int i = 0; i < files.size(); i++) {
                MultipartFile file = files.get(i);
                if (file.isEmpty()) {
                    continue; // 빈 파일은 스킵
                }
                if (!file.getContentType().startsWith("image/")) {
                    return "이미지 파일만 업로드할 수 있습니다.";
                }
                Path uploadDirPath = Paths.get(UPLOAD_DIR);
                if (!Files.exists(uploadDirPath)) {
                    Files.createDirectories(uploadDirPath);
                }

                // 원본 파일 이름에서 확장자 추출
                String originalFilename = file.getOriginalFilename();
                String extension = FilenameUtils.getExtension(originalFilename);
                String uuid = UUID.randomUUID().toString();
                String fileName;

                fileName = uuid + "." + extension; // 원하는 서브 파일 이름 지정


                Path path = uploadDirPath.resolve(fileName);
                url.add(path.toString());
                Files.copy(file.getInputStream(), path);
            }
            reviewService.insertReviewPic(url, user);

            return "리뷰사진 업로드 성공";

        } catch (Exception e) {
            e.printStackTrace();
            return "업로드 에러 : " + e.getMessage();
        }
    }

    //    리뷰 삭제
    @PostMapping(value = "/delete-review")
    public String deleteReview(@RequestParam Long revNum) {
        String id = sessionId();
        User user = userService.getUser(id);
//      자신이 작성한것인지 알기 위해 user 엔티티를 매개변수로 넘겨줌
        return reviewService.deleteReview(revNum, user);
    }

//    리뷰 수정 - 내용, 별점만 변경가능
    @PostMapping(value = "/update-review")
    public String updateReview(@RequestParam Long revNum, @RequestBody ReviewDTO reviewDTO) {
        String id = sessionId();
        User user = userService.getUser(id);
        reviewService.updateReview(reviewDTO ,revNum, user);

        return "수정완료";
    }
    @GetMapping(value = "/wish-list")
    public List<WishListDTO> getWishList() {
        String id = sessionId();
        return wishListService.getWishList(id);
    }


}
