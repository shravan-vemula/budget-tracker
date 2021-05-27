package com.zemosolabs.financialtracking.userservice.service;

import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import com.zemosolabs.financialtracking.userservice.exception.UserDetailsNotFoundException;


public interface  UserDetailsService {
    UserDetailsDto findById(int id) throws UserDetailsNotFoundException;
    UserDetailsDto save(UserDetailsDto detailsDTO);
    boolean deleteById(int id);
    UserDetailsDto findDetailsByUserId(String id) throws UserDetailsNotFoundException;
}