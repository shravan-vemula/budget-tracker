package com.zemosolabs.financialtracking.userservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.service.UserProfileSettingService;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = UserProfileSettingsController.class)
@AutoConfigureMockMvc(addFilters = false)
@Slf4j
class UserProfileSettingsControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UserProfileSettingService settingsService;

    private UserProfileSettingsDto settingsDTO;


    @BeforeEach
    public void setUp() {
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
    void whenGetsettingsCalled_settingsShouldBeReturned() throws Exception {
        UserProfileSettingsDto actualSettingsDTO = settingsDTO;
        Mockito.when(settingsService.findById(anyInt())).thenReturn(actualSettingsDTO);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("http://localhost:8083/settings/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        UserProfileSettingsDto expectedResponseSettingsDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(), UserProfileSettingsDto.class);

        Assertions.assertEquals(expectedResponseSettingsDTO.getUserId(), actualSettingsDTO.getUserId());
    }



}