"use client";
import { AddBookPopup } from "@/components/AddBookPopup";
import { BookDetailsPopup } from "@/components/BookDetailsPopup";
import { GenericInput } from "@/components/GenericInput";
import { Header } from "@/components/Header";
import { BooksContext } from "@/contexts/BooksContext";
import { axiosApi } from "@/lib/axios";
import { Book } from "@/types/Book";
import { Search } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { books, getAllBooks, setAllBooks } = useContext(BooksContext);

  const [search, setSearch] = useState("");
  const [booksFiltered, setBooksFiltered] = useState<Book[]>([]);
  const [bookDetails, setBookDetails] = useState<Book>();
  const [openAddBookPopup, setOpenAddBookPopup] = useState(false);
  const [openBookDetailsPopup, setOpenBookDetailsPopup] = useState(false);

  async function getBooksByStatus(status: string) {
    const { data } = await axiosApi.get(
      `/books/user/1/${status.toLowerCase()}`
    );
    setAllBooks(data);
  }

  async function getBookDetails(bookId: string) {
    const { data } = await axiosApi.get(`/books/user/1/book/${bookId}`);
    setOpenBookDetailsPopup(true);
    setBookDetails(data);
  }

  function addBook() {
    getAllBooks();
    setOpenAddBookPopup(false);
  }

  function handleSearchBook(input: string) {
    let filteredBooks: Book[] = [];
    for (let book of books) {
      if (
        book.title.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
        book.author.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
        book.genre.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
        book.readingYear.toLowerCase().indexOf(input.toLowerCase()) > -1
      ) {
        filteredBooks.push(book);
      }
    }
    setBooksFiltered(filteredBooks);
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    handleSearchBook(search);
  }, [search]);

  return (
    <>
      <div className="p-4 w-[60%] h-[60%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md">
        <Header
          all={getAllBooks}
          byStatus={getBooksByStatus}
          onOpen={() => setOpenAddBookPopup(true)}
        />
        <main className="mt-3">
          <div className="flex items-center justify-between gap-10">
            <p className="flex">
              {books.length} {books.length > 1 ? "livros" : "livro"}
            </p>
            <div className="flex flex-1 items-center gap-2 text-purple-900">
              <GenericInput
                value={search}
                setValue={setSearch}
                placeholder="Busque livros pelo título, autor, gênero ou ano de leitura..."
              />

              <Search size={24} className="cursor-pointer -ml-11" />
            </div>
          </div>

          <div className="bg-gray-200 w-full h-4 mt-3 rounded-full overflow-hidden">
            <div className="bg-purple-800 w-[30%] h-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-3">
            {search !== "" &&
              booksFiltered.map((book) => (
                <div
                  onClick={() => getBookDetails(book.id as string)}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:shadow-md cursor-pointer hover:scale-105 transition-all ${
                    book.status === "WANT" && "bg-blue-100"
                  } ${book.status === "READING" && "bg-yellow-100"} ${
                    book.status === "READ" && "bg-green-100"
                  } `}
                >
                  <div
                    className={`${book.status === "WANT" && "bg-blue-700"} ${
                      book.status === "READING" && "bg-yellow-500"
                    } ${
                      book.status === "READ" && "bg-green-600"
                    } w-5 h-5 rounded-full`}
                  ></div>
                  <div>
                    <p className="text-lg font-semibold -mb-1">{book.title}</p>
                    <p>{book.author}</p>
                  </div>
                </div>
              ))}
            {search === "" &&
              books.map((book) => (
                <div
                  onClick={() => getBookDetails(book.id as string)}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:shadow-md cursor-pointer hover:scale-105 transition-all ${
                    book.status === "WANT" && "bg-blue-100"
                  } ${book.status === "READING" && "bg-yellow-100"} ${
                    book.status === "READ" && "bg-green-100"
                  } `}
                >
                  <div
                    className={`${book.status === "WANT" && "bg-blue-700"} ${
                      book.status === "READING" && "bg-yellow-500"
                    } ${
                      book.status === "READ" && "bg-green-600"
                    } w-5 h-5 rounded-full`}
                  ></div>
                  <div>
                    <p className="text-lg font-semibold -mb-1">{book.title}</p>
                    <p>{book.author}</p>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
      {openAddBookPopup && <AddBookPopup onClose={addBook} />}
      {openBookDetailsPopup && (
        <BookDetailsPopup
          book={bookDetails as Book}
          onClose={() => setOpenBookDetailsPopup(false)}
        />
      )}
    </>
  );
}
