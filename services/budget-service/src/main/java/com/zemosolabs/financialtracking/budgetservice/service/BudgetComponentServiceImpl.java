package com.zemosolabs.financialtracking.budgetservice.service;

import com.zemosolabs.financialtracking.budgetservice.constants.Constants;
import com.zemosolabs.financialtracking.budgetservice.dao.BudgetComponentRepository;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetComponentNotFoundException;
import com.zemosolabs.financialtracking.budgetservice.objectmapper.BudgetComponentMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
@Slf4j
public class BudgetComponentServiceImpl implements BudgetComponentService{

    @Autowired
    private BudgetComponentRepository budgetComponentRepository;

    @Autowired
    private BudgetComponentMapper budgetComponentMapper;

    @Override
    public List<BudgetComponentDTO> findByBudgetId(int id){
        List<BudgetComponentDTO> budgetComponentDTOS = new ArrayList<>();
        List<BudgetComponent> budgetComponents = budgetComponentRepository.findByBudgetId(id);
        for(BudgetComponent budgetComponent: budgetComponents){
            BudgetComponentDTO budgetComponentDTO = budgetComponentMapper.convertToDto(budgetComponent);
            budgetComponentDTOS.add(budgetComponentDTO);
        }
        return budgetComponentDTOS;
    }

    @Override
    public BudgetComponentDTO findById(int id) throws BudgetComponentNotFoundException{
        Optional<BudgetComponent> result= budgetComponentRepository.findById(id);
        if( !result.isPresent()){
            throw new BudgetComponentNotFoundException(Constants.BUDGET_COMPONENT_NOT_FOUND+id);
        }
        return budgetComponentMapper.convertToDto(result.get());
    }

    @Override
    public BudgetComponentDTO save(BudgetComponentDTO theBudgetComponentDTO){
        theBudgetComponentDTO.setCreatedAt(new Date());
        BudgetComponent budgetComponent = budgetComponentMapper.convertToEntity(theBudgetComponentDTO);
        budgetComponentRepository.save(budgetComponent);
        return budgetComponentMapper.convertToDto(budgetComponent);
    }

    @Override
    public boolean deleteById(int id) {
        if(id>0) {
            budgetComponentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public BudgetComponentDTO updateBudgetComponent(BudgetComponentDTO budgetComponentDTO) throws BudgetComponentNotFoundException {
        BudgetComponentDTO currentBudgetComponentDTO = findById(budgetComponentDTO.getId());
        currentBudgetComponentDTO.setModifiedAt(budgetComponentDTO.getModifiedAt());
        currentBudgetComponentDTO.setCurrency(budgetComponentDTO.getCurrency());
        currentBudgetComponentDTO.setBudgetDTO(budgetComponentDTO.getBudgetDTO());
        save(currentBudgetComponentDTO);
        return budgetComponentDTO;
    }

}
