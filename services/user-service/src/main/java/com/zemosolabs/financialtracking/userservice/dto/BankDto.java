package com.zemosolabs.financialtracking.userservice.dto;//package com.zemosolabs.financialtracking.userservice.dto;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Setter
@Getter
@ToString

public class BankDto {


    private int id;

    private String bankName;

    private Boolean redirectStatus;

    private String url;

    private String imageSource;
}
