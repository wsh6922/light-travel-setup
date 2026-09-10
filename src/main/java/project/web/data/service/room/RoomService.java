package project.web.data.service.room;

import project.web.data.domain.Room;
import project.web.data.dto.SelectRoomDTO;
import project.web.data.dto.ShowRoomDTO;

import java.util.List;

public interface RoomService {

    Room getOneRoom(Long rNum); // room 식별번호로 찾음
    Room getRoomByNp(Long paNum); // NativePage 식별번호로 방 정보 찾음
    
    List<ShowRoomDTO> getRoomByNative(Long hNum);
    
    List<Room> getAll(Long hNum);

    List<SelectRoomDTO> getSelect(Long hNum);
}
