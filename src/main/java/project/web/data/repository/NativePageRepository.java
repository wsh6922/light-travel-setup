package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.Native;
import project.web.data.domain.NativePage;
import project.web.data.dto.MainNativePageDTO;
import project.web.data.dto.PicDTO;
import project.web.data.dto.RegisterRoomDTO;
import project.web.data.dto.nativeInfoDTO;

import java.util.List;

public interface NativePageRepository extends JpaRepository<NativePage, Long> {

    @Query("select np from NativePage np where np.paNum = :paNum")
    NativePage findNp(Long paNum);

    @Query("select new project.web.data.dto.RegisterRoomDTO(np.paNum ,h.hName, r.rCost, npp.paPicUrl , np.paDate, r.rName, np.paCharge) " +
            "from NativePage np join np.room r join r.hotel h join np.nativePagePictures npp where np.aNative = :aNative and npp.paPicUrl like '%main%'")
    List<RegisterRoomDTO> findRegisterByNative(Native aNative);

//    쿼리 수정요망
    @Query("select new project.web.data.dto.RegisterRoomDTO(np.paNum ,h.hName, r.rCost, hhp.hPicUrl , np.paDate, r.rName, np.paCharge, c.cName, n.nName) " +
            "from NativePage np join np.room r join r.hotel h join h.hotelPictureList hhp join h.city c join c.nation n where np.aNative.nNum = :nNum and np.paRes = false")
    List<RegisterRoomDTO> findRegisterByNative(Long nNum);
    @Query("select new project.web.data.dto.PicDTO(npp.paPicUrl) from NativePage np join np.nativePagePictures npp where npp.nativePage.paNum = :paNum")
    List<PicDTO> findNpPic(Long paNum);

//    옮겨 우진아 native로
    @Query("select new project.web.data.dto.nativeInfoDTO(n.nName, n.nProfile, n.nPhone, n.nId) from NativePage np join np.aNative n where np.paNum = :paNum")
    nativeInfoDTO findNative(Long paNum);

    @Query("select new project.web.data.dto.MainNativePageDTO" +
            "(h.hNum, npp.paPicUrl, h.hName, r.rName, r.rCost, np.paCharge) " +
            "from Native n join n.nativePageList np join np.nativePagePictures npp join np.room r join r.hotel h " +
            "group by r.rName order by r.rCost limit 8")
    List<MainNativePageDTO> getNativePage();

//    현재 버그있음 3개가 나와야 하는데 2개만 나오는 버그 왜 ?
    @Query("select new project.web.data.dto.MainNativePageDTO" +
            "(h.hNum, npp.paPicUrl, h.hName, r.rName, r.rCost, np.paCharge) " +
            "from Native n join n.nativePageList np join np.nativePagePictures npp join np.room r join r.hotel h where np.aNative.nName = :name " +
            "group by r.rName order by r.rCost limit 8")
    List<MainNativePageDTO> getNativePage(String name);

    @Query("select np from NativePage np order by np.paNum desc limit 1")
    NativePage findPaNum();
}
