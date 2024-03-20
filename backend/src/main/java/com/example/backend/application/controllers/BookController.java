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

import java.util.List;

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

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody @Valid BookRequest bookRequest) {
        Book book = mapper.toDomain(bookRequest);
        repository.save(book);
    }

}
