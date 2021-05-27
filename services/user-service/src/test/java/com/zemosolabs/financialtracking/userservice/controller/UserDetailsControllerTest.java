package com.zemosolabs.financialtracking.userservice.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.service.UserDetailsService;
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
@WebMvcTest(controllers = UserDetailsController.class)
@AutoConfigureMockMvc(addFilters = false)
@Slf4j
public class UserDetailsControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UserDetailsService detailsService;

    private UserDetailsDto detailsDto;

    @BeforeEach
    public void setUp() {
        detailsDto = new UserDetailsDto();
        detailsDto.setId(1);
        detailsDto.setUserId("1");
        detailsDto.setCountry("india");
        detailsDto.setEmail("rahul@gmail.com");
        detailsDto.setName("Rahul");
        detailsDto.setPhone("9999999999");
        detailsDto.setDeleted(false);
        detailsDto.setCreatedAt(new Date());
        detailsDto.setCreatedBy("34");
        detailsDto.setModifiedAt(new Date());
        detailsDto.setModifiedBy("34");

    }

    @Test
    void whenGetdetailsCalled_detailsShouldBeReturned() throws Exception{
        UserDetailsDto actualDetailsDTO = detailsDto;
        Mockito.when(detailsService.findById(anyInt())).thenReturn(actualDetailsDTO);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/details/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        UserDetailsDto expectedResponseDetailsDTO = objectMapper.readValue(
                result.getResponse().getContentAsString(),UserDetailsDto.class);

        Assertions.assertEquals(expectedResponseDetailsDTO.getId(),actualDetailsDTO.getId());
    }

//    @Test
//    void whenUpdateDetailsCalled_detailsShouldBeUpdated() throws Exception{
//        UserDetailsDto actualDetailsDTO = detailsDto;
//        String body = new JSONObject()
//                .put("id",1)
//                .put("name","rahul")
//                .put("email","rahul@gmail.com")
//                .put("userId","1")
//                .put("phone","9999999999")
//                .put("country","india")
//                .put("isDeleted",false)
//                .put("createdBy", "34")
//                .put("modifiedBy", "34")
//                .put("createdAt", null)
//                .put("modifiedAt", null)
//                .toString();
//        Mockito.when(detailsService.save(any())).thenReturn(detailsDto);
//        MvcResult result = mvc.perform(MockMvcRequestBuilders.put("http://localhost:8080/details/1")
//                .content(body)
//                .contentType(MediaType.APPLICATION_JSON)
//                .characterEncoding("UTF-8")
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andReturn();
//
//        UserDetailsDto expectedResponseDetailsDTO = objectMapper.readValue(
//                result.getResponse().getContentAsString(),UserDetailsDto.class);
//
//        Assertions.assertEquals(expectedResponseDetailsDTO.getId(),actualDetailsDTO.getId());
//
//    }

    @Test
    void whenDeleteDetailsByIdCalled_userDetailsShouldBeDeleted() throws Exception{
        Mockito.when(detailsService.findById(anyInt())).thenReturn(detailsDto);
        Mockito.when(detailsService.deleteById(anyInt())).thenReturn(true);
        MvcResult result = mvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/details/1")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        Assertions.assertEquals("deleted user details1",result.getResponse().getContentAsString());
    }


}



