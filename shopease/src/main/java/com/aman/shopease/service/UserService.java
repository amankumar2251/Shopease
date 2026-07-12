package com.aman.shopease.service;

import com.aman.shopease.dto.LoginRequest;
import com.aman.shopease.dto.UserResponse;
import com.aman.shopease.entity.User;
import com.aman.shopease.dto.LoginResponse;

public interface UserService {

    UserResponse registerUser(User user);
    LoginResponse loginUser(LoginRequest loginRequest);

}