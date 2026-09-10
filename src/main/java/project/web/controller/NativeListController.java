package project.web.controller;

import org.springframework.web.bind.annotation.*;
import project.web.data.dto.NativeDTO;
import project.web.data.dto.RegisterRoomDTO;
import project.web.data.service.NativePage.NativePageService;
import project.web.data.service.nativeP.NativeService;

import java.util.List;

@RestController
@RequestMapping("/native")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true", methods = {RequestMethod.GET, RequestMethod.POST})
public class NativeListController {


    private final NativeService nativeService;
    private final NativePageService nativePageService;

    public NativeListController(NativeService nativeService, NativePageService nativePageService) {
        this.nativeService = nativeService;
        this.nativePageService = nativePageService;
    }

    @GetMapping(value = "/native-list")
    public List<NativeDTO> getNativeList() {
        return nativeService.getNativeList();
    }
    @GetMapping(value = "/native-list-find")
    public List<NativeDTO> findByNativeList(@RequestParam Long num) {
        return nativeService.findbyNativeList(num);
    }

//    hNum 필요
    @PostMapping(value = "/native-register")
    public List<RegisterRoomDTO> getRoom(Long nNum) {
        return nativePageService.getRegisterRoom(nNum);
    }
}
