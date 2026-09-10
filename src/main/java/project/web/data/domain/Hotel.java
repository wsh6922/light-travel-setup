package project.web.data.domain;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "hotel")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "h_num")
    private Long hNum; // 호텔식별번호 - room 과 외래키 ( 부모 )

    @Column(name = "h_name")
    private String hName; // 이름

    @Column(name = "h_phone")
    private String hPhone; // 전화번호

    @Column(name = "h_email")
    private String hEmail; // 이메일

    @Column(name = "h_site")
    private String hSite; // 사이트

    @Column(name = "h_lat")
    private Double hLat; // 위도

    @Column(name = "h_long")
    private Double hLong; // 경도

    //    type 1 -> 특가 1번, type 2 -> 특가 2번, type 3 -> 특가 3번, type 4 -> 추천 호텔
    @Column(name = "h_type")
    private Integer hType; // 상태 - ex) 봄 여행 특가, 한정 특가등

    @Column(name = "h_addr")
    private String hAddr; // 주소

    @Column(name = "h_rate")
    private Double hRate; // 별점

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Review> review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "c_num")
    @JsonManagedReference
    private City city;

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<HotelPicture> hotelPictureList = new ArrayList<>();

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Room> hotelRoomList = new ArrayList<>();

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Room> roomList = new ArrayList<>();

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<WishList> wishLists = new ArrayList<>();
}
