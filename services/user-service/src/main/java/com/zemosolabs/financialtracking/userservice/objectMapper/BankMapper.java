package com.zemosolabs.financialtracking.userservice.objectMapper;


import com.zemosolabs.financialtracking.userservice.dto.BankDto;
import com.zemosolabs.financialtracking.userservice.entity.Bank;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;


public class BankMapper {

    private BankMapper() {
    }

    @Autowired
    private static final ModelMapper modelMapper=new ModelMapper();


    public static BankDto convertToDto(Bank bank) {
        return modelMapper.map(bank, BankDto.class);
    }

    public static Bank convertToEntity(BankDto bankDto) {
        return modelMapper.map(bankDto, Bank.class);
    }

    public static List<BankDto> convertToDtoList(List<Bank> banks) {
        List<BankDto> bankDtos=new ArrayList<>();
        for(Bank bank:banks){
            bankDtos.add(convertToDto(bank));
        }
        return bankDtos;
    }

    public static List<Bank> convertToEntityList(List<BankDto> bankDtos) {
        List<Bank> banks=new ArrayList<>();
        for(BankDto BankDto: bankDtos){
            banks.add(convertToEntity(BankDto));
        }
        return banks;

    }


}