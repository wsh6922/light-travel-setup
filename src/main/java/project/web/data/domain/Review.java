package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    @Id
    @Column(name = "rev_num")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long revNum;
    @Column(name = "rev_rate")
    private Integer revRate;
    @Column(name = "rev_con")
    private String revCon;
    @Column(name = "rev_date")
    private LocalDate revDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_num")
    @JsonManagedReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "h_num")
    @JsonManagedReference
    private Hotel hotel;

    @OneToMany(mappedBy = "review", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<ReviewPicture> reviewPictures = new ArrayList<>();
    public Review(Integer revRate, String revCon, LocalDate revDate, User user, Hotel hotel) {
        this.revRate = revRate;
        this.revCon = revCon;
        this.revDate = revDate;
        this.user = user;
        this.hotel = hotel;
    }
}
