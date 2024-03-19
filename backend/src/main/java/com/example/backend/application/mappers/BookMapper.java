package com.example.backend.application.mappers;

import com.example.backend.application.dto.requests.BookRequest;
import com.example.backend.domain.model.Book;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class BookMapper {

    private ModelMapper modelMapper;

    public Book toDomain(BookRequest bookRequest) {
        return modelMapper.map(bookRequest, Book.class);
    }

}
