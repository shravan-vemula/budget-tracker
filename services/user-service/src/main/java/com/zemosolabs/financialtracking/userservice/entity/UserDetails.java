package com.zemosolabs.financialtracking.userservice.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "users_details")
@Data
@NoArgsConstructor
public class UserDetails {
    @Id
    @Column(name = "id", updatable = false, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;

    @Column(name="name",nullable = true)
    private String name ;

    @Column(name="email",nullable = true)
    private String email;

    @Column(name = "user_id", updatable = false)
    private String userId;

    @Column(name="phone",nullable = true)
    private String phone;

    @Column(name="country",nullable = true)
     private String country;

    @Column(name="is_deleted",nullable = true)
    private boolean isDeleted;

    @Column(name = "created_at", nullable = true)
    private Date createdAt;

    @Column(name = "created_by", nullable = true)
    private String createdBy;

    @Column(name = "modified_at", nullable = true)
    private Date modifiedAt;

    @Column(name = "modified_by", nullable = true)
    private String modifiedBy;

    @ToString.Exclude
    @OneToOne(mappedBy = "userDetails",cascade = {CascadeType.ALL})
    private UserProfileSettings userProfileSettings;
}


