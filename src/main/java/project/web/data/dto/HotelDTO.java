package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HotelDTO {

    private Long hNum;
    private String name;
    private String url;
    private Double lng;
    private Double lat;
    private String city;

    public HotelDTO(Long hNum, String name, String url, Double lng, Double lat, String city) {
        this.hNum = hNum;
        this.name = name;
        this.url = url;
        this.lng = lng;
        this.lat = lat;
        this.city = city;
    }
}
