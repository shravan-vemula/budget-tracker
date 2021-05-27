package com.zemosolabs.financialtracking.budgetservice.dto;

import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import lombok.Data;

import java.util.Date;


@Data
public class BudgetComponentDTO {
    private int id;
    private String category;
    private Double currency;
    private String currencyFormat;
    private Date createdAt;
    private Date modifiedAt;
    private int modifiedBy;
    private int createdBy;
    private BudgetFrequency frequency;
    private boolean isDeleted;
    private boolean isActive;
    private BudgetDTO budgetDTO;
}
