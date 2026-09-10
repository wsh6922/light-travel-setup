package project.web.data.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "chatmessage")
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer num;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "n_id", nullable = false)
    @JsonManagedReference
    private Native aNative;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_id", nullable = false)
    @JsonManagedReference
    private User user;

    @Column(name = "sender")
    private String sender;

    private String content;
}