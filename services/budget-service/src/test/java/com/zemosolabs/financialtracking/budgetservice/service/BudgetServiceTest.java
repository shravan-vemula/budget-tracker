package com.zemosolabs.financialtracking.budgetservice.service;

import com.zemosolabs.financialtracking.budgetservice.dao.BudgetRepository;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetNotFoundException;
import com.zemosolabs.financialtracking.budgetservice.objectmapper.BudgetMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.junit.jupiter.api.Test;


import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(SpringExtension.class)
@ImportAutoConfiguration
class BudgetServiceTest {

    @Mock
    private BudgetRepository budgetRepository;

    @Mock
    private BudgetMapper budgetMapper;

    @InjectMocks
    private BudgetServiceImpl budgetService;

    private Budget budget;

    private BudgetDTO budgetDTO;

    @BeforeEach
    public void setUp(){

        budget = new Budget();
        budget.setId(1);
        budget.setUserId("1");
        budget.setCreatedBy(1);
        budget.setCreatedAt(new Date());
        budget.setStartDate(new Date());
        budget.setEndDate(new Date());
        budget.setFrequency(BudgetFrequency.WEEKLY);

        budgetDTO = budgetMapper.convertToDto(budget);

    }

    @Test
    void whenSaveBudgetCalled_budgetShouldBeSaved(){
        BudgetDTO actualBudgetDTO = budgetDTO;
        Budget actualBudget = budget;
        Mockito.when(budgetMapper.convertToEntity(actualBudgetDTO)).thenReturn(actualBudget);
        Mockito.when(budgetMapper.convertToDto(budget)).thenReturn(actualBudgetDTO);
        BudgetDTO budgetSavedInDb = budgetService.save(budgetDTO);
        assertThat(actualBudgetDTO).isEqualTo(budgetSavedInDb);
        Mockito.verify(budgetRepository).save(any());
    }

    @Test
     void whenFindByIdCalled_budgetWithIdShouldBeReturned() throws BudgetNotFoundException{
        BudgetDTO actualBudgetDTO = budgetDTO;
        Budget actualBudget = budget;
        Mockito.when(budgetMapper.convertToDto(actualBudget)).thenReturn(actualBudgetDTO);
        Mockito.when(budgetRepository.findById(actualBudget.getId())).thenReturn(Optional.of(budget));
        BudgetDTO expectedBudgetDTO = budgetService.findById(1);
        assertThat(actualBudgetDTO).isEqualTo(expectedBudgetDTO);
        Mockito.verify(budgetRepository).findById(any());
    }

    @Test
     void whenDeleteByIdCalled_budgetWithIdShouldBeDeleted(){
        assertThat(budgetService.deleteById(budget.getId())).isTrue();
        Mockito.verify(budgetRepository).deleteById(any());
    }

    @Test
    void whenFindBudgetsByUserIdCalled_budgetsWithUserIdShouldBeReturned() throws BudgetNotFoundException{

        List<BudgetDTO> actualBudgetDTOs = new ArrayList<>();
        actualBudgetDTOs.add(budgetDTO);
        List<Budget> actualBudgets = new ArrayList<>();
        actualBudgets.add(budget);
        Mockito.when(budgetMapper.convertToDto(budget)).thenReturn(budgetDTO);
        Mockito.when(budgetRepository.findBudgetByUserId("1")).thenReturn(actualBudgets);

        List<BudgetDTO> expectedBudgetDTOs = budgetService.findBudgetByUserId("1");
        assertThat(actualBudgetDTOs).isEqualTo(expectedBudgetDTOs);

    }
}
