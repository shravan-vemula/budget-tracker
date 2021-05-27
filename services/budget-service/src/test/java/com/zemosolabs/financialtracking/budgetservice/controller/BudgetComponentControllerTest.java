package com.zemosolabs.financialtracking.budgetservice.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetComponentDTO;
import com.zemosolabs.financialtracking.budgetservice.dto.BudgetDTO;
import com.zemosolabs.financialtracking.budgetservice.entity.BudgetFrequency;
import com.zemosolabs.financialtracking.budgetservice.service.BudgetComponentService;
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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = BudgetComponentController.class)
@AutoConfigureMockMvc(addFilters = false)
@Slf4j
class BudgetComponentControllerTest {
    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private BudgetService budgetService;

    @MockBean
    private BudgetComponentService budgetComponentService;

    private BudgetDTO budgetDTO;

    private BudgetComponentDTO budgetComponentDTO;


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

        budgetComponentDTO = new BudgetComponentDTO();
        budgetComponentDTO.setBudgetDTO(budgetDTO);
        budgetComponentDTO.setId(1);
        budgetComponentDTO.setCreatedBy(1);
        budgetComponentDTO.setCategory("Shopping");
        budgetComponentDTO.setCreatedAt(new Date());
        budgetComponentDTO.setCurrency(20000.0);
        budgetComponentDTO.setFrequency(BudgetFrequency.WEEKLY);
        budgetComponentDTO.setActive(true);
        budgetComponentDTO.setDeleted(false);
    }


    @Test
    void whenSaveBudgetComponentCalled_budgetComponentShouldBeSaved() throws Exception{
        mvc.perform(MockMvcRequestBuilders.post("/budgets/1/components")).andExpect(status().isBadRequest());
        BudgetComponentDTO actualBudgetComponentDTO = budgetComponentDTO;
        Mockito.when(budgetService.findById(anyInt())).thenReturn(budgetDTO);
        String body = new JSONObject()
                .put("id",1)
                .put("createdBy",1)
                .put("category","Shopping")
                .put("currency",20000.0)
                .put("frequency",BudgetFrequency.WEEKLY)
                .put("deleted",false)
                .put("active",true)
                .toString();
        MvcResult result = mvc.perform(MockMvcRequestBuilders.post("http://localhost:8080/budgets/{budgetId}/components","1")
                .content(body)
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();



        Assertions.assertEquals("Budget Component Saved Successfully",result.getResponse().getContentAsString());
    }

    @Test
    void whenGetBudgetComponentCalled_budgetComponentShouldBeReturned() throws Exception{
        BudgetComponentDTO actualBudgetComponentDTO = budgetComponentDTO;
        Mockito.when(budgetComponentService.findById(anyInt())).thenReturn(actualBudgetComponentDTO);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/budgets/1/components/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        BudgetComponentDTO expectedResponseBudgetComponentDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(),BudgetComponentDTO.class);

        Assertions.assertEquals(expectedResponseBudgetComponentDTO.getId(),actualBudgetComponentDTO.getId());
    }

    @Test
    void whenGetBudgetComponentsByBudgetIdCalled_budgetComponentsWithBudgetIdShouldBeReturned() throws Exception{
        List<BudgetComponentDTO> actualBudgetComponentDTOs = new ArrayList<>();
        actualBudgetComponentDTOs.add(budgetComponentDTO);

        Mockito.when(budgetComponentService.findByBudgetId(anyInt())).thenReturn(actualBudgetComponentDTOs);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/budgets/1/components")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        List<BudgetComponentDTO> expectedResponseBudgetComponentDTOs = objectMapper.readValue(
                result.getResponse().getContentAsString(),new TypeReference<List<BudgetComponentDTO>>(){});

        Assertions.assertEquals(expectedResponseBudgetComponentDTOs,actualBudgetComponentDTOs);
    }


    @Test
    void whenUpdateBudgetComponentCalled_budgetComponentShouldBeUpdated() throws Exception{
        BudgetComponentDTO actualBudgetComponentDTO = budgetComponentDTO;
        String body = new JSONObject()
                .put("id",1)
                .put("frequency","YEARLY")
                .toString();
        Mockito.when(budgetComponentService.save(any())).thenReturn(budgetComponentDTO);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.put("http://localhost:8080/budgets/1/components/1")
                .content(body)
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        BudgetComponentDTO expectedResponseBudgetComponentDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(),BudgetComponentDTO.class);

        Assertions.assertEquals(expectedResponseBudgetComponentDTO.getId(),actualBudgetComponentDTO.getId());
        Assertions.assertEquals(BudgetFrequency.YEARLY,expectedResponseBudgetComponentDTO.getFrequency());
    }

    @Test
    void whenDeleteBudgetByIdCalled_budgetShouldBeDeleted() throws Exception{
        Mockito.when(budgetComponentService.findById(anyInt())).thenReturn(budgetComponentDTO);
        Mockito.when(budgetComponentService.deleteById(anyInt())).thenReturn(true);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/budgets/1/components/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        Assertions.assertEquals("Deleted budget component with id:1",result.getResponse().getContentAsString());
    }

}
