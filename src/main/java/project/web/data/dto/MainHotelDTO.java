package project.web.data.dto;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
// Hotel 과 Picture 를 가져오기 위해 DTO 생성, 4.18
// 가장 가격이 작은 room과 room이름 가져오기
public class MainHotelDTO {
    private Long hNum; // hotel - 식별번호
    private String hName; // hotel - 호텔이름
    private String hpUrl ; // hotelPicture - url 이름
    private Double hRate; // hotel 별점
    private Long rPrice;


    public MainHotelDTO(Long hNum, String hName, String hpUrl, Double hRate, Long rPrice) {
        this.hNum = hNum;
        this.hName = hName;
        this.hpUrl = hpUrl;
        this.hRate = hRate;
        this.rPrice = rPrice;
    }



}

