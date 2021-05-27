package com.zemosolabs.financialtracking.transactionservice.service;

import com.zemosolabs.financialtracking.transactionservice.dto.ExpenseDto;
import com.zemosolabs.financialtracking.transactionservice.entity.Expense;
import com.zemosolabs.financialtracking.transactionservice.model.ExpenseMapper;
import com.zemosolabs.financialtracking.transactionservice.repository.ExpenseDetailsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(SpringExtension.class)
@ImportAutoConfiguration
public class ExpenseDetailsServiceImplTest {


    @Mock
    private ExpenseDetailsRepository expenseDetailsRepository;

    @Mock
    private ExpenseMapper expenseMapper;

    @InjectMocks
    private ExpenseDetailsServiceImpl expenseDetailsServiceImpl;

    private Expense expense;

    private ExpenseDto expenseDto;

    @BeforeEach
    public void setUp() {
        expense = new Expense();
        expense.setId(20);
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

         expenseDto = expenseMapper.convertToDto(expense);




    }

    @Test
    public void whenSaveExpenseCalled_ExpenseShouldBeSaved() {
        ExpenseDto actualDto = expenseDto;
        ExpenseDto expenseSaved = expenseDetailsServiceImpl.save(expenseDto);
        assertThat(actualDto.getId()).isEqualTo(expenseSaved.getId());
        Mockito.verify(expenseDetailsRepository).save(any());
    }


    @Test
    void whenFindExpensesByUserIdCalled_expensesWithUserIdShouldBeReturned(){

        List<ExpenseDto> actualExpenseDTOs = new ArrayList<>();
        actualExpenseDTOs.add(expenseDto);
        List<Expense> actualExpenses = new ArrayList<>();
        actualExpenses.add(expense);
        Mockito.when(expenseDetailsRepository.findExpenseByUserId("1")).thenReturn(actualExpenses);

        List<ExpenseDto> expectedExpenseDTOs = expenseDetailsServiceImpl.findExpenseByUserId("1");
        assertThat(actualExpenseDTOs.get(0).getId()).isEqualTo(expectedExpenseDTOs.get(0).getId());

    }



}
