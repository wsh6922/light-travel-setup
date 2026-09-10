package project.web.data.service.NativePage;

import org.springframework.stereotype.Service;
import project.web.data.domain.*;
import project.web.data.dto.*;
import project.web.data.repository.NativePagePicRepository;
import project.web.data.repository.NativePageRepository;

import java.util.List;

@Service
public class NativePageImpl implements NativePageService{

    private final NativePageRepository nativePageRepository ;
    private final NativePagePicRepository nativePagePicRepository;

    public NativePageImpl(NativePageRepository nativePageRepository, NativePagePicRepository nativePagePicRepository) {
        this.nativePageRepository = nativePageRepository;
        this.nativePagePicRepository = nativePagePicRepository;
    }

    //    해당 상품을 등록, 해당 방의 기본정보를 받아온 뒤 추가 정보(content, facility)만을 작성하여 db에 저장
    @Override
    public void insertNativePage(NpInsertDTO npInsertDTO, Native aNative, Room room) {
        NativePage nativePage = npInsertDTO.nativePage(aNative, room);
        nativePageRepository.save(nativePage);
    }

//    아직 안만듬, 상품 수정하는 메서드
    @Override
    public void updatePage(NpInsertDTO npInsertDTO, Native aNative) {

    }

//    해당 NativePage를 리턴
    @Override
    public NativePage getNp(Long paNum) {
        return nativePageRepository.findNp(paNum);
    }

//    해당 NativePage가 예약되면 paRes(에약 여부)를 ture로 바꿔줌, G -> Good
    @Override
    public void updateResG(Long paNum) {
        NativePage nativePage = nativePageRepository.findNp(paNum);
        nativePage.setPaRes(true);
        nativePageRepository.save(nativePage);
    }
    //    해당 NativePage가 예약 취소되면 paRes(에약 여부)를 false로 바꿔줌, B -> Bad
    @Override
    public void updateResB(Long paNum) {
        NativePage nativePage = nativePageRepository.findNp(paNum);
        nativePage.setPaRes(false);
        nativePageRepository.save(nativePage);
    }

    @Override
    public List<RegisterRoomDTO> getRegisterRoom(Native aNative) {
        return nativePageRepository.findRegisterByNative(aNative);
    }
    @Override
    public List<RegisterRoomDTO> getRegisterRoom(Long nNum) {
        return nativePageRepository.findRegisterByNative(nNum);
    }


    @Override
    public List<PicDTO> getNpPic(Long paNum) {
        return nativePageRepository.findNpPic(paNum);
    }

    @Override
    public nativeInfoDTO getN(Long paNum) {
        return nativePageRepository.findNative(paNum);
    }
    @Override
    public List<MainNativePageDTO> getNativePage() {
        return nativePageRepository.getNativePage();
    }

    @Override
    public void insertNpPic(NativePage nativePage, List<String> url) {
        for (String u : url) {
            NativePagePicture nativePagePicture = new NativePagePicture(u, nativePage);
            nativePagePicRepository.save(nativePagePicture);
        }
    }

    @Override
    public NativePage oneNp() {
        return nativePageRepository.findPaNum();
    }

    @Override
    public List<MainNativePageDTO> getNativePage(String name) {

        return nativePageRepository.getNativePage(name);
    }
}
