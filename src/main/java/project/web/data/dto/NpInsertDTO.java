package project.web.data.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.web.data.domain.Native;
import project.web.data.domain.NativePage;
import project.web.data.domain.Room;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NpInsertDTO {
    private String content;
    private String facility;
    private Double charge;

    public NativePage nativePage(Native aNative, Room room) {
        return NativePage.builder()
                .paCon(this.content)
                .paFacility(this.facility)
                .paDate(LocalDate.now())
                .paRes(false)
                .aNative(aNative)
                .room(room)
                .paCharge(this.charge * 0.01)
                .build();
    }

}
