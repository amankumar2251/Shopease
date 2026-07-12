package com.aman.shopease.controller;

import com.aman.shopease.entity.User;
import com.aman.shopease.service.UserService;
import org.springframework.web.bind.annotation.*;
import com.aman.shopease.dto.LoginRequest;
import jakarta.validation.Valid;
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }
}