package project.web.data.service.city;

import project.web.data.domain.City;
import project.web.data.dto.CityDTO;

import java.util.List;

public interface CityService {

    City getCityInHotel(Long hNum);
    List<CityDTO> getCityAll();
    CityDTO getCity(String cName);

    boolean existsCity(String name);
}
