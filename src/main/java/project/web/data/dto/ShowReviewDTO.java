package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ShowReviewDTO {
    private Long num;
    private String name;
    private Integer rate;
    private String content;
    private LocalDate reviewDate;

    public ShowReviewDTO(Long num ,String name, Integer rate, String content, LocalDate reviewDate) {
        this.num = num;
        this.name = name;
        this.rate = rate;
        this.content = content;
        this.reviewDate = reviewDate;
    }
}
