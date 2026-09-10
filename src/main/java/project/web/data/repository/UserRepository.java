package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.User;
import project.web.data.dto.MyPageUserDTO;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByuName(String name); // 회원 이름으로 조회
    @Query("select u from User u where u.uId = :id")
    User findByuId(String id); // 회원 아이디로 조회
    Boolean existsByuId(String id);
    Boolean existsByuEmail(String email);
    Boolean existsByuPhone(String phone);

    @Query("select new project.web.data.dto.MyPageUserDTO(u.uName, u.uEmail, u.uPhone, u.sns) from User u where u.uId = :id")
    MyPageUserDTO findById(String id);
}
