package com.example.backend.application.controllers;

import com.example.backend.application.dto.requests.UserRequest;
import com.example.backend.application.mappers.UserMapper;
import com.example.backend.domain.model.User;
import com.example.backend.domain.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserRepository repository;
    private UserMapper mapper;

    @PostMapping
    public void create(@RequestBody UserRequest userRequest) {
        User user = mapper.toDomain(userRequest);
        repository.save(user);
    }
}
