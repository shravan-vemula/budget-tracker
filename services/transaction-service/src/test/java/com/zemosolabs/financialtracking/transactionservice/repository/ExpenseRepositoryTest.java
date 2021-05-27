package com.zemosolabs.financialtracking.transactionservice.repository;

import com.zemosolabs.financialtracking.transactionservice.entity.Expense;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class ExpenseRepositoryTest {

    @Autowired
    private ExpenseDetailsRepository expenseDetailsRepository;

    private Expense expense;

    @BeforeEach
    public void setUp() {
        expense = new Expense();
        expense.setAmount(200.00);
        expense.setCategory("grocery");
        expense.setCreatedBy("self");
        expense.setFrequency("DAILY");
        expense.setTitle("food");
        expense.setIsActive(true);
        expense.setUserId("34");
        expense.setType("expense");
        expense.setModifiedBy("self");

    }

    @Test
    void dataSourceIsNotNull() {
        assertThat(expenseDetailsRepository).isNotNull();
    }

    @Test
    public void repo_should_save_expense_and_find_expense_by_id() {
        Expense testExpense = expenseDetailsRepository.save(expense);
        Optional<Expense> actualExpense = expenseDetailsRepository.findById(testExpense.getId());
        assertThat(actualExpense.get()).isEqualTo(expense);

    }

    @Test
    public void repo_should_delete_expense_by_id() {
        Expense tempExpense = expenseDetailsRepository.save(expense);
        expenseDetailsRepository.deleteById(tempExpense.getId());
        boolean result = expenseDetailsRepository.existsById(tempExpense.getId());
        assertThat(result).isEqualTo(false);
    }

    @Test
    public void repo_find_by_user_id() {
        Expense tempExpense = expenseDetailsRepository.save(expense);
        List<Expense> tempExpenses =new ArrayList<>();
        tempExpenses.add(tempExpense);
        List<Expense> expenses = expenseDetailsRepository.findExpenseByUserId(tempExpense.getUserId());
        assertThat(expenses).isEqualTo(tempExpenses);
    }

}
