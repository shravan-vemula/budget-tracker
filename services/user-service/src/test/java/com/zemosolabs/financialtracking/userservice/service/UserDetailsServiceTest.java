package com.zemosolabs.financialtracking.userservice.service;

import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import com.zemosolabs.financialtracking.userservice.exception.UserDetailsNotFoundException;
import com.zemosolabs.financialtracking.userservice.objectMapper.UserDetailsMapper;
import com.zemosolabs.financialtracking.userservice.repository.UserDetailsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.junit.jupiter.api.Test;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(SpringExtension.class)
@ImportAutoConfiguration
public class UserDetailsServiceTest {

    @Mock
    private UserDetailsRepository userDetailsRepository;

    @Mock
    private UserDetailsMapper detailsMapper;

    @InjectMocks
    private UserDetailsServiceImpl detailsService;

    private UserDetails details;

    private UserDetailsDto detailsDto;

    @BeforeEach
    public void setUp(){
        details=new UserDetails();
        details.setId(1);
        details.setUserId("1");
        details.setCountry("india");
        details.setEmail("rahul@gmail.com");
        details.setName("Rahul");
        details.setPhone("9999999999");
        details.setDeleted(false);
        details.setCreatedAt(new Date());
        details.setCreatedBy("34");
        details.setModifiedAt(new Date());
        details.setModifiedBy("34");

        detailsDto = detailsMapper.convertToDto(details);
    }


    @Test
    void whenSaveDetailsCalled_detailsShouldBeSaved(){
        UserDetailsDto actualDetailsDTO = detailsDto;
        UserDetails actualDetails = details;
        Mockito.when(detailsMapper.convertToEntity(actualDetailsDTO)).thenReturn(actualDetails);
        Mockito.when(detailsMapper.convertToDto(details)).thenReturn(actualDetailsDTO);
        UserDetailsDto detailsSavedInDb = detailsService.save(detailsDto);
        assertThat(actualDetailsDTO).isEqualTo(detailsSavedInDb);
        Mockito.verify(userDetailsRepository).save(any());
    }

    @Test
    void whenFindByIdCalled_detailsWithIdShouldBeReturned() throws UserDetailsNotFoundException {
        UserDetailsDto actualDetailsDTO = detailsDto;
        UserDetails actualDetails = details;
        Mockito.when(detailsMapper.convertToDto(actualDetails)).thenReturn(actualDetailsDTO);
        Mockito.when(userDetailsRepository.findById(actualDetails.getId())).thenReturn(Optional.of(details));
        UserDetailsDto expectedDetailsDTO= detailsService.findById(1);
        assertThat(actualDetailsDTO).isEqualTo(expectedDetailsDTO);
        Mockito.verify(userDetailsRepository).findById(any());
    }

    @Test
    void whenDeleteByIdCalled_userDetailsWithIdShouldBeDeleted(){
        assertThat(detailsService.deleteById(details.getId())).isTrue();
        Mockito.verify(userDetailsRepository).deleteById(any());
    }

    @Test
    void whenFindDetailsByUserIdCalled_detailsWithUserIdShouldBeReturned() throws UserDetailsNotFoundException{
        UserDetailsDto actualDetailsDTO = detailsDto;
        UserDetails actualDetails = details;
        Mockito.when(detailsMapper.convertToDto(actualDetails)).thenReturn(actualDetailsDTO);
        Mockito.when(userDetailsRepository.findDetailsByUserId("1")).thenReturn(Optional.ofNullable(actualDetails));
        UserDetailsDto expectedDetailsDTO= detailsService.findDetailsByUserId("1");
        assertThat(actualDetailsDTO).isEqualTo(expectedDetailsDTO);


    }
}


