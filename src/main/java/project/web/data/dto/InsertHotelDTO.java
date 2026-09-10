package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;
import project.web.data.domain.Hotel;
import project.web.data.domain.HotelPicture;

@Getter
@Setter
public class InsertHotelDTO {
    private Hotel hotel;
    private String url;

    public HotelPicture hotelPicture() {
        return HotelPicture.builder().
                hPicUrl(this.url).
                hotel(this.hotel).
                build();
    }
}
