package com.zemosolabs.financialtracking.budgetservice.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import com.zemosolabs.financialtracking.budgetservice.service.BudgetService;
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


import java.util.Date;



import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = BudgetController.class)
@AutoConfigureMockMvc(addFilters = false)
@Slf4j
class BudgetControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private BudgetService budgetService;

    private BudgetDTO budgetDTO;



    @BeforeEach
    public void setUp(){
        budgetDTO = new BudgetDTO();
        budgetDTO.setId(1);
        budgetDTO.setUserId("1");
        budgetDTO.setCreatedBy(1);
        budgetDTO.setCreatedAt(new Date());
        budgetDTO.setFrequency(BudgetFrequency.WEEKLY);
        budgetDTO.setActive(true);
        budgetDTO.setDeleted(false);



    }




    @Test
     void whenGetBudgetCalled_budgetShouldBeReturned() throws Exception{
        BudgetDTO actualBudgetDTO = budgetDTO;
        Mockito.when(budgetService.findById(anyInt())).thenReturn(actualBudgetDTO);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/budgets/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        BudgetDTO expectedResponseBudgetDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(),BudgetDTO.class);

        Assertions.assertEquals(expectedResponseBudgetDTO.getId(),actualBudgetDTO.getId());
    }



    @Test
    void whenUpdateBudgetCalled_budgetShouldBeUpdated() throws Exception{
        BudgetDTO actualBudgetDTO = budgetDTO;
        String body = new JSONObject()
                .put("id",1)
                .put("frequency","YEARLY")
                .toString();
        Mockito.when(budgetService.save(any())).thenReturn(budgetDTO);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.put("http://localhost:8080/budgets/1")
                .content(body)
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        BudgetDTO expectedResponseBudgetDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(),BudgetDTO.class);

        Assertions.assertEquals(expectedResponseBudgetDTO.getId(),actualBudgetDTO.getId());
        Assertions.assertEquals(BudgetFrequency.YEARLY,expectedResponseBudgetDTO.getFrequency());
    }

    @Test
    void whenDeleteBudgetByIdCalled_budgetShouldBeDeleted() throws Exception{
        Mockito.when(budgetService.findById(anyInt())).thenReturn(budgetDTO);
        Mockito.when(budgetService.deleteById(anyInt())).thenReturn(true);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/budgets/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        Assertions.assertEquals("Deleted budget with id:1",result.getResponse().getContentAsString());
    }

}
