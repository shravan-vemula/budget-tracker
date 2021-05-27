package com.zemosolabs.financialtracking.userservice.service;

import com.zemosolabs.financialtracking.userservice.constants.Constants;
import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import com.zemosolabs.financialtracking.userservice.exception.UserDetailsNotFoundException;
import com.zemosolabs.financialtracking.userservice.objectMapper.UserDetailsMapper;
import com.zemosolabs.financialtracking.userservice.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements  UserDetailsService{

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private UserDetailsMapper detailsMapper;

    @Override
    public UserDetailsDto findById(int id) throws UserDetailsNotFoundException {
        Optional<UserDetails> result= userDetailsRepository.findById(id);
        if(!result.isPresent()){
            throw new UserDetailsNotFoundException(Constants.USER_DETAILS_NOT_FOUND+id);
        }
        return detailsMapper.convertToDto(result.get());
    }

    @Override
    public UserDetailsDto save(UserDetailsDto detailsDTO) {
        UserDetails details = detailsMapper.convertToEntity(detailsDTO);
        userDetailsRepository.save(details);
        return detailsMapper.convertToDto(details);
    }

    @Override
    public boolean deleteById(int id) {
        if(id>0) {
            userDetailsRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public UserDetailsDto findDetailsByUserId(String id) throws UserDetailsNotFoundException {
        Optional<UserDetails> result= userDetailsRepository.findDetailsByUserId(id);
        if(!result.isPresent()){
            throw new UserDetailsNotFoundException(Constants.USER_DETAILS_NOT_FOUND+id);
        }
        return detailsMapper.convertToDto(result.get());
    }
}
