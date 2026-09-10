package project.web.data.service.NativePage;

import project.web.data.domain.Native;
import project.web.data.domain.NativePage;
import project.web.data.domain.Room;
import project.web.data.dto.*;

import java.util.List;

public interface NativePageService {
    void insertNativePage(NpInsertDTO npInsertDTO, Native aNative, Room room);
    void updatePage(NpInsertDTO npInsertDTO, Native aNative);
    NativePage getNp(Long paNum);
    void updateResG(Long paNum);
    void updateResB(Long paNum);
    List<RegisterRoomDTO> getRegisterRoom(Native aNative);
    List<RegisterRoomDTO> getRegisterRoom(Long nNum);
    List<PicDTO> getNpPic(Long paNum);

    nativeInfoDTO getN(Long paNum);

    List<MainNativePageDTO> getNativePage();
    List<MainNativePageDTO> getNativePage(String name);

    void insertNpPic(NativePage nativePage, List<String> url);

    NativePage oneNp();
}
