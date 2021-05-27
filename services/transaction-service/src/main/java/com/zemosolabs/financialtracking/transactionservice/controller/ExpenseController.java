package com.zemosolabs.financialtracking.transactionservice.controller;

import com.zemosolabs.financialtracking.transactionservice.dto.ExpenseDto;
import com.zemosolabs.financialtracking.transactionservice.entity.Expense;
import com.zemosolabs.financialtracking.transactionservice.model.ExpenseMapper;
import com.zemosolabs.financialtracking.transactionservice.service.ExpenseDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ExpenseController {

    private static String tempUserId = "34";
    @Autowired
    private ExpenseDetailsService expenseDetailsService;

    @GetMapping("/expenses")
    public List<ExpenseDto> getAllExpensesByUserId(JwtAuthenticationToken token) {
        List<ExpenseDto> expenseDtosDTOs = expenseDetailsService.findExpenseByUserId(token.getName());
        return expenseDtosDTOs;
    }

    @PostMapping(value = "/expenses")
    @ResponseBody
    public ExpenseDto postExpenses(JwtAuthenticationToken token,@RequestBody ExpenseDto expenseDto) {
        expenseDto.setUserId(token.getName());
        return  expenseDetailsService.save(expenseDto);
    }
}
