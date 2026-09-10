package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PicDTO {
    private String pic;

    public PicDTO(String pic) {
        this.pic = pic;
    }
}
