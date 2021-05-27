package com.zemosolabs.financialtracking.budgetservice.service;

import com.zemosolabs.financialtracking.budgetservice.dao.BudgetComponentRepository;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetComponentNotFoundException;
import com.zemosolabs.financialtracking.budgetservice.objectmapper.BudgetComponentMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.*;


@ExtendWith(SpringExtension.class)
class BudgetComponentServiceTest {

    @Mock
    private BudgetComponentRepository budgetComponentRepository;

    @Mock
    private BudgetComponentMapper budgetComponentMapper;

    @InjectMocks
    private BudgetComponentServiceImpl budgetComponentService;

    private BudgetComponent budgetComponent;

    private BudgetComponentDTO budgetComponentDTO;

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
        budget.setActive(true);
        budget.setDeleted(false);

        budgetDTO = new BudgetDTO();
        budgetDTO.setId(1);
        budgetDTO.setUserId("1");
        budgetDTO.setCreatedBy(1);
        budgetDTO.setCreatedAt(new Date());
        budgetDTO.setStartDate(new Date());
        budgetDTO.setEndDate(new Date());
        budgetDTO.setFrequency(BudgetFrequency.WEEKLY);
        budgetDTO.setActive(true);
        budgetDTO.setDeleted(false);


        budgetComponent = new BudgetComponent();
        budgetComponent.setId(1);
        budgetComponent.setBudget(budget);
        budgetComponent.setCategory("shopping");
        budgetComponent.setCurrency(20000.0);
        budgetComponent.setCurrencyFormat("Indian");
        budgetComponent.setCreatedBy(1);
        budgetComponent.setFrequency(BudgetFrequency.WEEKLY);
        budgetComponent.setActive(true);
        budgetComponent.setDeleted(false);
        budgetComponent.setCreatedAt(new Date());

        budgetComponentDTO = new BudgetComponentDTO();
        budgetComponentDTO.setId(1);
        budgetComponentDTO.setBudgetDTO(budgetDTO);
        budgetComponentDTO.setCategory("shopping");
        budgetComponentDTO.setCurrency(20000.0);
        budgetComponentDTO.setCurrencyFormat("Indian");
        budgetComponentDTO.setCreatedBy(1);
        budgetComponentDTO.setFrequency(BudgetFrequency.WEEKLY);
        budgetComponentDTO.setActive(true);
        budgetComponentDTO.setDeleted(false);
        budgetComponentDTO.setCreatedAt(new Date());

    }

    @Test
    void whenSaveBudgetComponentCalled_budgetComponentShouldBeSaved(){
        BudgetComponentDTO actualBudgetComponentDTO = budgetComponentDTO;
        BudgetComponent actualBudgetComponent = budgetComponent;

        Mockito.when(budgetComponentMapper.convertToDto(actualBudgetComponent)).thenReturn(actualBudgetComponentDTO);
        Mockito.when(budgetComponentMapper.convertToEntity(actualBudgetComponentDTO)).thenReturn(actualBudgetComponent);

        BudgetComponentDTO expectedBudgetComponentDTO = budgetComponentService.save(budgetComponentDTO);
        assertThat(actualBudgetComponentDTO).isEqualTo(expectedBudgetComponentDTO);
        Mockito.verify(budgetComponentRepository).save(any());
     }

     @Test
    void whenBudgetComponentFindByIdCalled_budgetComponentWithIdShouldBeReturned() throws BudgetComponentNotFoundException {
         BudgetComponentDTO actualBudgetComponentDTO = budgetComponentDTO;
         BudgetComponent actualBudgetComponent = budgetComponent;
         Mockito.when(budgetComponentMapper.convertToDto(actualBudgetComponent)).thenReturn(actualBudgetComponentDTO);
         Mockito.when(budgetComponentRepository.findById(actualBudgetComponent.getId())).thenReturn(Optional.of(budgetComponent));
         BudgetComponentDTO expectedBudgetComponentDTO = budgetComponentService.findById(1);
         assertThat(actualBudgetComponentDTO).isEqualTo(expectedBudgetComponentDTO);
         Mockito.verify(budgetComponentRepository).findById(any());
     }

     @Test
     void whenFindBudgetComponentsByBudgetIdCalled_budgetComponentsListShouldBeReturned(){
        List<BudgetComponentDTO> actualBudgetComponentDTOs = new ArrayList<>();
        actualBudgetComponentDTOs.add(budgetComponentDTO);
        List<BudgetComponent> actualBudgetComponents = new ArrayList<>();
        actualBudgetComponents.add(budgetComponent);
        Mockito.when(budgetComponentMapper.convertToDto(budgetComponent)).thenReturn(budgetComponentDTO);
        Mockito.when(budgetComponentRepository.findByBudgetId(1)).thenReturn(actualBudgetComponents);

        List<BudgetComponentDTO> expectedBudgetComponentDTOs = budgetComponentService.findByBudgetId(1);
        assertThat(actualBudgetComponentDTOs).isEqualTo(expectedBudgetComponentDTOs);

     }

     @Test
     void whenDeleteBudgetComponentByIdCalled_budgetComponentWithIdShouldBeDeleted(){
         assertThat(budgetComponentService.deleteById(budgetComponentDTO.getId())).isTrue();
         Mockito.verify(budgetComponentRepository).deleteById(any());
     }

     @Test
    void whenUpdateBudgetComponentCalled_BudgetComponentShouldBeUpdated() throws BudgetComponentNotFoundException{
         BudgetComponentDTO actualBudgetComponentDTO = budgetComponentDTO;
         BudgetComponent actualBudgetComponent = budgetComponent;

         Mockito.when(budgetComponentRepository.findById(actualBudgetComponent.getId())).thenReturn(Optional.of(budgetComponent));
         Mockito.when(budgetComponentMapper.convertToDto(actualBudgetComponent)).thenReturn(actualBudgetComponentDTO);
         Mockito.when(budgetComponentMapper.convertToEntity(actualBudgetComponentDTO)).thenReturn(actualBudgetComponent);

         BudgetComponentDTO expectedBudgetComponentDTO = budgetComponentService.updateBudgetComponent(budgetComponentDTO);
         assertThat(actualBudgetComponentDTO).isEqualTo(expectedBudgetComponentDTO);
         Mockito.verify(budgetComponentRepository).save(any());

     }
}
