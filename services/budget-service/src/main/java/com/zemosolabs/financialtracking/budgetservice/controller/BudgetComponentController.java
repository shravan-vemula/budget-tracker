package com.zemosolabs.financialtracking.budgetservice.controller;

import com.zemosolabs.financialtracking.budgetservice.constants.Constants;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetComponentNotFoundException;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetNotFoundException;
import com.zemosolabs.financialtracking.budgetservice.service.BudgetComponentService;
import com.zemosolabs.financialtracking.budgetservice.service.BudgetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/budgets/{budgetId}")
public class BudgetComponentController {

    private final BudgetComponentService budgetComponentService;
    private final BudgetService budgetService;

    @Autowired
    public BudgetComponentController(BudgetComponentService budgetComponentService,BudgetService budgetService){
        this.budgetComponentService=budgetComponentService;
        this.budgetService=budgetService;
    }

    @GetMapping("/components")
    public List<BudgetComponentDTO> findBudgetComponentsByBudgetId(@PathVariable int budgetId){
        return budgetComponentService.findByBudgetId(budgetId);
    }

    @GetMapping("/components/{componentId}")
    public BudgetComponentDTO findBudgetComponentById(@PathVariable int componentId) throws BudgetComponentNotFoundException{
        BudgetComponentDTO tempBudgetComponentDTO = budgetComponentService.findById(componentId);
        log.info("Found BudgetComponent with ID:",componentId);
        return tempBudgetComponentDTO;
    }


    @PostMapping(value = "/components")
    @ResponseBody
    public String addBudgetComponent(@RequestBody BudgetComponentDTO budgetComponentDTO,@PathVariable int budgetId) throws BudgetNotFoundException {
        budgetComponentDTO.setBudgetDTO(budgetService.findById(budgetId));
        budgetComponentDTO.setCreatedAt(new Date());
        log.info("Budgeet saved {}",budgetComponentDTO.getBudgetDTO());
        log.info("Saving BudgetComponent with ID:",budgetId);
        budgetComponentService.save(budgetComponentDTO);
        return Constants.BUDGET_COMPONENT_SAVED_SUCCESS_MESSAGE;
    }

    @PutMapping("/components/{componentId}")
    public BudgetComponentDTO updateBudgetComponent(@RequestBody BudgetComponentDTO budgetComponentDTO,@PathVariable int componentId,@PathVariable int budgetId) throws BudgetComponentNotFoundException,BudgetNotFoundException{
        budgetComponentDTO.setModifiedAt(new Date());
        budgetComponentDTO.setId(componentId);
        budgetComponentDTO.setBudgetDTO(budgetService.findById(budgetId));
        log.info("Updating BudgetComponent:",budgetComponentDTO);
        budgetComponentService.updateBudgetComponent(budgetComponentDTO);
        return budgetComponentDTO;

    }

    @DeleteMapping("/components/{componentId}")
    public String deleteBudgetComponent(@PathVariable int componentId) throws BudgetComponentNotFoundException{
        log.info("Deleting BudgetComponent with ID:",componentId);
        budgetComponentService.deleteById(componentId);
        return Constants.DELETED_BUDGET_COMPONENT + componentId;
    }

}
