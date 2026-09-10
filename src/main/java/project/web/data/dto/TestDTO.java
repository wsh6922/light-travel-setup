package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestDTO {
    private String imgUrl;

    public TestDTO(String url) {
        this.imgUrl = url;
    }
}
