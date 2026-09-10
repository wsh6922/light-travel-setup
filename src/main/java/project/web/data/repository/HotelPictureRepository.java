package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.HotelPicture;
import project.web.data.dto.PicDTO;
import project.web.data.dto.TestDTO;

import java.util.List;

public interface HotelPictureRepository extends JpaRepository<HotelPicture, Long> {
    @Query("select new project.web.data.dto.TestDTO(hp.hPicUrl) from HotelPicture hp where hp.hPicUrl like '%main%'")
    List<TestDTO> getUrl();

    @Query("select new project.web.data.dto.PicDTO(hp.hPicUrl) from HotelPicture hp join hp.hotel h where h.hNum = :hNum")
    PicDTO getPic(Long hNum);
}
