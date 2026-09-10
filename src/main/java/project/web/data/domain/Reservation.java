package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="reservation")
public class Reservation {
    @Id
    @Column(name = "res_num")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long resNum; // 예약 번호

    @Column(name = "res_date")
    private LocalDate resDate; // 예약 날짜

    @Column(name = "res_guest", nullable = true)
    private Integer resGuest; // 예약 인원수

    @Column(name = "res_payDate")
    private LocalDate resPayDate; // 결제 날짜

    @Column(name = "res_checkin")
    private LocalDate resCheckIn; // 체크인 날짜

    @Column(name = "res_checkout")
    private LocalDate resCheckOut; // 체크아웃 날짜

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_num")
    @JsonManagedReference
    private User user; // 회원식별번호 - user 와 외래키

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pa_num")
    @JsonManagedReference
    private NativePage nativePage;

}
