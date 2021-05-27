package com.zemosolabs.financialtracking.userservice.controller;


import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.exception.UserProfileSettingsException;
import com.zemosolabs.financialtracking.userservice.constants.Constants;
import com.zemosolabs.financialtracking.userservice.service.UserProfileSettingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
public class UserProfileSettingsController {

    private final UserProfileSettingService userProfileSettingService;

    @Autowired
    public UserProfileSettingsController(UserProfileSettingService theUserProfileSettingService){
        this.userProfileSettingService=theUserProfileSettingService;
    }


    @GetMapping("/settings/{settingsId}")
    public UserProfileSettingsDto findUserSettingsById(@PathVariable int settingsId) throws UserProfileSettingsException {
        UserProfileSettingsDto settingsDto = userProfileSettingService.findById(settingsId);
        return settingsDto;

    }

    @PutMapping(value="/settings/{settingsId}")
    public UserProfileSettingsDto updateSettings(JwtAuthenticationToken token,@RequestBody UserProfileSettingsDto settingsDto) {
       settingsDto.setUserId(token.getName());
        userProfileSettingService.save(settingsDto);
        return settingsDto;
    }

    
}
