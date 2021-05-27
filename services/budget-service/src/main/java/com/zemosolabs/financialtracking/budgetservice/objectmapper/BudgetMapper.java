package com.zemosolabs.financialtracking.budgetservice.objectmapper;

import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BudgetMapper {

    @Autowired
    private ModelMapper modelMapper;

    public BudgetDTO convertToDto(Budget budget) {
        return modelMapper.map(budget, BudgetDTO.class);
    }

    public Budget convertToEntity(BudgetDTO budgetDTO){
        return modelMapper.map(budgetDTO, Budget.class);
    }
}
