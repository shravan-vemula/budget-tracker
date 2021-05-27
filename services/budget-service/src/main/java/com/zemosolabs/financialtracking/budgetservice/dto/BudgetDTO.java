package com.zemosolabs.financialtracking.budgetservice.dto;

import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
public class BudgetDTO {
    private int id;
    private String userId;
    private Date createdAt;
    private Date modifiedAt;
    private int createdBy;
    private int modifiedBy;
    private Date startDate;
    private Date endDate;
    private BudgetFrequency frequency;
    private boolean isDeleted;
    private boolean isActive;
    private List<BudgetComponentDTO> budgetComponents;
}
