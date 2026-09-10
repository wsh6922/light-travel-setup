package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
// 비번 업데이트시 사용하는 DTO
public class UpdatePwDTO {
    private String oldPw;
    private String newPw;
}
