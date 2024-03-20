package com.example.backend.application.controllers;

import com.example.backend.application.dto.BookDTO;
import com.example.backend.application.dto.requests.BookRequest;
import com.example.backend.application.mappers.BookMapper;
import com.example.backend.domain.model.Book;
import com.example.backend.domain.repositories.BookRepository;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@AllArgsConstructor
@RequestMapping("/books")
public class BookController {

    private BookRepository repository;
    private BookMapper mapper;

    @GetMapping("/{userId}")
    public List<BookDTO> findAllByUser(@PathVariable Long userId) {
        List<Book> books = repository.findAllByUserId(userId);
        return mapper.toCollectionDTO(books);
    }

    @GetMapping("/{userId}/{status}")
    public List<BookDTO> findAllByStatus(@PathVariable Long userId,@PathVariable String status) {
        List<Book> books = repository.findAllByUserId(userId);
        List<Book> booksByStatus = new ArrayList<>();
        for (Book book : books) {
            if (Objects.equals(book.getStatus(), status.toUpperCase())) {
                booksByStatus.add(book);
            }
        }
        return mapper.toCollectionDTO(booksByStatus);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody @Valid BookRequest bookRequest) {
        Book book = mapper.toDomain(bookRequest);
        repository.save(book);
    }

}
