package com.zemosolabs.financialtracking.budgetservice.dao;


import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface BudgetRepository extends JpaRepository<Budget,Integer> {
    List<Budget> findBudgetByUserId(String id);
}
