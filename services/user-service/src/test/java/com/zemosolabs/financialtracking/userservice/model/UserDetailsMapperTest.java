package com.zemosolabs.financialtracking.userservice.model;

import com.zemosolabs.financialtracking.userservice.dto.UserDetailsDto;
import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import com.zemosolabs.financialtracking.userservice.objectMapper.UserDetailsMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
public class UserDetailsMapperTest {
    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserDetailsMapper detailsMapper;

    private UserDetails details;

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

        details = new UserDetails();
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
    }

    @Test
    void whenConvertToDTOCalled_entityShouldBeConvertedToDTO() {
        UserDetailsDto actualDTO = modelMapper.map(details, UserDetailsDto.class);
        UserDetailsDto convertedDTO = detailsMapper.convertToDto(details);
        assertEquals(actualDTO, convertedDTO);
    }


    @Test
    void whenConvertToEntityCalled_DTOShouldBeConvertedToEntity() {
        UserDetails actualEntity = modelMapper.map(detailsDto, UserDetails.class);
        UserDetails convertedEntity = detailsMapper.convertToEntity(detailsDto);
        assertEquals(actualEntity, convertedEntity);
    }

}
