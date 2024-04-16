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

import static java.lang.Long.parseLong;

@RestController
@AllArgsConstructor
@RequestMapping("/books")
public class BookController {

    private BookRepository repository;
    private BookMapper mapper;

    @GetMapping("/user/{userId}/book/{bookId}")
    public BookDTO getBookById(@PathVariable Long userId, @PathVariable Long bookId) {
        List<Book> books = repository.findAllByUserId(userId);
        Book selectedBook = books.stream()
                .filter(book -> Objects.equals(book.getId(), bookId))
                .findFirst()
                .orElse(null);
        return selectedBook != null ? mapper.toDTO(selectedBook) : null;
    }

    @GetMapping("/user/{userId}")
    public List<Book> findAllByUser(@PathVariable Long userId) {
        return repository.findAllByUserId(userId);
    }

    @GetMapping("/user/{userId}/{status}")
    public List<Book> findAllByStatus(@PathVariable Long userId, @PathVariable String status) {
        List<Book> books = repository.findAllByUserId(userId);
        List<Book> booksByStatus = new ArrayList<>();
        for (Book book : books) {
            if (Objects.equals(book.getStatus(), status.toUpperCase())) {
                booksByStatus.add(book);
            }
        }
        return booksByStatus;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody @Valid BookRequest bookRequest) {
        Book book = mapper.toDomain(bookRequest);
        repository.save(book);
    }

    @DeleteMapping("{bookId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String bookId) {
        repository.deleteById(parseLong(bookId));
    }

}
