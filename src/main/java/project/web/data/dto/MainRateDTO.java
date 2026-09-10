package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MainRateDTO {
    private String hName;
    private String hUrl;
    private Double rate;

    public MainRateDTO(String hName, String hUrl, Double rate) {
        this.hName = hName;
        this.hUrl = hUrl;
        this.rate = rate;
    }
}
