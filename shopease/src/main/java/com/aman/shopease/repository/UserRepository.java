package com.aman.shopease.repository;

import com.aman.shopease.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}