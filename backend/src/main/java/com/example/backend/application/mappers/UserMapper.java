package com.example.backend.application.mappers;

import com.example.backend.application.dto.requests.UserRequest;
import com.example.backend.domain.model.User;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class UserMapper {

    private ModelMapper modelMapper;

    public User toDomain(UserRequest userRequest) {
        return modelMapper.map(userRequest, User.class);
    }

}
