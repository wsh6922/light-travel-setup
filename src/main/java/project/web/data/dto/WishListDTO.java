package project.web.data.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WishListDTO {
    private Long hNum;
    private String hName;
    private String hPicUrl;

    public WishListDTO(Long hNum, String hName, String hPicUrl) {
        this.hNum = hNum;
        this.hName = hName;
        this.hPicUrl = hPicUrl;
    }
}