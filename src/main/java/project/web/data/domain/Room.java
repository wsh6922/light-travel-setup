package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "r_num")
    private Long rNum;

    @Column(name = "r_capacity")
    private String rCapacity; // 객실 인원 수

    @Column(name = "r_cost")
    private Long rCost; // 객실 비용

    @Column(name = "r_name")
    private String rName; // 객실명

    @Column(name = "r_bed")
    private String rBed; // 침대 수

    @Column(name = "r_type")
    private String rType; // 객실유형

    @Column(name = "r_no")
    private String rNo; // 남은 객실 수 = 1개 고정

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "h_num")
    @JsonManagedReference
    private Hotel hotel;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<NativePage> nativePageList = new ArrayList<>();
}
