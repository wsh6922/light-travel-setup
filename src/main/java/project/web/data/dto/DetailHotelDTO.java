package project.web.data.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.web.data.domain.Hotel;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DetailHotelDTO {

    private String name;
    private String phone;
    private String mail;
    private String site;
    private String addr;

    public Hotel hotel() {
        return Hotel.builder().
                hName(this.name).
                hAddr(this.addr).
                hEmail(this.mail).
                hSite(this.site).
                hPhone(this.phone).
                build();
    }


}
