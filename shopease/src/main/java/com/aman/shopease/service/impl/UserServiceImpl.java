package com.aman.shopease.service.impl;

import com.aman.shopease.dto.LoginRequest;
import com.aman.shopease.entity.User;
import com.aman.shopease.repository.UserRepository;
import com.aman.shopease.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    @Override
    public User loginUser(LoginRequest loginRequest) {

        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

        if (user.isPresent()) {

            if (user.get().getPassword().equals(loginRequest.getPassword())) {
                return user.get();
            }

            throw new RuntimeException("Invalid Password");
        }

        throw new RuntimeException("User Not Found");
    }
}