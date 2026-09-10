package project.web.data.service.reservation;

import org.springframework.stereotype.Service;
import project.web.data.domain.NativePage;
import project.web.data.domain.Reservation;
import project.web.data.domain.User;
import project.web.data.dto.MyResInfoDTO;
import project.web.data.repository.ReservationRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService{
    private final ReservationRepository reservationRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public List<MyResInfoDTO> getResInfo(String id) {
        return reservationRepository.findResInfoByUser(id);
    }

    @Override
    public void deleteRes(Long num) {
        reservationRepository.deleteById(num);
    }

    @Override
    public void insertRes(User user, NativePage nativePage) {
        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setNativePage(nativePage);
        reservation.setResPayDate(LocalDate.now());
        reservation.setResDate(LocalDate.now());
        reservation.setResGuest(2);
        reservationRepository.save(reservation);
    }
}
