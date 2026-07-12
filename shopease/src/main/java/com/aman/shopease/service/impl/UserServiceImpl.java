package com.aman.shopease.service.impl;

import com.aman.shopease.entity.User;
import com.aman.shopease.repository.UserRepository;
import com.aman.shopease.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }
}