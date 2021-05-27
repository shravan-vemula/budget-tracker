package com.zemosolabs.financialtracking.userservice.objectMapper;

import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDetailsMapper {

    @Autowired
    private ModelMapper modelMapper;

    public  UserDetailsDto convertToDto(UserDetails details) {
        return modelMapper.map(details, UserDetailsDto.class);
    }

    public UserDetails convertToEntity(UserDetailsDto detailsDTO){
        return modelMapper.map(detailsDTO, UserDetails.class);
    }
}
