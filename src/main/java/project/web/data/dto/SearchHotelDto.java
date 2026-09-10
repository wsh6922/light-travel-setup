package project.web.data.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SearchHotelDto {

    private String hName; // 호텔이름
    private String hpUrl; // 호텔사진
    private double hRate; // 호텔별점
    private String cName; // 도시이름
    private Long hNum; // 호텔 번호
    private Double lat;
    private Double lng;

    public SearchHotelDto(Long hNum,String hName, String hPicUrl, double hRate, String cName, Double lat, Double lng) {
        this.hName = hName;
        this.hpUrl = hPicUrl;
        this.hRate = hRate;
        this.cName = cName;
        this.hNum = hNum;
        this.lat = lat;
        this.lng = lng;
    }

}
