package com.zemosolabs.financialtracking.transactionservice.dto;


import lombok.*;

import java.util.Date;

@Setter
@Getter
@ToString
public class ExpenseDto {

    private int id;

    private String userId;

    private String title;

    private String category;

    private String type;

    private double amount;

    private String frequency;

    private Date createdAt;

    private String createdBy;

    private Date modifiedAt;

    private String modifiedBy;

    private Boolean isActive;

}
