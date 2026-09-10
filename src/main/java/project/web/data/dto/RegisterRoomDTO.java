package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class RegisterRoomDTO {
    private Long paNum; // 현지인이 올린 상품 개별번호
    private String hName; // 호텔 이름
    private String hUrl; // 호텔 사진으로 뽑기
    private LocalDate paDate; // 상품 등록일
    private String rName; // 방 이름
    private Long paPrice; // 방 기본 가격과 현지인이 설정한 수수료를 계산한 결과
    
    private String cName; // 도시 이름
    private String nation; // 국가명

//    지역, 도시명 추가 하기 -> nativeList 에서 사용함
    public RegisterRoomDTO(Long paNum,String hName, Long rCost, String hUrl, LocalDate paDate, String rName, Double paCharge) {
        this.paNum = paNum;
        this.hName = hName;
        this.hUrl = hUrl;
        this.paDate = paDate;
        this.rName = rName;
        this.paPrice = (long) (rCost + (rCost * paCharge));
    }

    public RegisterRoomDTO(Long paNum, String hName, Long rCost, String hUrl, LocalDate paDate, String rName, Double paCharge,  String cName, String nation) {
        this.paNum = paNum;
        this.hName = hName;
        this.hUrl = hUrl;
        this.paDate = paDate;
        this.rName = rName;
        this.paPrice =  (long) (rCost + (rCost * paCharge));
        this.cName = cName;
        this.nation = nation;
    }
}
