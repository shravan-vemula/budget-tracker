package com.zemosolabs.financialtracking.userservice.service;//package com.zemosolabs.financialtracking.userservice.service;


import com.zemosolabs.financialtracking.userservice.constants.Constants;
import com.zemosolabs.financialtracking.userservice.dto.BankDto;
import com.zemosolabs.financialtracking.userservice.entity.Bank;
import com.zemosolabs.financialtracking.userservice.exception.BankDetailsNotFoundException;
import com.zemosolabs.financialtracking.userservice.objectMapper.BankMapper;
import com.zemosolabs.financialtracking.userservice.repository.BankDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BankDetailsServiceImpl implements BankDetailsService {

    private final BankDetailsRepository bankDetailsRepository;

    @Autowired
    public BankDetailsServiceImpl(BankDetailsRepository bankDetailsRepository) {
        this.bankDetailsRepository = bankDetailsRepository;
    }


    @Override
    public List<Bank> findAll() {
        return bankDetailsRepository.findAll();
    }


    @Override
    public BankDto findById(int id) throws BankDetailsNotFoundException {
        Optional<Bank> result= bankDetailsRepository.findById(id);
        if(!result.isPresent()){
            throw new BankDetailsNotFoundException(Constants.BANK_DETAILS_NOT_FOUND+id);
        }
        return BankMapper.convertToDto(result.get());
    }

    @Override
    public BankDto save(BankDto bankDto) {
        Bank details = BankMapper.convertToEntity(bankDto);
        bankDetailsRepository.save(details);
        return BankMapper.convertToDto(details);
    }



    @Override
    public boolean deleteById(int id) {
        if(id>0) {
            bankDetailsRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
