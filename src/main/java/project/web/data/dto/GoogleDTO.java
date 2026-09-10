package project.web.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.web.data.domain.User;

@Getter
@Setter
@NoArgsConstructor
public class GoogleDTO {

    private String name;
    private String sub; // id
    private String email;

    public GoogleDTO(String name, String sub, String email) {
        this.name = name;
        this.sub = sub;
        this.email = email;
    }

    public User user() {
        return User.builder()
                .uId(sub)
                .uPw(null)
                .uName(name)
                .uGender(null)
                .uEmail(email)
                .uBirth(null)
                .uPhone(null)
                .sns("1")
                .build();
    }
}
