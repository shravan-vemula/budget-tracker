package com.zemosolabs.financialtracking.userservice.controller;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemosolabs.financialtracking.userservice.dto.BankDto;

import com.zemosolabs.financialtracking.userservice.entity.Bank;
import com.zemosolabs.financialtracking.userservice.objectMapper.BankMapper;
import com.zemosolabs.financialtracking.userservice.service.BankDetailsService;

import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = BankController.class)
@AutoConfigureMockMvc(addFilters = false)
@Slf4j
public class BankDetailsControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private BankDetailsService detailsService;

    private BankDto detailsDto;

    private  Bank details;

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
    void whenSaveDetailsCalled_detailsShouldBeSaved() throws Exception{
        mvc.perform(MockMvcRequestBuilders.post("/Banks")).andExpect(status().isBadRequest());
        BankDto actualDetailsDTO = detailsDto;
        String body = new JSONObject()
                .put("id",1)
                .put("bankName","Axis Bank")
                .put("redirectStatus","true")
                .put("url","www.axisbank.com")
                .put("imageSource","images/Axis.png")
                .toString();
        MvcResult result = mvc.perform(MockMvcRequestBuilders.post("http://localhost:8080/Banks")
                .content(body)
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        Assertions.assertEquals("bank details saved",result.getResponse().getContentAsString());
    }

    @Test
    void whenGetdetailsCalled_detailsShouldBeReturned() throws Exception{
        BankDto actualDetailsDTO = detailsDto;
        Mockito.when(detailsService.findById(anyInt())).thenReturn(actualDetailsDTO);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/Banks/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        BankDto expectedResponseDetailsDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(),BankDto.class);

        Assertions.assertEquals(expectedResponseDetailsDTO.getId(),actualDetailsDTO.getId());
    }

    @Test
    void whenUpdateDetailsCalled_detailsShouldBeUpdated() throws Exception{
        BankDto actualDetailsDTO = detailsDto;
        String body = new JSONObject()
                .put("id",1)
                .put("bankName","Axis Bank")
                .put("redirectStatus","true")
                .put("url","www.axisbank.com")
                .put("imageSource","images/Axis.png")
                .toString();
        Mockito.when(detailsService.save(any())).thenReturn(detailsDto);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.put("http://localhost:8080/Banks/1")
                .content(body)
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        BankDto expectedResponseDetailsDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(),BankDto.class);

        Assertions.assertEquals(expectedResponseDetailsDTO.getId(),actualDetailsDTO.getId());

    }

    @Test
    void whenDeleteBankByIdCalled_bankShouldBeDeleted() throws Exception{
        Mockito.when(detailsService.findById(anyInt())).thenReturn(detailsDto);
        Mockito.when(detailsService.deleteById(anyInt())).thenReturn(true);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/Banks/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        Assertions.assertEquals("deleted bank details1",result.getResponse().getContentAsString());
    }
    @Test
    void whenGetBankCalled_bankDetailsReturned() throws Exception{
        List<Bank> bank = new ArrayList<>();
        bank.add(details);
       Mockito.when(detailsService.findAll()).thenReturn(bank);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/Banks")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        List<Bank> expectedResponseBankComponentDTOs = objectMapper.readValue(
                result.getResponse().getContentAsString(),new TypeReference<ArrayList<Bank>>(){});

        List<BankDto> bankDtoList = BankMapper.convertToDtoList(expectedResponseBankComponentDTOs);
        List<Bank> bankDetails = BankMapper.convertToEntityList(bankDtoList);

        Assertions.assertEquals(expectedResponseBankComponentDTOs.get(0).getBankName(),bankDetails.get(0).getBankName());
    }


}

