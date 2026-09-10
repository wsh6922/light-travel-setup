package project.web.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ShowRoomDTO {
    private Long paNum; // 방 식별 번호가 아닌 해당 객실을 올린 현지인페이지의 식별번호를 가져옴
    private String rCapacity; // 방 인원수 ex_ 2인실
    private Long rCost; // 방 기본 요금과 수수료를 합친 비용
    private String rName; // 방 이름 ex_ 듀렉스 플렉스 방
    private String paFacility; // 방 편의시설 ex_ 금연방, 헤어드라이기 유무
    private String rBed; // 침대 갯수

//    추가본
    private String hName; // 호텔 이름
    private Long hNum; // 호텔 식별번호
    private String paContent; // 방 설명

    public ShowRoomDTO(Long paNum, String rCapacity, Long rCost, String rName, String paFacility, String rBed, String hName, Long hNum, String paContent, Double paCharge) {
        this.paNum = paNum;
        this.rCapacity = rCapacity;
        this.rName = rName;
        this.paFacility = paFacility;
        this.rBed = rBed;
        this.hName = hName;
        this.hNum = hNum;
        this.paContent = paContent;
        this.rCost = (long) (rCost + (rCost * paCharge));

    }

}
