package project.web.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class nativeInfoDTO {
    private String npName;
    private String npProfile;
    private String npPhone;
    private String nId;

    public nativeInfoDTO(String npName, String npProfile, String npPhone,String nId) {
        this.npName = npName;
        this.npProfile = npProfile;
        this.npPhone = npPhone;
        this.nId = nId;
    }
}
