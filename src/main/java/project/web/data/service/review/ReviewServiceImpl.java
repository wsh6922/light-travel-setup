package project.web.data.service.review;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.web.data.domain.*;
import project.web.data.dto.InsertRevPicDTO;
import project.web.data.dto.ReviewDTO;
import project.web.data.dto.ShowReviewDTO;
import project.web.data.repository.ReviewPictureRepository;
import project.web.data.repository.ReviewRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ReviewPictureRepository reviewPictureRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ReviewPictureRepository reviewPictureRepository) {
        this.reviewRepository = reviewRepository;
        this.reviewPictureRepository = reviewPictureRepository;
    }

    @Override
    public List<ShowReviewDTO> getReviewByHotel(Long hNum) {
//        타입은 정렬을 어떻게 할것인지 알려주는 정보 ex) 1 : 날짜순, 2 : 별점순 등등

        return reviewRepository.getReviewDescDate(hNum);
    }

    @Override
    public void insertReview(ReviewDTO reviewDTO, User user, Hotel hotel) {
//        매개변수로 받은 정보로 Review 객체를 생성 후 save 해줌
        Review review = new Review(reviewDTO.getRate(), reviewDTO.getContent(), LocalDate.now(), user, hotel);

        reviewRepository.save(review);
    }

    @Override
    public String deleteReview(Long revNum, User user) {
//        해당 리뷰작성을 자신이 했는지 검사. 
        if (reviewRepository.existsUser(user.getUNum())) {
            reviewRepository.deleteById(revNum);
            return "작성한 리뷰가 삭제되었습니다.";
        } else {
            return "삭제할 수 없습니다.";
        }

    }

    //    방금 작성한 리뷰에 대한 사진 업로드 및 DB 저장 05.08기준 로그인 front 받으면 테스트 ㄱㄱ
    @Override
    public void insertReviewPic(List<String> url, User user) {
        Review review = reviewRepository.findReviewRecent(user.getUNum());
        InsertRevPicDTO picDTO = new InsertRevPicDTO();
        picDTO.setReview(review);
        for (String u : url) {
            picDTO.setUrl(u);
            ReviewPicture reviewPicture = new ReviewPicture(picDTO.getReview(), picDTO.getUrl());
            reviewPictureRepository.save(reviewPicture);
        }
    }

    @Override
    public void updateReview(ReviewDTO reviewDTO, Long revNum, User user) {
        Review review = reviewRepository.findOneReview(revNum, user);
        review.setRevRate(reviewDTO.getRate());
        review.setRevCon(reviewDTO.getContent());

        reviewRepository.save(review);
    }

    @Override
    public Long countReview(Long hNum) {
        return reviewRepository.countReview(hNum);
    }

    @Override
    public Long sumRate(Long hNum) {
        return reviewRepository.sumRate(hNum);
    }

    @Override
    public List<ShowReviewDTO> getAllReviewPaged(Pageable pageable, Long hNum) {
        return reviewRepository.findAllPaged(pageable, hNum);
    }
}
