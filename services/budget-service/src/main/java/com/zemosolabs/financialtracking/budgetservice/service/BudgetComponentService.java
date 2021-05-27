package com.zemosolabs.financialtracking.budgetservice.service;

import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetComponentNotFoundException;

import java.util.List;


public interface BudgetComponentService {
    List<BudgetComponentDTO> findByBudgetId(int id);
    BudgetComponentDTO findById(int id) throws BudgetComponentNotFoundException;
    BudgetComponentDTO save(BudgetComponentDTO budgetComponentDTO);
    boolean deleteById(int id);
    BudgetComponentDTO updateBudgetComponent(BudgetComponentDTO budgetComponentDTO) throws BudgetComponentNotFoundException;
}
