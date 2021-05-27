package com.zemosolabs.financialtracking.userservice.service;

import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import com.zemosolabs.financialtracking.userservice.exception.UserProfileSettingsException;

import java.util.List;

public interface UserProfileSettingService {
    UserProfileSettingsDto findById(int id) throws UserProfileSettingsException;
    UserProfileSettingsDto save(UserProfileSettingsDto settingsDTO);
    UserProfileSettingsDto findSettingsByUserId(String id) throws UserProfileSettingsException;
}
