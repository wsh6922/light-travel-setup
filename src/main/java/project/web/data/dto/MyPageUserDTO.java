package project.web.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class MyPageUserDTO {
    private String name;
    private String email;
    private String phone;
    private String sns;

    public MyPageUserDTO(String name, String email, String phone, String sns) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.sns = sns;
    }
}
