package com.zemosolabs.financialtracking.transactionservice.service;

import com.zemosolabs.financialtracking.transactionservice.dto.ExpenseDto;
import com.zemosolabs.financialtracking.transactionservice.entity.Expense;
import com.zemosolabs.financialtracking.transactionservice.model.ExpenseMapper;
import com.zemosolabs.financialtracking.transactionservice.repository.ExpenseDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ExpenseDetailsServiceImpl implements ExpenseDetailsService {

    private ExpenseDetailsRepository expenseDetailsRepository;

    private ExpenseMapper expenseMapper;

    @Autowired
    public ExpenseDetailsServiceImpl(ExpenseDetailsRepository expenseDetailsRepository) {
        this.expenseDetailsRepository = expenseDetailsRepository;
    }

    @Override
    public ExpenseDto save(ExpenseDto expenseDto) {
        Expense expense = expenseMapper.convertToEntity(expenseDto);
        expenseDetailsRepository.save(expense);
        return expenseMapper.convertToDto(expense);
    }

    @Override
    public List<ExpenseDto> findExpenseByUserId(String id) {
        List<ExpenseDto> expenseDTOS = new ArrayList<>();
        List<Expense> expenses = expenseDetailsRepository.findExpenseByUserId(id);
        for(Expense expense: expenses){
            ExpenseDto expenseDto= expenseMapper.convertToDto(expense);
            expenseDTOS.add(expenseDto);
        }
        return expenseDTOS;
    }
}
