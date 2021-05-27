package com.zemosolabs.financialtracking.transactionservice.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "expense")
@Setter
@Getter
@ToString
public class Expense {
    @Id
    @Column(name="id",updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "title")
    private String title;

    @Column(name = "category")
    private String category;

    @Column(name = "type")
    private String type;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "frequency")
    private String frequency;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "modified_at")
    private Date modifiedAt;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "is_active")
    private Boolean isActive;

}
