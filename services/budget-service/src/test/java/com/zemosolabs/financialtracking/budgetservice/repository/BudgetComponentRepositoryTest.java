package com.zemosolabs.financialtracking.budgetservice.repository;

import com.zemosolabs.financialtracking.budgetservice.dao.BudgetComponentRepository;
import com.zemosolabs.financialtracking.budgetservice.dao.BudgetRepository;
import com.zemosolabs.financialtracking.budgetservice.entity.Budget;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetComponent;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@RunWith(SpringRunner.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class BudgetComponentRepositoryTest {

    @Autowired
    private BudgetComponentRepository budgetComponentRepository;

    @Autowired
    private BudgetRepository budgetRepository;

    private Budget budget;
    private BudgetComponent budgetComponent;

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

        budgetComponent = new BudgetComponent();
        budgetComponent.setBudget(budget);
        budgetComponent.setCategory("shopping");
        budgetComponent.setCurrency(20000.0);
        budgetComponent.setCurrencyFormat("Indian");
        budgetComponent.setCreatedBy(1);
        budgetComponent.setFrequency(BudgetFrequency.WEEKLY);
        budgetComponent.setActive(true);
        budgetComponent.setDeleted(false);
        budgetComponent.setCreatedAt(new Date());
    }

    @Test
    public void it_should_save_budget_component_and_find_by_budget_component_id(){
        BudgetComponent expectedBudgetComponent = budgetComponent;
        budgetComponentRepository.save(expectedBudgetComponent);
        Optional<BudgetComponent> actualBudgetComponent = budgetComponentRepository.findById(expectedBudgetComponent.getId());
        assertThat(expectedBudgetComponent).isEqualTo(actualBudgetComponent.get());

    }

    @Test
    public void it_should_find_budget_components_by_budget_id(){
        List<BudgetComponent> expectedBudgetComponentList = new ArrayList<>();
        expectedBudgetComponentList.add(budgetComponent);
        budgetRepository.save(budget);
        budgetComponentRepository.save(budgetComponent);
        List<BudgetComponent> actualBudgetComponentList = budgetComponentRepository.findByBudgetId(budget.getId());
        assertThat(expectedBudgetComponentList).isEqualTo(actualBudgetComponentList);
    }

    @Test
    public void it_should_delete_budget_component_by_budget_component_id(){
        BudgetComponent budgetComponentSavedInDb = budgetComponentRepository.save(budgetComponent);
        budgetComponentRepository.deleteById(budgetComponent.getId());
        boolean result = budgetComponentRepository.existsById(budgetComponentSavedInDb.getId());
        assertThat(result).isFalse();
    }
}
