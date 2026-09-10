package project.web.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RecommendHotelDTO {
    private Long hNum; // hotel - 식별번호
    private String hName; // hotel - 호텔이름
    private String hpUrl; // hotelPicture - url 이름
    private Double hRate ; // 호텔 별점

    public RecommendHotelDTO(Long hNum, String hName, String hpUrl,Double hRate) {
        this.hNum = hNum;
        this.hName = hName;
        this.hpUrl = hpUrl;
        this.hRate = hRate;
    }

}
