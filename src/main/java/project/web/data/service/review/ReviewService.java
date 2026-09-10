package project.web.data.service.review;

import org.springframework.data.domain.Pageable;
import project.web.data.domain.Hotel;
import project.web.data.domain.User;
import project.web.data.dto.ReviewDTO;
import project.web.data.dto.ShowReviewDTO;

import java.util.List;

public interface ReviewService {

    List<ShowReviewDTO> getReviewByHotel(Long hNum);
    void insertReview(ReviewDTO reviewDTO, User user, Hotel hotel);
    String deleteReview(Long revNum, User user);
    void insertReviewPic(List<String> url, User user);
    void updateReview(ReviewDTO reviewDTO, Long revNum, User user);

    Long countReview(Long hNum);
    Long sumRate(Long hNum);

    public List<ShowReviewDTO> getAllReviewPaged(Pageable pageable, Long hNum);
}
