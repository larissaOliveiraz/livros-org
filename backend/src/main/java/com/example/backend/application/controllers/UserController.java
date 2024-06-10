package com.example.backend.application.controllers;

import com.example.backend.application.dto.UserDTO;
import com.example.backend.application.dto.requests.UserRequest;
import com.example.backend.application.mappers.UserMapper;
import com.example.backend.domain.model.User;
import com.example.backend.domain.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserRepository repository;
    private UserMapper mapper;

    @GetMapping("/{id}")
    public UserDTO getById(@PathVariable Long id) {
        User user = repository.findById(id).orElseThrow();
        return mapper.toDTO(user);
    }

    @GetMapping("/username/{username}")
    public User getByUsername(@PathVariable String username) {
        return repository.findByUsername(username);
    }

    @PostMapping
    public void create(@RequestBody UserRequest userRequest) {
        User user = mapper.toDomain(userRequest);
        repository.save(user);
    }
}
