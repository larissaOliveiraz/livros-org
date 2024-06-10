package com.example.backend.application.mappers;

import com.example.backend.application.dto.UserDTO;
import com.example.backend.application.dto.requests.UserRequest;
import com.example.backend.domain.model.User;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Optional;

@AllArgsConstructor
@Component
public class UserMapper {

    private ModelMapper modelMapper;

    public UserDTO toDTO(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    public User toDomain(UserRequest userRequest) {
        return modelMapper.map(userRequest, User.class);
    }

}
