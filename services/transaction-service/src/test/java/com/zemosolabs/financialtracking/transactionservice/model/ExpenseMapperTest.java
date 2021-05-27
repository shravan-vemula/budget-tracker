package com.zemosolabs.financialtracking.transactionservice.model;

import com.zemosolabs.financialtracking.transactionservice.dto.ExpenseDto;
import com.zemosolabs.financialtracking.transactionservice.entity.Expense;
import org.assertj.core.api.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
class ExpenseMapperTest {

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private ExpenseMapper expenseMapper;

    private ExpenseDto expenseDto;

    private Expense expense;


    @BeforeEach
    public void setUp() {
        modelMapper = new ModelMapper();
        expense = new Expense();
        expense.setId(1);
        expense.setAmount(200.00);
        expense.setCategory("grocery");
        expense.setCreatedAt(new Date());
        expense.setCreatedBy("self");
        expense.setFrequency("DAILY");
        expense.setTitle("food");
        expense.setIsActive(true);
        expense.setUserId("34");
        expense.setType("expense");
        expense.setModifiedAt(new Date());
        expense.setModifiedBy("self");



        expenseDto = new ExpenseDto();
        expenseDto.setId(1);
        expenseDto.setAmount(200.00);
        expenseDto.setCategory("grocery");
        expenseDto.setCreatedAt(new Date());
        expenseDto.setCreatedBy("self");
        expenseDto.setFrequency("DAILY");
        expenseDto.setTitle("food");
        expenseDto.setIsActive(true);
        expenseDto.setUserId("34");
        expenseDto.setType("expense");
        expenseDto.setModifiedAt(new Date());
        expenseDto.setModifiedBy("self");

    }

    @Test
    void whenConvertToDtoCalled_entityShouldBeConvertedToDto() {
        ExpenseDto actualDto = modelMapper.map(expense, ExpenseDto.class);
        assertEquals(actualDto.toString(), expenseDto.toString());

    }

    @Test
    void whenConvertToEntityCalled_DtoShouldBeConvertedToEntity() {
        Expense actualEntity = modelMapper.map(expenseDto, Expense.class);
        assertEquals(actualEntity.toString(),expense.toString());

    }

}