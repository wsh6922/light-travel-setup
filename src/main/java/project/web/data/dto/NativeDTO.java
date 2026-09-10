package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;
import project.web.data.domain.Native;

@Getter
@Setter
public class NativeDTO {
    private Long num;
    private String name;
    private String id;
    private String pw;
    private String phone;
    private String email;
    private String location;
    private String profile;
    private String intro;

    public Native nativeBuild() {
        return Native.builder()
                .nId(this.id)
                .nPw(this.pw)
                .nEmail(this.email)
                .nLocation(this.location)
                .nProfile(this.profile)
                .nPhone(this.phone)
                .build();
    }


    public NativeDTO(Long num, String name, String location, String profile, String intro) {
        this.num = num;
        this.name = name;
        this.location = location;
        this.profile = profile;
        this.intro = intro;
    }

    public NativeDTO(Long num, String name, String id, String phone, String email, String location, String profile, String intro) {
        this.num = num;
        this.name = name;
        this.id = id;
        this.phone = phone;
        this.email = email;
        this.location = location;
        this.profile = profile;
        this.intro = intro;
    }
}
