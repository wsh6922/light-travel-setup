package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.WishList;
import project.web.data.dto.WishListDTO;

import java.util.List;

public interface WishListRepository extends JpaRepository<WishList, Long> {
    @Query("select new project.web.data.dto.WishListDTO(h.hNum, h.hName, hp.hPicUrl) " +
            "from WishList w join w.user u join w.hotel h join h.hotelPictureList hp join h.roomList r " +
            "where u.uId = :uId group by h.hNum")
    List<WishListDTO> getWishListByuId(String uId);
}