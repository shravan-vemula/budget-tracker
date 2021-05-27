package com.zemosolabs.financialtracking.budgetservice.objectmapper;

import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
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
class BudgetMapperTest {

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private BudgetMapper budgetMapper;

    private Budget budget;

    private BudgetDTO budgetDTO;

    @BeforeEach
    public void setUp() {

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


    }

    @Test
    void whenConvertToDTOCalled_entityShouldBeConvertedToDTO() {
        BudgetDTO actualDTO = modelMapper.map(budget, BudgetDTO.class);
        BudgetDTO convertedDTO = budgetMapper.convertToDto(budget);
        assertEquals(actualDTO, convertedDTO);
    }


    @Test
    void whenConvertToEntityCalled_DTOShouldBeConvertedToEntity() {
        Budget actualEntity = modelMapper.map(budgetDTO, Budget.class);
        Budget convertedEntity = budgetMapper.convertToEntity(budgetDTO);
        assertEquals(actualEntity, convertedEntity);
    }
}