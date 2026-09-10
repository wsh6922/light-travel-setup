package project.web.data.service.wishList;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.web.data.domain.Hotel;
import project.web.data.domain.NativePage;
import project.web.data.domain.User;
import project.web.data.domain.WishList;
import project.web.data.dto.ShowReviewDTO;
import project.web.data.dto.WishListDTO;
import project.web.data.repository.WishListRepository;

import java.util.List;

@Service
public class WishListServiceImpl implements WishListService{
    private final WishListRepository wishListRepository;
    public WishListServiceImpl(WishListRepository wishListRepository) {
        this.wishListRepository = wishListRepository;
    }

    @Override
    public List<WishListDTO> getWishList(String id) {
        return wishListRepository.getWishListByuId(id);
    }

    @Override
    public void insertWishList(User user, Hotel hotel) {
        WishList wishList = new WishList();
        wishList.setUser(user);
        wishList.setHotel(hotel);
        wishListRepository.save(wishList);
    }




}