package com.zemosolabs.financialtracking.userservice.dto;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class UserProfileSettingsDto  {

    private int id;

    private String userId;

    private boolean dailyReminder;

    private boolean summary;

    private boolean usageOfCalculator;

    private String defaultTimePeriod;

    private String defaultDate;

    private String reminderForBillsDue;

    private boolean notifyExceededExpense;

    private boolean newBillAdded;

    private boolean transactionsInAccount;

    private boolean notifyExceedGoalPeriod;

    private boolean notifyWhenGoalReached;

    private boolean recurringExpensesDue;

    private boolean manageUncategorized;

    private boolean email;

    private boolean textMessages;

    @JsonIgnore
     private UserDetails details;


}