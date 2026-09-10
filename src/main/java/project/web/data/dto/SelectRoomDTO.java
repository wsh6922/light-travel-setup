package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SelectRoomDTO {
    private Long rNum;
    private String rName;
    private Long rCost;

    public SelectRoomDTO(Long rNum, String rName, Long rCost) {
        this.rNum = rNum;
        this.rName = rName;
        this.rCost = rCost;
    }
}
