package com.zemosolabs.financialtracking.transactionservice.repository;

import com.zemosolabs.financialtracking.transactionservice.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenseDetailsRepository extends JpaRepository<Expense,Integer> {
    List<Expense> findExpenseByUserId(String id);
}
