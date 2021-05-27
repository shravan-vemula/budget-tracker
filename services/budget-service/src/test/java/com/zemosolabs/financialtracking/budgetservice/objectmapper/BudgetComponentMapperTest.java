package com.zemosolabs.financialtracking.budgetservice.objectmapper;

import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Date;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
class BudgetComponentMapperTest {

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private BudgetComponentMapper budgetComponentMapper;

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
    void whenConvertToDTOCalled_entityShouldBeConvertedToDTO() {
        BudgetComponentDTO actualDTO = modelMapper.map(budgetComponent, BudgetComponentDTO.class);
        BudgetComponentDTO convertedDTO = budgetComponentMapper.convertToDto(budgetComponent);
        assertEquals(actualDTO, convertedDTO);
    }


    @Test
    void whenConvertToEntityCalled_DTOShouldBeConvertedToEntity() {
        BudgetComponent actualEntity = modelMapper.map(budgetComponentDTO, BudgetComponent.class);
        BudgetComponent convertedEntity = budgetComponentMapper.convertToEntity(budgetComponentDTO);
        assertEquals(actualEntity, convertedEntity);
    }

}
