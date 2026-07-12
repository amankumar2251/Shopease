package com.aman.shopease.service;

import com.aman.shopease.dto.LoginRequest;
import com.aman.shopease.entity.User;

public interface UserService {

    User registerUser(User user);
    User loginUser(LoginRequest loginRequest);

}