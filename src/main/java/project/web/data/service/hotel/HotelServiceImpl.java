package project.web.data.service.hotel;

import org.springframework.stereotype.Service;
import project.web.data.domain.City;
import project.web.data.domain.Hotel;
import project.web.data.domain.HotelPicture;
import project.web.data.dto.*;
import project.web.data.repository.HotelPictureRepository;
import project.web.data.repository.HotelRepository;

import java.util.*;

// HotelPicture를 새로운 service로 만들기에는 비효율적이라고 생각이 들어서 HotelService 에 같이 만듬
@Service
public class HotelServiceImpl implements HotelService{

    private final HotelRepository hotelRepository;
    private final HotelPictureRepository hotelPictureRepository;

    public HotelServiceImpl(HotelRepository hotelRepository, HotelPictureRepository hotelPictureRepository) {
        this.hotelRepository = hotelRepository;
        this.hotelPictureRepository = hotelPictureRepository;
    }

    // 호텔 1,4 타입 찾기
    @Override
    public List<MainHotelDTO> getHotelType(Integer type) {
        List<MainHotelDTO> getHotel = hotelRepository.findByHotelType(type);
        return getHotel;
    }

    //   전체 호텔 뽑기
    @Override
    public List<Hotel> getAllHotel() {
        List<Hotel> getAll = hotelRepository.findAll();
        return getAll;

    }

    @Override
    public List<HotelDTO> getHotelByName(String name) {
        List<HotelDTO> getName = hotelRepository.findByHotelNameUrl(name);

        return getName;
    }

    @Override
    public List<HotelDTO> getHotelByName() {
        List<HotelDTO> getName = hotelRepository.findByHotelNameUrl();

        return getName;
    }

    @Override
    public void insertHotelPic(List<String> url, Long hNum) {
        Hotel hotel = hotelRepository.findByhNum(hNum);
        InsertHotelDTO insertHotelDTO = new InsertHotelDTO();
        insertHotelDTO.setHotel(hotel);
        for (String u : url) {
            insertHotelDTO.setUrl(u);
            HotelPicture hotelPicture = new HotelPicture(insertHotelDTO.getHotel(), insertHotelDTO.getUrl());
            hotelPictureRepository.save(hotelPicture);
        }
    }

    @Override
    public DetailHotelDTO getDetailHotel(Long hNum) {
        Hotel hotel = hotelRepository.findByhNum(hNum);
        DetailHotelDTO detailHotelDTO = new DetailHotelDTO();
        detailHotelDTO.setName(hotel.getHName());
        detailHotelDTO.setSite(hotel.getHSite());
        detailHotelDTO.setMail(hotel.getHEmail());
        detailHotelDTO.setAddr(hotel.getHAddr());
        detailHotelDTO.setPhone(hotel.getHPhone());

        return detailHotelDTO;
    }

    //
    @Override
    public PicDTO getHotelPic(Long hNum) {
        PicDTO hotelPicDTOS = hotelPictureRepository.getPic(hNum);
        return hotelPicDTOS;
    }

    //    호텔 번호로 호텔 찾기
    @Override
    public Hotel getHotel(Long hNum) {
        return hotelRepository.findByhNum(hNum);
    }

    //    비슷한 호텔 찾기
    @Override
    public List<RecommendHotelDTO> getSimilarHotel(City city, String hName) {
        return hotelRepository.findSimilarHotel(city, hName);
    }

    //  남욱
    @Override
    public List<SearchHotelDto> getHotelBycName(String name) {
        return hotelRepository.findHotelBycName(name);
    }

    @Override
    public List<SearchHotelDto> getHotelBycNameOrderByRoomCostAsc(String name) {
        return hotelRepository.findHotelBycNameOrderByRoomCostAsc(name);
    }

    @Override
    public List<SearchHotelDto> getHotelBycNameOrderByRoomCostDesc(String name) {
        return hotelRepository.findHotelBycNameOrderByRoomCostDesc(name);
    }

    @Override
    public Optional<List<SearchHotelDto>> getHotelBynName(String name) {
        List<SearchHotelDto> hotelBynName = hotelRepository.findHotelBynName(name);
        return hotelBynName.isEmpty() ? Optional.empty() : Optional.of(hotelBynName);
    }

    @Override
    public List<MainHotelDTO> getHotelByCName(String name) {
        List<MainHotelDTO> getHotel = hotelRepository.getHotelByCname(name);
        return getHotel;
    }

    @Override
    public void updateRate(Hotel hotel) {
        hotelRepository.save(hotel);
    }

    @Override
    public List<MainRateDTO> getHighRate() {
        return hotelRepository.getHighRate();
    }
}
