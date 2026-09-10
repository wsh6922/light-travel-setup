package project.web.data.domain;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "native")

public class Native {
    // 현지인과 일반 유저간의 차이를 둘 수 있는 시리얼 번호? 필요할것같음
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "n_num")
    private Long nNum; // 현지인 식별 번호

    @Column(name = "n_name", nullable = false)
    private String nName; // 이름

    @Column(unique = true, nullable = false, name = "n_id")
    private String nId; // 아이디

    @Column(nullable = false, name = "n_pw")
    private String nPw; // 비밀번호

    @Column(unique = true, nullable = false, name = "n_phone")
    private String nPhone; // 전화번호

    @Column(unique = true, nullable = false, name = "n_email")
    private String nEmail; // 이메일

    @Column(nullable = false, name = "n_location")
    private String nLocation; // 사는 지역

    @Column(name = "n_profile")
    private String nProfile; // 프로필사진

    @Column(name = "n_intro", length = 1000)
    private String nIntro; // 자기 소개

    @Column(name = "n_account")
    private String nAccount; // 계좌

    @Column(name = "n_account_num")
    private String nAccountNum; // 계좌 번호


    @OneToMany(mappedBy = "aNative", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<NativePage> nativePageList;


}
