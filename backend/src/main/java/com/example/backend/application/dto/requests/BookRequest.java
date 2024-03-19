package com.example.backend.application.dto.requests;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String author;

    @NotBlank
    private String genre;

    private String description;

    @NotBlank
    private String publicationYear;

    @NotBlank
    private String status;

    private String readingMonth;

    private String readingYear;

    private String score;

    @Valid
    @NotNull
    private UserReference user;

}
