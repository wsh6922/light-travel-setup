package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;
import project.web.data.domain.Chat;
import project.web.data.domain.Native;
import project.web.data.domain.User;

@Getter
@Setter
public class ChatDTO {
    private String uId;
    private String nId;
    private String content;
    private String sender; // 현지인이면 1 아니면 0

    private String userName;
    private String nativeName;

    public ChatDTO(String uId, String nId, String content, String sender) {
        this.uId = uId;
        this.nId = nId;
        this.content = content;
        this.sender = sender;
    }

    public Chat chat(User user, Native aNative) {
        if (sender.equals("0")) {
            return Chat.builder()
                    .user(user)
                    .aNative(aNative)
                    .sender("0")
                    .content(this.content)
                    .build();
        } else {
            return Chat.builder()
                    .user(user)
                    .aNative(aNative)
                    .sender("1")
                    .content(this.content)
                    .build();
        }

    }
}
