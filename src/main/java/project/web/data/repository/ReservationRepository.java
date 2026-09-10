package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.Reservation;
import project.web.data.dto.MyResInfoDTO;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

//    Mypage -> 예약정보 보이기
    @Query("select new project.web.data.dto.MyResInfoDTO(h.hNum ,res.resNum,rnp.paNum ,res.resGuest, res.resDate, r.rCost, r.rName, h.hName, hp.hPicUrl, rnp.paCharge) " +
            "from Reservation res join res.user u join res.nativePage rnp join rnp.room r join r.hotel h join h.hotelPictureList hp where res.user.uId = :id")
    List<MyResInfoDTO> findResInfoByUser(String id);
}
