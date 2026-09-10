package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatRoomDTO {
    private String uId;
    private String uName;
    private String cot;

    public ChatRoomDTO(String uId, String uName, String cot) {
        this.uId = uId;
        this.uName = uName;
        this.cot = cot;
    }
}
