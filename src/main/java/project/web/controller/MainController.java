package project.web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import project.web.data.dto.MainHotelDTO;
import project.web.data.dto.MainNativePageDTO;
import project.web.data.dto.MainRateDTO;
import project.web.data.dto.RecommendHotelDTO;
import project.web.data.service.NativePage.NativePageService;
import project.web.data.service.hotel.HotelService;

import java.util.*;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true", methods = {RequestMethod.GET, RequestMethod.POST})
public class MainController {

    private final HotelService hotelService;
    private final NativePageService nativePageService;

    // 중복된 코드(매개변수 type 을 받아 type 이 있는 hotel 을 뽑음) 메서드로 만듬
    private List<MainHotelDTO> getHotelByType(Integer type) {
        List<MainHotelDTO> getType = hotelService.getHotelType(type);
        return getType;
    }

    //  호텔 뽑기
    @GetMapping(value = "/get-hotel")
    public List<MainHotelDTO> getHotelTypeOne(@RequestParam Integer type){
        return getHotelByType(type);
    }

    // 호텔 뽑기 -> 매개변수 city 이름으로 가져오기
//    가격 가져오기
    @GetMapping(value = "/get-hotel-city")
    public List<MainHotelDTO> getHotelByCName(@RequestParam String name) {
        return hotelService.getHotelByCName(name);
    }

    // 현지인이 만든 native page 뽑기 -> 가격기준 내림차순 : 사진, 호텔 이름 , 가격 , 방 이름
    @GetMapping(value = "/get-native-page")
    public List<MainNativePageDTO> getNativePage() {
        return nativePageService.getNativePage();
    }

    @PostMapping(value = "/native-page-name")
    public List<MainNativePageDTO>getNpByName(String name) {

        return nativePageService.getNativePage(name);
    }

    @PostMapping(value = "/high-rate-hotel")
    public List<MainRateDTO> getHighRate() {

        return hotelService.getHighRate();
    }
}