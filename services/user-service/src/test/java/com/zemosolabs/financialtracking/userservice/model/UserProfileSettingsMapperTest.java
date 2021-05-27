package com.zemosolabs.financialtracking.userservice.model;


import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import com.zemosolabs.financialtracking.userservice.objectMapper.UserProfileSettingsMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
class UserProfileSettingsMapperTest {

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserProfileSettingsMapper settingsMapper;

    private UserProfileSettings settings;

    private UserProfileSettingsDto settingsDTO;

    @BeforeEach
    public void setUp() {

        settings = new UserProfileSettings();
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


        settingsDTO = new UserProfileSettingsDto();
        settingsDTO.setUserId("1");
        settingsDTO.setDailyReminder(true);
        settingsDTO.setSummary(true);
        settingsDTO.setUsageOfCalculator(true);
        settingsDTO.setDefaultTimePeriod("June");
        settingsDTO.setDefaultDate("1");
        settingsDTO.setReminderForBillsDue("1 week");
        settingsDTO.setNotifyExceededExpense(true);
        settingsDTO.setNewBillAdded(true);
        settingsDTO.setTransactionsInAccount(true);
        settingsDTO.setNotifyExceedGoalPeriod(true);
        settingsDTO.setNotifyWhenGoalReached(true);
        settingsDTO.setRecurringExpensesDue(true);
        settingsDTO.setManageUncategorized(true);
        settingsDTO.setEmail(true);
        settingsDTO.setTextMessages(true);


    }

    @Test
    void whenConvertToDTOCalled_entityShouldBeConvertedToDTO() {
        UserProfileSettingsDto actualDTO = modelMapper.map(settings, UserProfileSettingsDto.class);
        UserProfileSettingsDto convertedDTO = settingsMapper.convertToDto(settings);
        assertEquals(actualDTO, convertedDTO);
    }


    @Test
    void whenConvertToEntityCalled_DTOShouldBeConvertedToEntity() {
        UserProfileSettings actualEntity = modelMapper.map(settingsDTO, UserProfileSettings.class);
        UserProfileSettings convertedEntity = settingsMapper.convertToEntity(settingsDTO);
        assertEquals(actualEntity, convertedEntity);
    }
}