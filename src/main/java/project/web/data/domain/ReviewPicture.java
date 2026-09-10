package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewPicture {
    @Id
    @Column(name = "revpic_num")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long revPicNum;

    @Column(name = "revpic_url")
    private String revPicUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rev_num")
    @JsonManagedReference
    private Review review;

    public ReviewPicture(Review review, String revPicUrl) {
        this.review = review;
        this.revPicUrl = revPicUrl;
    }

}
