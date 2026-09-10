package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Table(name = "hotel_picture")
//@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class HotelPicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hpic_num")
    private Long hPicNum;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "h_num")
    @JsonManagedReference
    private Hotel hotel;

    @Column(name = "hpic_url")
    private String hPicUrl;

    public void setHotel(Hotel hotel){
        this.hotel = hotel;
        hotel.getHotelPictureList().add(this);
    }

    public HotelPicture(Hotel hotel, String hPicUrl) {
        this.hotel = hotel;
        this.hPicUrl = hPicUrl;
    }
}
