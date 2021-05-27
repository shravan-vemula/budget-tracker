package com.zemosolabs.financialtracking.userservice.controller;


import com.zemosolabs.financialtracking.userservice.constants.Constants;
import com.zemosolabs.financialtracking.userservice.dto.BankDto;
import com.zemosolabs.financialtracking.userservice.exception.BankDetailsNotFoundException;
import com.zemosolabs.financialtracking.userservice.objectMapper.BankMapper;
import com.zemosolabs.financialtracking.userservice.service.BankDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/")
public class BankController {


    private final BankDetailsService bankDetailsService;

    @Autowired
    public BankController(BankDetailsService bankDetailsService) {
        this.bankDetailsService = bankDetailsService;
    }

    @GetMapping("/Banks")
    public List<BankDto> getAllBanks() {
        return BankMapper.convertToDtoList(bankDetailsService.findAll());
    }


    @GetMapping("/Banks/{id}")
    public BankDto getBank(@PathVariable int id) throws BankDetailsNotFoundException {
        return bankDetailsService.findById(id);
    }

    @PostMapping(value = "/Banks")
    public String postBank(@RequestBody BankDto bankDto) {
        bankDetailsService.save(bankDto);
        return Constants.BANK_DETAILS_SAVED;
    }

    @PutMapping(value = "/Banks/{detailsId}")
    public BankDto updateBank(@RequestBody BankDto bankDto) {
        bankDetailsService.save(bankDto);
        return bankDto;
    }

    @DeleteMapping("/Banks/{detailsId}")
    public String deleteBankDetails(@PathVariable int detailsId) throws BankDetailsNotFoundException {
        BankDto tempBankDTO = bankDetailsService.findById(detailsId);
        bankDetailsService.deleteById(detailsId);
        return Constants.DELETED_BANK_DETAILS + detailsId;
    }

}
