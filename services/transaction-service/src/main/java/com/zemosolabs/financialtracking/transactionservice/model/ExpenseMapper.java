package com.zemosolabs.financialtracking.transactionservice.model;

import com.zemosolabs.financialtracking.transactionservice.dto.ExpenseDto;
import com.zemosolabs.financialtracking.transactionservice.entity.Expense;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;


public class ExpenseMapper {

    private ExpenseMapper() {
    }

    @Autowired
    private static ModelMapper modelMapper=new ModelMapper();


    public static ExpenseDto convertToDto(Expense expense) {
        return modelMapper.map(expense, ExpenseDto.class);
    }

    public static Expense convertToEntity(ExpenseDto expenseDto) {
        return modelMapper.map(expenseDto, Expense.class);
    }

}
