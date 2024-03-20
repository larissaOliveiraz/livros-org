package com.example.backend.domain.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
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

    @ManyToOne
    private User user;

}
