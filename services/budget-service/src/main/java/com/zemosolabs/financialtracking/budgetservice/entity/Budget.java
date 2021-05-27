package com.zemosolabs.financialtracking.budgetservice.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "budget")
@Data
public class Budget {

    @Id
    @Column(name = "id", updatable = false, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id", updatable = false, nullable = false)
    private String userId;

    @Column(name = "created_at", updatable = false,nullable = false)
    private Date createdAt;

    @Column(name = "modified_at")
    private Date modifiedAt;

    @Column(name = "created_by")
    private int createdBy;

    @Column(name = "modified_by")
    private int modifiedBy;

    @Column(name = "start_date",nullable = false)
    private Date startDate;

    @Column(name = "end_date",nullable = false)
    private Date endDate;

    @Column(name = "frequency",nullable = false)
    private BudgetFrequency frequency;

    @Column(name = "is_deleted")
    private boolean isDeleted;

    @Column(name = "is_active")
    private boolean isActive;

    @ToString.Exclude
    @OneToMany(mappedBy = "budget",cascade={CascadeType.ALL})
    private List<BudgetComponent> budgetComponents;


}