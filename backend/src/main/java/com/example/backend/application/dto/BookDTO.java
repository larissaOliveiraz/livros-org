package com.example.backend.application.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookDTO {

    private Long id;
    private String title;
    private String author;
    private String genre;
    private String description;
    private String publicationYear;
    private String status;
    private String readingMonth;
    private String readingYear;
    private String score;

}
