package com.zemosolabs.financialtracking.budgetservice.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name="budget_component")
@Data
public class BudgetComponent {

    @Id
    @Column(name="id",updatable = false,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="category",nullable = false)
    private String category;

    @Column(name="currency",nullable = false)
    private Double currency;

    @Column(name="currency_format")
    private String currencyFormat;

    @Column(name = "created_at", updatable = false, nullable = false)
    private Date createdAt;

    @Column(name = "modified_at")
    private Date modifiedAt;

    @Column(name = "modified_by")
    private int modifiedBy;

    @Column(name = "created_by",updatable = false,nullable = false)
    private int createdBy;

    @Column(name = "frequency",nullable = false)
    private BudgetFrequency frequency;

    @Column(name = "is_deleted")
    private boolean isDeleted;

    @Column(name = "is_active")
    private boolean isActive;

    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name="budget_id")
    private Budget budget;

}
