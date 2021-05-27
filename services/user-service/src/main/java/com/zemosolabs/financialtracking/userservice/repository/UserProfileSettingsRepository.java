package com.zemosolabs.financialtracking.userservice.repository;

import com.zemosolabs.financialtracking.userservice.entity.UserProfileSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserProfileSettingsRepository extends JpaRepository<UserProfileSettings,Integer>{
    Optional<UserProfileSettings> findSettingsByUserId(String id);
}
