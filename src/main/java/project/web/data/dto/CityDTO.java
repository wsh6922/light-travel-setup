package project.web.data.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.web.data.domain.City;

@Setter
@Getter
@NoArgsConstructor
public class CityDTO {
    private Long num;
    private String name;
    private String info;
    private String pic;

    public CityDTO(Long num, String name, String info, String pic) {
        this.num = num;
        this.name = name;
        this.info = info;
        this.pic = pic;
    }

    public City city() {
        return City.builder()
                .cNum(this.num)
                .cName(this.name)
                .cInfo(this.info)
                .cPic(this.pic)
                .build();
    }

}
