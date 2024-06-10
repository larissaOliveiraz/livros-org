"use client";
import { axiosApi } from "@/lib/axios";
import { Book } from "@/types/Book";
import { ReactNode, createContext, useState } from "react";

type ProviderProps = {
  children: ReactNode;
};

type BooksContextType = {
  books: Book[];
  getAllBooks: () => void;
  setAllBooks: (books: Book[]) => void;
};

export const BooksContext = createContext({} as BooksContextType);

export const BooksContextProvider = ({ children }: ProviderProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  async function getAllBooks() {
    const userId = localStorage.getItem("userId");
    const { data } = await axiosApi.get(`/books/user/${userId}`);
    setBooks(data);
  }

  function setAllBooks(books: Book[]) {
    setBooks(books);
  }

  return (
    <BooksContext.Provider value={{ books, getAllBooks, setAllBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
