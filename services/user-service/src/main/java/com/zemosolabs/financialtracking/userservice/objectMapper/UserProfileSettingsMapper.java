package com.zemosolabs.financialtracking.userservice.objectMapper;

import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class UserProfileSettingsMapper {

    @Autowired
    private ModelMapper modelMapper;

    public UserProfileSettingsDto convertToDto(UserProfileSettings settings) {
        return modelMapper.map(settings, UserProfileSettingsDto.class);
    }

    public UserProfileSettings convertToEntity(UserProfileSettingsDto settingsDTO){
        return modelMapper.map(settingsDTO, UserProfileSettings.class);
    }
}
