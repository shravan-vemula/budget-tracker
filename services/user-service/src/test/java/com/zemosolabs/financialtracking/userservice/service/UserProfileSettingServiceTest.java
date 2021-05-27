package com.zemosolabs.financialtracking.userservice.service;

import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import com.zemosolabs.financialtracking.userservice.exception.UserProfileSettingsException;
import com.zemosolabs.financialtracking.userservice.objectMapper.UserProfileSettingsMapper;
import com.zemosolabs.financialtracking.userservice.repository.UserProfileSettingsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(SpringExtension.class)
@ImportAutoConfiguration
class UserProfileSettingServiceTest {

    @Mock
    private UserProfileSettingsRepository userProfileSettingsRepository;

    @Mock
    private UserProfileSettingsMapper settingsMapper;

    @InjectMocks
    private UserProfileSettingServiceImpl settingsService;

    private UserProfileSettings settings;

    private UserProfileSettingsDto settingsDTO;

    @BeforeEach
    public void setUp() {

        settings = new UserProfileSettings();
        settings.setId(1);
        settings.setUserId("1");
        settings.setDailyReminder(true);
        settings.setSummary(true);
        settings.setUsageOfCalculator(true);
        settings.setDefaultTimePeriod("June");
        settings.setDefaultDate("1");
        settings.setReminderForBillsDue("1 week");
        settings.setNotifyExceededExpense(true);
        settings.setNewBillAdded(true);
        settings.setTransactionsInAccount(true);
        settings.setNotifyExceedGoalPeriod(true);
        settings.setNotifyWhenGoalReached(true);
        settings.setRecurringExpensesDue(true);
        settings.setManageUncategorized(true);
        settings.setEmail(true);
        settings.setTextMessages(true);


        settingsDTO = settingsMapper.convertToDto(settings);

    }

    @Test
    void whenSaveSettingsCalled_settingsShouldBeSaved() {
        UserProfileSettingsDto actualSettingsDTO = settingsDTO;
        UserProfileSettings actualSettings = settings;
        Mockito.when(settingsMapper.convertToEntity(actualSettingsDTO)).thenReturn(actualSettings);
        Mockito.when(settingsMapper.convertToDto(settings)).thenReturn(actualSettingsDTO);
        UserProfileSettingsDto settingsSavedInDb = settingsService.save(settingsDTO);
        assertThat(actualSettingsDTO).isEqualTo(settingsSavedInDb);
        Mockito.verify(userProfileSettingsRepository).save(any());
    }

    @Test
    void whenFindByIdCalled_settingsWithIdShouldBeReturned() throws UserProfileSettingsException {
        UserProfileSettingsDto actualSettingsDTO = settingsDTO;
        UserProfileSettings actualSettings = settings;
        Mockito.when(settingsMapper.convertToDto(actualSettings)).thenReturn(actualSettingsDTO);
        Mockito.when(userProfileSettingsRepository.findById(actualSettings.getId())).thenReturn(Optional.of(settings));
        UserProfileSettingsDto expectedSettingsDTO = settingsService.findById(1);
        assertThat(actualSettingsDTO).isEqualTo(expectedSettingsDTO);
        Mockito.verify(userProfileSettingsRepository).findById(any());
    }


    @Test
    void whenFindByUserIdCalled_UserSettingsWithIdShouldBeReturned() throws UserProfileSettingsException {
        UserProfileSettingsDto actualSettingsDTO = settingsDTO;
        UserProfileSettings actualSettings = settings;
        Mockito.when(settingsMapper.convertToDto(actualSettings)).thenReturn(actualSettingsDTO);
        Mockito.when(userProfileSettingsRepository.findSettingsByUserId("1")).thenReturn(Optional.ofNullable(actualSettings));
        UserProfileSettingsDto expectedSettingsDTO= settingsService.findSettingsByUserId("1");
        assertThat(actualSettingsDTO).isEqualTo(expectedSettingsDTO);
    }

}