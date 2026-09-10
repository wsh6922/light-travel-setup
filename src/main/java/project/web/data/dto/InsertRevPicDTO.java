package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;
import project.web.data.domain.Review;

@Getter
@Setter
public class InsertRevPicDTO {
    private String url;
    private Review review;
}
