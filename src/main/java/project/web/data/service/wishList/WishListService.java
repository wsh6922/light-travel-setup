package project.web.data.service.wishList;

import org.springframework.data.domain.Pageable;
import project.web.data.domain.Hotel;
import project.web.data.domain.NativePage;
import project.web.data.domain.User;
import project.web.data.dto.ShowReviewDTO;
import project.web.data.dto.WishListDTO;

import java.util.List;

public interface WishListService {
    List<WishListDTO> getWishList(String id);
    void insertWishList(User user, Hotel hotel);

}