package com.zemosolabs.financialtracking.budgetservice.repository;

import com.zemosolabs.financialtracking.budgetservice.dao.BudgetRepository;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@RunWith(SpringRunner.class)
@DataJpaTest
public class BudgetRepositoryTest {

    @Autowired
    private BudgetRepository budgetRepository;

    private Budget budget;

    @Before
    public void setUp(){
        budget = new Budget();
        budget.setUserId("1");
        budget.setCreatedBy(1);
        budget.setCreatedAt(new Date());
        budget.setStartDate(new Date());
        budget.setEndDate(new Date());
        budget.setFrequency(BudgetFrequency.WEEKLY);
        budget.setActive(true);
        budget.setDeleted(false);
    }
    @Test
    public void it_should_save_budget_and_find_budget_by_id(){
        Budget expectedBudget = budget;
        budgetRepository.save(expectedBudget);
        Optional<Budget> actualBudget = budgetRepository.findById(expectedBudget.getId());
        assertThat(actualBudget).contains(expectedBudget);

    }

    @Test
    public void it_should_delete_budget_by_id(){
        Budget budgetSavedInDb = budgetRepository.save(budget);
        budgetRepository.deleteById(budget.getId());
        boolean result = budgetRepository.existsById(budgetSavedInDb.getId());
        assertThat(result).isFalse();
    }

}
