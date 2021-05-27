package com.zemosolabs.financialtracking.transactionservice.service;

import com.zemosolabs.financialtracking.transactionservice.dto.ExpenseDto;
import com.zemosolabs.financialtracking.transactionservice.entity.Expense;

import java.util.List;

public interface ExpenseDetailsService {
    ExpenseDto save(ExpenseDto expenseDto);
    List<ExpenseDto> findExpenseByUserId(String id);
}
