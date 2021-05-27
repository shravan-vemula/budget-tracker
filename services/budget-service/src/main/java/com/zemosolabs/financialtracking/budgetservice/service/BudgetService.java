package com.zemosolabs.financialtracking.budgetservice.service;

import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetNotFoundException;

import java.util.List;


public interface BudgetService {
    BudgetDTO findById(int id) throws BudgetNotFoundException;
    BudgetDTO save(BudgetDTO budgetDTO);
    boolean deleteById(int id);
    List<BudgetDTO> findBudgetByUserId(String id) throws  BudgetNotFoundException;
}
