package project.web.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.web.data.domain.Native;
import project.web.data.domain.User;

@Getter
@Setter
@NoArgsConstructor
public class ChatConDTO {
    private String userName;
    private String nativeName;
    private String content;
    private String sender;

    public ChatConDTO(String userName, String nativeName, String content,String sender) {
        this.userName = userName;
        this.nativeName = nativeName;
        this.content = content;
        this.sender = sender;
    }
}
