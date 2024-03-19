package com.example.backend.application.dto.requests;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserReference {

    @NotNull
    private Long id;

}
