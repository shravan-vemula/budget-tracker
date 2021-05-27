package com.zemosolabs.financialtracking.userservice.service;


import com.zemosolabs.financialtracking.userservice.dto.BankDto;
import com.zemosolabs.financialtracking.userservice.entity.Bank;
import com.zemosolabs.financialtracking.userservice.exception.BankDetailsNotFoundException;
import com.zemosolabs.financialtracking.userservice.Mapper.BankDetailsMapper;
import com.zemosolabs.financialtracking.userservice.objectMapper.BankMapper;
import com.zemosolabs.financialtracking.userservice.repository.BankDetailsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.junit.jupiter.api.Test;


import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(SpringExtension.class)
@ImportAutoConfiguration
class BankDetailsServiceTest {
    @Mock
    private ModelMapper modelMapper;

    @Mock
    private BankDetailsRepository bankRepository;

    @Mock
    private BankDetailsMapper bankMapper;

    @InjectMocks
    private BankDetailsServiceImpl bankService;

    private Bank bank;

    private BankDto bankDto;

    @BeforeEach
    public void setUp(){

        bank = new Bank();
        bank.setId(1);
        bank.setBankName("Axis bank");
        bank.setRedirectStatus(true);
        bank.setUrl("www.AxisBank.com");
        bank.setImageSource("image/Axis.png");

        bankDto = new BankDto();
        bankDto.setId(1);
        bankDto.setBankName("Axis bank");
        bankDto.setRedirectStatus(true);
        bankDto.setUrl("www.AxisBank.com");
        bankDto.setImageSource("image/Axis.png");


    }

    @Test
    void whenSaveBankCalled_bankShouldBeSaved(){
        BankDto actualBankDTO = bankDto;
        Bank actualBank = bank;
        Mockito.when(bankMapper.convertToEntity(actualBankDTO)).thenReturn(actualBank);
        Mockito.when(bankMapper.convertToDto(bank)).thenReturn(actualBankDTO);
        BankDto bankSavedInDb = bankService.save(bankDto);
        assertThat(actualBankDTO.getBankName()).isEqualTo(bankSavedInDb.getBankName());
        Mockito.verify(bankRepository).save(any());
    }

    @Test
    void whenFindByIdCalled_bankWithIdShouldBeReturned() throws BankDetailsNotFoundException {
        BankDto actualBankDTO = bankDto;
        Bank actualBank = bank;
        Mockito.when(bankMapper.convertToDto(actualBank)).thenReturn(actualBankDTO);
        Mockito.when(bankRepository.findById(actualBank.getId())).thenReturn(Optional.of(bank));
        BankDto expectedBudgetDTO = bankService.findById(1);
        assertThat(actualBankDTO.getBankName()).isEqualTo(expectedBudgetDTO.getBankName());
        Mockito.verify(bankRepository).findById(any());
    }

    @Test
    void whenDeleteByIdCalled_bankWithIdShouldBeDeleted(){
        assertThat(bankService.deleteById(bank.getId())).isTrue();
        Mockito.verify(bankRepository).deleteById(any());
    }

    @Test
    void whenFindBanksByUserIdCalled_bankWithIdShouldBeReturned() throws BankDetailsNotFoundException{

        BankDto actualBankDTOs = bankDto;

        Bank actualBanks = bank;

        Mockito.when(bankMapper.convertToDto(bank)).thenReturn(bankDto);
        Mockito.when(bankRepository.findById(1)).thenReturn(Optional.of(actualBanks));

        BankDto expectedBankDTOs = bankService.findById(1);
        assertThat(actualBankDTOs.getBankName()).isEqualTo(expectedBankDTOs.getBankName());

    }
}