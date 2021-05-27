package com.zemosolabs.financialtracking.userservice.repository;

import com.zemosolabs.financialtracking.userservice.entity.UserDetails;
import com.zemosolabs.financialtracking.userservice.repository.UserDetailsRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@RunWith(SpringRunner.class)
@DataJpaTest
public class UserDetailsRepositoryTest {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    private UserDetails details;

    @Before
    public void setUp(){
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
    public void it_should_save_user_details_and_find_details_by_id(){
        UserDetails expectedDetails = userDetailsRepository.save(details);
        Optional<UserDetails> actualDetails = userDetailsRepository.findById(expectedDetails.getId());
        assertThat(actualDetails).contains(expectedDetails);

    }

    @Test
    public void it_should_delete_user_details_by_id(){
        UserDetails detailsSavedInDb = userDetailsRepository.save(details);
        userDetailsRepository.deleteById(detailsSavedInDb.getId());
        boolean result = userDetailsRepository.existsById(detailsSavedInDb.getId());
        assertThat(result).isFalse();
    }

}