package com.aman.shopease.service.impl;

import com.aman.shopease.dto.LoginRequest;
import com.aman.shopease.entity.User;
import com.aman.shopease.repository.UserRepository;
import com.aman.shopease.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerUser(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    @Override
    public User loginUser(LoginRequest loginRequest) {

        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

        if (user.isPresent()) {

            if (passwordEncoder.matches(
                    loginRequest.getPassword(),
                    user.get().getPassword())) {

                return user.get();
            }

            throw new RuntimeException("Invalid Password");
        }

        throw new RuntimeException("User Not Found");
    }
}