package com.zemosolabs.financialtracking.userservice.service;

import com.zemosolabs.financialtracking.userservice.constants.Constants;
import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import com.zemosolabs.financialtracking.userservice.exception.UserProfileSettingsException;
import com.zemosolabs.financialtracking.userservice.objectMapper.UserProfileSettingsMapper;
import com.zemosolabs.financialtracking.userservice.repository.UserProfileSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserProfileSettingServiceImpl implements  UserProfileSettingService{

    @Autowired
    private UserProfileSettingsRepository settingsRepository;

    @Autowired
    private UserProfileSettingsMapper settingsMapper;

    @Override
    public UserProfileSettingsDto findById(int id) throws UserProfileSettingsException {
        Optional<UserProfileSettings> result= settingsRepository.findById(id);
        if(!result.isPresent()){
            throw new UserProfileSettingsException(Constants.USER_PROFILE_SETTINGS_NOT_FOUND+id);
        }
        return settingsMapper.convertToDto(result.get());
    }

    @Override
    public UserProfileSettingsDto save(UserProfileSettingsDto settingsDTO) {
        UserProfileSettings settings = settingsMapper.convertToEntity(settingsDTO);
        settingsRepository.save(settings);
        return settingsMapper.convertToDto(settings);
    }

    @Override
    public UserProfileSettingsDto findSettingsByUserId(String id) throws UserProfileSettingsException {
        Optional<UserProfileSettings> result= settingsRepository.findSettingsByUserId(id);
        if(!result.isPresent()){
            throw new UserProfileSettingsException(Constants.USER_PROFILE_SETTINGS_NOT_FOUND+id);
        }
        return settingsMapper.convertToDto(result.get());
    }

}
