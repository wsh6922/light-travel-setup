package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "native_page")
public class NativePage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pa_num")
    private Long paNum; // 페이지 식별번호

    @Column(name = "pa_con", length = 10000)
    private String paCon; // 내용

    @Column(name = "pa_date")
    private LocalDate paDate; // 작성일자

    @Column(name = "pa_charge")
    private Double paCharge; // 수수료

    @Column(name = "pa_res")
    private Boolean paRes; // 예약 여부

    @Column(name = "pa_facility")
    private String paFacility; // 시설 및 서비스

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "r_num")
    @JsonManagedReference
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "n_num")
    @JsonManagedReference
    private Native aNative; // 현지인 식별번호 - native와 외래키

    @OneToMany(mappedBy = "nativePage",fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Reservation> reservationList = new ArrayList<>();

    @OneToMany(mappedBy = "nativePage", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<NativePagePicture> nativePagePictures = new ArrayList<>();


}
