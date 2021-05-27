package com.zemosolabs.financialtracking.userservice.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "user_profile_settings")
@Data
@NoArgsConstructor
@Getter
@Setter
public class UserProfileSettings {
    @Id
    @Column(name = "id", updatable = false, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id", updatable = false)
    private String userId;

    @Column(name = "remind_adding_expenses_income",nullable = true)
    private boolean dailyReminder;

    @Column(name = "monthly_weekly_summary",nullable = true)
    private boolean summary;

    @Column(name = "calculator_enabled",nullable = true)
    private boolean usageOfCalculator;

    @Column(name = "default_time_period",nullable = true)
    private String defaultTimePeriod;

    @Column(name = "default_date",nullable = true)
    private String defaultDate;

    @Column(name = "remind_due_bills",nullable = true)
    private String reminderForBillsDue;

    @Column(name = "notify_expense_exceeded",nullable = true)
    private boolean notifyExceededExpense;

    @Column(name = "new_bill_added",nullable = true)
    private boolean newBillAdded;

    @Column(name = "amount_debited_credited",nullable = true)
    private boolean transactionsInAccount;

    @Column(name = "notify_goal_period_exceeded",nullable = true)
    private boolean notifyExceedGoalPeriod;

    @Column(name = "notify_goal_reached",nullable = true)
    private boolean notifyWhenGoalReached;

    @Column(name = "recurring_expenses_due",nullable = true)
    private boolean recurringExpensesDue;

    @Column(name = "manage_uncategorized",nullable = true)
    private boolean manageUncategorized;

    @Column(name = "email",nullable = true)
    private boolean email;

    @Column(name = "text_messages",nullable = true)
    private boolean textMessages;


    @ToString.Exclude
    @OneToOne
    @JoinColumn(name="id")
    private UserDetails userDetails;

}