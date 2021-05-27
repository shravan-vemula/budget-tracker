package com.zemosolabs.financialtracking.userservice.dto;

import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import lombok.Data;
;import javax.persistence.Column;
import java.util.Date;
import java.util.List;


@Data
public class UserDetailsDto {

    private int id ;

    private String name ;

    private String email;

    private String userId;

    private String phone;

    private String country;

    private boolean isDeleted;

    private Date createdAt;

    private String createdBy;

    private Date modifiedAt;

    private String modifiedBy;

    private UserProfileSettingsDto userProfileSettingsDto;

}
