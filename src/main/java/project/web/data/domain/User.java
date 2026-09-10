package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
// Builder 롬복 어노테이션 -> 선언과 동시에 초기화 가능
@Builder
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "u_num")
    private Long uNum; // 회원식별번호

    @Column(unique = true, nullable = false, name = "u_id")
    private String uId; // 아이디

    @Column(name = "u_pw")
    private String uPw; // 비밀번호

    @Column(name = "u_birth")
    private LocalDate uBirth; // 생년월일

    @Column(unique = true,  name = "u_phone")
    private String uPhone; // 전화번호

    @Column(name = "u_gender")
    private String uGender; // 성별

    @Column(nullable = false, name = "u_name")
    private String uName; // 이름

    @Column(unique = true,nullable = false ,  name = "u_email")
    private String uEmail; // 이메일

    private String sns; // 소셜로그인 여부 - o x 로만

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Reservation> reservationList; // Reservation 과 외래관계

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Review> reviewList = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<WishList> wishLists = new ArrayList<>();

}
