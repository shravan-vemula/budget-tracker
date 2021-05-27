package com.zemosolabs.financialtracking.budgetservice.controller;

import com.zemosolabs.financialtracking.budgetservice.constants.Constants;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.exception.BudgetNotFoundException;
import com.zemosolabs.financialtracking.budgetservice.service.BudgetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin
public class BudgetController {

    private final BudgetService budgetService;

    @Autowired
    public BudgetController(BudgetService budgetService){
        this.budgetService=budgetService;
    }

    @GetMapping("/budgets")
    public List<BudgetDTO> findBudgetByUserId(JwtAuthenticationToken token) throws BudgetNotFoundException {
        List<BudgetDTO> tempBudgetDTOs = budgetService.findBudgetByUserId(token.getName());
        log.info("Found budget with User ID:{}",tempBudgetDTOs);
        return tempBudgetDTOs;
    }


    @GetMapping("/budgets/{budgetId}")
    public BudgetDTO findBudgetById(@PathVariable int budgetId) throws BudgetNotFoundException {
        BudgetDTO tempBudgetDTO = budgetService.findById(budgetId);
        log.info("Found budget with ID:{}",tempBudgetDTO);
        return tempBudgetDTO;

    }

    @PostMapping(value = "/budgets")
    @ResponseBody
    public String addBudget(JwtAuthenticationToken token,@RequestBody BudgetDTO budgetDTO) {
        List<BudgetComponentDTO> budgetComponentDTOS = new ArrayList<>();
        BudgetComponentDTO budgetComponentDTO = budgetDTO.getBudgetComponents().get(0);
        budgetComponentDTO.setBudgetDTO(budgetDTO);
        budgetComponentDTOS.add(budgetComponentDTO);
        budgetDTO.setCreatedAt(new Date());
        budgetDTO.setUserId(token.getName());
        budgetDTO.setBudgetComponents(budgetComponentDTOS);
        log.info("Saving Budget:{}",budgetDTO);
        budgetService.save(budgetDTO);
        return Constants.BUDGET_SAVED_SUCCESS_MESSAGE;
    }

    @PutMapping(value="/budgets/{budgetId}")
    public BudgetDTO updateBudget(@RequestBody BudgetDTO budgetDTO) {
        budgetDTO.setModifiedAt(new Date());
        log.info("Updating Budget:{}",budgetDTO);
        budgetService.save(budgetDTO);
        return budgetDTO;
    }

    @DeleteMapping("/budgets/{budgetId}")
    public String deleteBudget(@PathVariable int budgetId) throws BudgetNotFoundException{
        BudgetDTO tempBudgetDTO = budgetService.findById(budgetId);
        log.info("Deleting Budget:{}",tempBudgetDTO);
        budgetService.deleteById(budgetId);
        return Constants.DELETED_BUDGET + budgetId;
    }

}

