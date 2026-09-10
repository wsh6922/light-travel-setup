package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.Native;
import project.web.data.dto.NativeDTO;

import java.util.List;

public interface NativeRepository extends JpaRepository<Native, Long> {

    Native findBynId(String id);
    Boolean existsBynId(String id);
    Boolean existsBynEmail(String email);
    Boolean existsBynPhone(String phone);


    @Query("select new project.web.data.dto.NativeDTO(n.nNum, n.nName, n.nLocation, n.nProfile, n.nIntro) from Native n")
    List<NativeDTO> getNativeList();


    @Query("select new project.web.data.dto.NativeDTO(n.nNum, n.nName, n.nId, n.nPhone, n.nEmail, n.nLocation, n.nProfile, n.nIntro) from Native n where n.nNum = :num")
    List<NativeDTO> findByNativeList(Long num);

    @Query("select n from Native n order by n.nNum desc limit 1")
    Native lastInsert();
}
