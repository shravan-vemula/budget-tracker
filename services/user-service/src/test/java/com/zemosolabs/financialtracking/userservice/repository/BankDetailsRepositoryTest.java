package com.zemosolabs.financialtracking.userservice.repository;



import com.zemosolabs.financialtracking.userservice.entity.Bank;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@RunWith(SpringRunner.class)
@DataJpaTest
public class BankDetailsRepositoryTest {

    @Autowired
    private BankDetailsRepository userDetailsRepository;

    private Bank details;

    @Before
    public void setUp(){
        details = new Bank();
        details.setId(1);
        details.setBankName("Axis bank");
        details.setRedirectStatus(true);
        details.setUrl("www.AxisBank.com");
        details.setImageSource("image/Axis.png");
    }
    @Test
    public void it_should_save_bank_details_and_find_details_by_id(){
        Bank expectedDetails = userDetailsRepository.save(details);
        Optional<Bank> actualDetails = userDetailsRepository.findById(expectedDetails.getId());
        assertThat(actualDetails).contains(expectedDetails);

    }

    @Test
    public void it_should_delete_bank_details_by_id(){
        Bank detailsSavedInDb = userDetailsRepository.save(details);
        userDetailsRepository.deleteById(detailsSavedInDb.getId());
        boolean result = userDetailsRepository.existsById(detailsSavedInDb.getId());
        assertThat(result).isFalse();
    }

}
