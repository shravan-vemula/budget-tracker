package com.zemosolabs.financialtracking.budgetservice.dao;

import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BudgetComponentRepository extends JpaRepository<BudgetComponent, Integer> {
    List<BudgetComponent> findByBudgetId(int id);
}