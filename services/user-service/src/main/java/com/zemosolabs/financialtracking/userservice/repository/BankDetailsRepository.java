package com.zemosolabs.financialtracking.userservice.repository;

import com.zemosolabs.financialtracking.userservice.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BankDetailsRepository extends JpaRepository<Bank,Integer> {

}