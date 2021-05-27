package com.zemosolabs.financialtracking.userservice.model;

import com.zemosolabs.financialtracking.userservice.dto.BankDto;
import com.zemosolabs.financialtracking.userservice.Mapper.BankDetailsMapper;
import com.zemosolabs.financialtracking.userservice.entity.Bank;

import com.zemosolabs.financialtracking.userservice.objectMapper.BankMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
public class BankDetailsMapperTest {
    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private BankDetailsMapper detailsMapper;

    private Bank details;

    private BankDto detailsDto;

    @BeforeEach
    public void setUp() {
        detailsDto = new BankDto();
        detailsDto.setId(1);
        detailsDto.setBankName("Axis bank");
        detailsDto.setRedirectStatus(true);
        detailsDto.setUrl("www.AxisBank.com");
        detailsDto.setImageSource("image/Axis.png");

        details = new Bank();
        details.setId(1);
        details.setBankName("Axis bank");
        details.setRedirectStatus(true);
        details.setUrl("www.AxisBank.com");
        details.setImageSource("image/Axis.png");
    }

    @Test
    void whenConvertToDTOCalled_entityShouldBeConvertedToDTO() {
        BankDto actualDTO = modelMapper.map(details, BankDto.class);
        BankDto convertedDTO = detailsMapper.convertToDto(details);
        assertEquals(actualDTO, convertedDTO);
    }



    @Test
    void whenConvertToEntityCalled_DTOShouldBeConvertedToEntity() {
        Bank actualEntity = modelMapper.map(detailsDto, Bank.class);
        Bank convertedEntity = detailsMapper.convertToEntity(detailsDto);
        assertEquals(actualEntity, convertedEntity);
    }

}