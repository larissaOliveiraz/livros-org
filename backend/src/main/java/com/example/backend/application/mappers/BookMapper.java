package com.example.backend.application.mappers;

import com.example.backend.application.dto.BookDTO;
import com.example.backend.application.dto.requests.BookRequest;
import com.example.backend.domain.model.Book;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class BookMapper {

    private ModelMapper modelMapper;

    public BookDTO toDTO(Book book) {
        return modelMapper.map(book, BookDTO.class);
    }

    public List<BookDTO> toCollectionDTO(List<Book> books) {
        return books.stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Book toDomain(BookRequest bookRequest) {
        return modelMapper.map(bookRequest, Book.class);
    }

}
