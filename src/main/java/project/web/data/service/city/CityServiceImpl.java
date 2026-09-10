package project.web.data.service.city;

import org.springframework.stereotype.Service;
import project.web.data.domain.City;
import project.web.data.dto.CityDTO;
import project.web.data.repository.CityRepository;
import java.util.*;

@Service
public class CityServiceImpl implements CityService {
    private final CityRepository cityRepository;
    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public List<CityDTO> getCityAll() {
        return cityRepository.findAllCity();
    }

    @Override
    public CityDTO getCity(String cName) {
        return cityRepository.findCityByName(cName);
    }

    @Override
    public City getCityInHotel(Long hNum) {
        return cityRepository.findCityInHotel(hNum);
    }

    @Override
    public boolean existsCity(String name) {
        return cityRepository.existsBycName(name);
    }
}
