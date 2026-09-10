package project.web.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class MainNativePageDTO {
    private Long hNum;
    private String paPicUrl;
    private String hName;
    private String rName;
    private Integer paPrice;  // room의 기본가격에서 수수료를 계산한 값

    public MainNativePageDTO(Long hNum,String paPicUrl, String hName, String rName, Long rCost, Double paCharge) {
        this.hNum = hNum;
        this.paPicUrl = paPicUrl;
        this.hName = hName;
        this.rName = rName;
        this.paPrice = (int)(rCost * (1 + paCharge/100.0));  // room의 기본가격에서 수수료를 계산한 값
    }
}