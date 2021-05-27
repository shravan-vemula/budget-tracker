package com.zemosolabs.financialtracking.userservice.controller;

import com.zemosolabs.financialtracking.userservice.constants.Constants;
import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.dto.UserProfileSettingsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import com.zemosolabs.financialtracking.userservice.exception.UserDetailsNotFoundException;
import com.zemosolabs.financialtracking.userservice.service.UserDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@Slf4j
@RestController
public class UserDetailsController {

    private final UserDetailsService userDetailsService;

    @Autowired
    public UserDetailsController(UserDetailsService theUserDetailsService) {
        this.userDetailsService = theUserDetailsService;
    }

    @GetMapping("/users")
    public UserDetailsDto findUserDetailsByUserId(JwtAuthenticationToken token) throws UserDetailsNotFoundException {
        UserDetailsDto detailsDTOS = userDetailsService.findDetailsByUserId(token.getName());
        return detailsDTOS;
    }

    @GetMapping("/details/{detailsId}")
    public UserDetailsDto findUserDetailsById(@PathVariable int detailsId) throws UserDetailsNotFoundException {
        UserDetailsDto detailsDto = userDetailsService.findById(detailsId);
        return detailsDto;

    }

    @PutMapping(value = "/details/{id}")
    public UserDetailsDto updateDetails( @RequestBody UserDetailsDto detailsDto) {
        userDetailsService.save(detailsDto);
        return detailsDto;
    }

    @PostMapping(value = "/users")
    @ResponseBody
    public UserDetailsDto addUserDetails(JwtAuthenticationToken token,@RequestBody UserDetailsDto detailsDto) {
        UserProfileSettingsDto settingsDTO =new UserProfileSettingsDto();
        settingsDTO.setUserId(token.getName());
        detailsDto.setUserId(token.getName());
        detailsDto.setUserProfileSettingsDto(settingsDTO);
        return userDetailsService.save(detailsDto);
    }

    @DeleteMapping("/details/{detailsId}")
    public String deleteUserDetails(@PathVariable int detailsId) throws UserDetailsNotFoundException{
        UserDetailsDto tempUserDTO = userDetailsService.findById(detailsId);
        userDetailsService.deleteById(detailsId);
        return Constants.DELETED_USER_DETAILS + detailsId;
    }



}
