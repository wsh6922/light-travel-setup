package project.web.data.service.nativeP;

import project.web.data.domain.Native;
import project.web.data.dto.LoginDTO;
import project.web.data.dto.LoginDTORequest;
import project.web.data.dto.NativeDTO;

import java.util.List;

public interface NativeService {

    boolean login(LoginDTO loginDTO);
    String insertNative(LoginDTORequest join);
    boolean checkId(String id);
    boolean checkEmail(String email);
    boolean checkPhone(String phone);
    Native getNative(String nId);
    List<NativeDTO> getNativeList();
    List<NativeDTO> findbyNativeList(Long num);

    Native lastInsert();
    void insertImg(Native aNative);
}
