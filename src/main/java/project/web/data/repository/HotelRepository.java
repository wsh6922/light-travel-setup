package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.City;
import project.web.data.domain.Hotel;
import project.web.data.dto.*;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel,Long> {

    List<Hotel> findAllByhName(String name);


    //  Type 매개변수를 받아 1 번 기준 쿼리
    @Query("select new project.web.data.dto.MainHotelDTO (h.hNum, h.hName, h.hType, hp.hPicUrl) from Hotel h join h.hotelPictureList hp join h.roomList r "+
            "where h.hType = :type " )
    List<MainHotelDTO> findByHotelType(Integer type);

    // 도시 이름으로 받아 호텔 뽑기
    // 도시 이름으로 받아 호텔 뽑기
    @Query("select new project.web.data.dto.MainHotelDTO (h.hNum, h.hName, hp.hPicUrl, h.hRate, r.rCost) from City c join c.hotelList h join h.hotelPictureList hp join h.hotelRoomList r "+
            "where c.cName like %:name% and r.rCost = (select min(r2.rCost) from City c2 join c2.hotelList h2 join h2.hotelRoomList r2 where h2.hNum = h.hNum) " +
            "group by h.hName" )
    List<MainHotelDTO> getHotelByCname(String name);

    @Query("select new project.web.data.dto.HotelDTO(h.hNum, h.hName, hp.hPicUrl, h.hLong, h.hLat, c.cName) from Hotel h join h.hotelPictureList hp join h.city c where c.cName like %:cName%")
    List<HotelDTO> findByHotelNameUrl(String cName);

    @Query("select new project.web.data.dto.HotelDTO(h.hNum, h.hName, hp.hPicUrl, h.hLong, h.hLat, c.cName) from Hotel h join h.hotelPictureList hp join h.city c")
    List<HotelDTO> findByHotelNameUrl();

    Hotel findByhNum(Long num);
    @Query("select new project.web.data.dto.RecommendHotelDTO(h.hNum, h.hName, hp.hPicUrl , h.hRate) from Hotel h join h.hotelPictureList hp" +
            " where h.city = :city and h.hName Not IN(:hName)")
    List<RecommendHotelDTO> findSimilarHotel(City city, String hName );

    //    남욱
    @Query("select new project.web.data.dto.SearchHotelDto(h.hNum,h.hName, hp.hPicUrl, h.hRate, c.cName, h.hLat, h.hLong) " +
            "from Hotel h join h.city c join h.hotelPictureList hp " +
            "where c.cName like %:name% ")
    List<SearchHotelDto> findHotelBycName(String name);
    @Query(value = "select new project.web.data.dto.SearchHotelDto(h.hNum,h.hName, hp.hPicUrl, h.hRate, c.cName, h.hLat, h.hLong) " +
            "from Hotel h " +
            "join h.city c " +
            "join h.hotelPictureList hp " +
            "join h.hotelRoomList r " +
            "where c.cName like %:name% " +
            "order by r.rCost desc")
    List<SearchHotelDto> findHotelBycNameOrderByRoomCostDesc(String name);
    @Query(value = "select new project.web.data.dto.SearchHotelDto(h.hNum,h.hName, hp.hPicUrl, h.hRate, c.cName, h.hLat, h.hLong) " +
            "from Hotel h " +
            "join h.city c " +
            "join h.hotelPictureList hp " +
            "join h.hotelRoomList r " +
            "where c.cName like %:name% " +
            "order by r.rCost asc")
    List<SearchHotelDto> findHotelBycNameOrderByRoomCostAsc(String name);
    @Query(value = "select new project.web.data.dto.SearchHotelDto(h.hNum,h.hName, hp.hPicUrl, h.hRate, c.cName, h.hLat, h.hLong) " +
            "from Hotel h " +
            "join h.city c " +
            "join c.nation n " +
            "join h.hotelPictureList hp " +
            "join h.hotelRoomList r " +
            "where n.nName like %:name% ")
    List<SearchHotelDto> findHotelBynName(String name);

    @Query("select new project.web.data.dto.MainRateDTO(h.hName, hp.hPicUrl, h.hRate) from Hotel h join h.hotelPictureList hp order by h.hRate desc limit 6")
    List<MainRateDTO> getHighRate();
}