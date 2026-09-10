package project.web.data.service.reservation;

import project.web.data.domain.NativePage;
import project.web.data.domain.User;
import project.web.data.dto.MyResInfoDTO;

import java.util.List;

public interface ReservationService {

    List<MyResInfoDTO> getResInfo(String id);
    void deleteRes(Long num);

    void insertRes(User user, NativePage nativePage);
}
