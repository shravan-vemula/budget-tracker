package com.zemosolabs.financialtracking.budgetservice.objectmapper;

import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BudgetComponentMapper {

    @Autowired
    private ModelMapper modelMapper;

    public BudgetComponentDTO convertToDto(BudgetComponent budgetComponent) {
        return modelMapper.map(budgetComponent, BudgetComponentDTO.class);
    }

    public BudgetComponent convertToEntity(BudgetComponentDTO budgetComponentDTO){
        return modelMapper.map(budgetComponentDTO, BudgetComponent.class);
    }
}
