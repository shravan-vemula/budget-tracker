package com.zemosolabs.financialtracking.budgetservice.service;

import com.zemosolabs.financialtracking.budgetservice.constants.Constants;
import com.zemosolabs.financialtracking.budgetservice.dao.BudgetRepository;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetNotFoundException;
import com.zemosolabs.financialtracking.budgetservice.objectmapper.BudgetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class BudgetServiceImpl implements BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private BudgetMapper budgetMapper;

    @Override
    public BudgetDTO findById(int id) throws BudgetNotFoundException{
        Optional<Budget> result= budgetRepository.findById(id);
        if(!result.isPresent()){
            throw new BudgetNotFoundException(Constants.BUDGET_NOT_FOUND+id);
        }
        return budgetMapper.convertToDto(result.get());
    }

    @Override
    public BudgetDTO save(BudgetDTO theBudgetDTO){
        Budget budget = budgetMapper.convertToEntity(theBudgetDTO);
        budgetRepository.save(budget);
        return budgetMapper.convertToDto(budget);
    }

    @Override
    public boolean deleteById(int id) {
        if(id>0) {
            budgetRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<BudgetDTO> findBudgetByUserId(String id) throws BudgetNotFoundException {

        List<BudgetDTO> budgetDTOS = new ArrayList<>();
        List<Budget> budgets = budgetRepository.findBudgetByUserId(id);
        for(Budget budget: budgets){
            BudgetDTO budgetDTO = budgetMapper.convertToDto(budget);
            budgetDTOS.add(budgetDTO);
        }
        return budgetDTOS;
    }
}
