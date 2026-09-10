package project.web.data.service.user;

import project.web.data.domain.User;
import project.web.data.dto.LoginDTO;
import project.web.data.dto.MyPageUserDTO;
import project.web.data.dto.LoginDTORequest;
import project.web.data.dto.UpdatePwDTO;

import java.util.*;

public interface UserService {

    boolean login(LoginDTO userLoginDTO); // 로그인
    boolean login(String sub);
    String insertUser(LoginDTORequest userDTO); // 회원 가입
    List<User> getAllUser(); // 회원 전체 조회 - 모든 정보
    MyPageUserDTO getUserInfo(String id);
    User getUser(String id);
    String updatePw(UpdatePwDTO updatePwDTO, String id);

    boolean checkId(String id);
    boolean checkEmail(String email);
    boolean checkPhone(String phone);

    void insertUser(User user);

}
