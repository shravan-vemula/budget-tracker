package com.zemosolabs.financialtracking.userservice.Mapper;

import com.zemosolabs.financialtracking.userservice.dto.BankDto;
import com.zemosolabs.financialtracking.userservice.entity.Bank;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BankDetailsMapper {

    @Autowired
    private ModelMapper modelMapper;


    public BankDto convertToDto(Bank details) {
        return modelMapper.map(details, BankDto.class);
    }

    public Bank convertToEntity(BankDto detailsDTO){
        return modelMapper.map(detailsDTO, Bank.class);
    }
}