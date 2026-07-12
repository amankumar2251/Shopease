package com.aman.shopease.service.impl;

import com.aman.shopease.dto.LoginRequest;
import com.aman.shopease.dto.UserResponse;
import com.aman.shopease.entity.User;
import com.aman.shopease.repository.UserRepository;
import com.aman.shopease.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.aman.shopease.dto.LoginResponse;
import com.aman.shopease.security.JwtUtil;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil = new JwtUtil();

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserResponse registerUser(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser = userRepository.save(user);

        return new UserResponse(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail(),
                savedUser.getPhoneNumber()
        );
    }

    @Override
    public LoginResponse loginUser(LoginRequest loginRequest) {

        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

        if (user.isPresent()) {

            if (passwordEncoder.matches(
                    loginRequest.getPassword(),
                    user.get().getPassword())) {

                String token = jwtUtil.generateToken(user.get().getEmail());

                return new LoginResponse(token, "Login Successful");
            }

            throw new RuntimeException("Invalid Password");
        }

        throw new RuntimeException("User Not Found");
    }
}