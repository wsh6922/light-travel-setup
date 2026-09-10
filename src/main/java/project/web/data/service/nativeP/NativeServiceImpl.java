package project.web.data.service.nativeP;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import project.web.data.domain.Native;
import project.web.data.dto.LoginDTO;
import project.web.data.dto.LoginDTORequest;
import project.web.data.dto.NativeDTO;
import project.web.data.repository.NativeRepository;

import java.util.List;

@Service
public class NativeServiceImpl implements NativeService {
    private final static BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private final NativeRepository nativeRepository;

    public NativeServiceImpl(NativeRepository nativeRepository) {
        this.nativeRepository = nativeRepository;
    }

    @Override
    public String insertNative(LoginDTORequest join) {
        String securityPw = encoder.encode(join.getPw());
        join.setPw(securityPw);
        nativeRepository.save(join.aNative());

        return "현지인 가입 성공";
    }


    @Override
    public boolean login(LoginDTO loginDTO) {
        Native na = nativeRepository.findBynId(loginDTO.getId());
        if (na != null) {
            if(encoder.matches(loginDTO.getPw(), na.getNPw())) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    @Override
    public boolean checkId(String id) {
        return nativeRepository.existsBynId(id);
    }

    @Override
    public boolean checkEmail(String email) {
        return nativeRepository.existsBynEmail(email);
    }

    @Override
    public boolean checkPhone(String phone) {
        return nativeRepository.existsBynPhone(phone);
    }

    @Override
    public Native getNative(String nId) {
        return nativeRepository.findBynId(nId);
    }


    @Override
    public List<NativeDTO> getNativeList() { return nativeRepository.getNativeList(); }

    @Override
    public List<NativeDTO> findbyNativeList(Long num) {
        return nativeRepository.findByNativeList(num);
    }

    @Override
    public Native lastInsert() {
        return nativeRepository.lastInsert();
    }

    @Override
    public void insertImg(Native aNative) {
        nativeRepository.save(aNative);
    }
}
