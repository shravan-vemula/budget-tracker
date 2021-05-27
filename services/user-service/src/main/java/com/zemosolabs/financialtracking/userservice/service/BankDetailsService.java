package com.zemosolabs.financialtracking.userservice.service;//package com.zemosolabs.financialtracking.userservice.service;


import com.zemosolabs.financialtracking.userservice.dto.BankDto;
import com.zemosolabs.financialtracking.userservice.entity.Bank;
import com.zemosolabs.financialtracking.userservice.exception.BankDetailsNotFoundException;

import java.util.List;

public interface BankDetailsService {

    List<Bank> findAll();
    BankDto findById(int theId) throws BankDetailsNotFoundException;
    BankDto save(BankDto bankDto);
    boolean deleteById(int theId);
}
