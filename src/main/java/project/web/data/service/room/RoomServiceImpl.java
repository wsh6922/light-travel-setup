package project.web.data.service.room;

import org.springframework.stereotype.Service;
import project.web.data.domain.Room;
import project.web.data.dto.SelectRoomDTO;
import project.web.data.dto.ShowRoomDTO;
import project.web.data.repository.RoomRepository;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService{

    private final RoomRepository roomRepository;

    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public Room getOneRoom(Long rNum) {
        Room room = roomRepository.getById(rNum);
        return room;
    }

    @Override
    public List<ShowRoomDTO> getRoomByNative(Long hNum) {
        return roomRepository.findRoomByHotel(hNum);
    }

    @Override
    public List<Room> getAll(Long hNum) {
        return roomRepository.findRoom(hNum);
    }

    @Override
    public Room getRoomByNp(Long paNum) {
        return roomRepository.findRoomByNp(paNum);
    }

    @Override
    public List<SelectRoomDTO> getSelect(Long hNum) {
        return roomRepository.findByHotelRoom(hNum);
    }
}
