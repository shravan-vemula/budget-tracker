package com.zemosolabs.financialtracking.userservice.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bank_details")
@Setter
@Getter
@ToString
public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name" , nullable = false)
    private String bankName;

    @Column(name = "redirect_status", nullable = false)
    private Boolean redirectStatus;

    @Column(name = "url")
    private String url;

    @Column(name = "image_source")
    private String imageSource;

}
