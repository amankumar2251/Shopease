package com.aman.shopease.controller;

import com.aman.shopease.dto.UserResponse;
import com.aman.shopease.entity.User;
import com.aman.shopease.service.UserService;
import org.springframework.web.bind.annotation.*;
import com.aman.shopease.dto.LoginRequest;
import jakarta.validation.Valid;
import com.aman.shopease.dto.LoginResponse;
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public UserResponse registerUser(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public LoginResponse loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }
}