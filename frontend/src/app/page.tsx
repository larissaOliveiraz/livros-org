"use client";
import { Header } from "@/components/Header";
import { axiosApi } from "@/lib/axios";
import { Book } from "@/types/Book";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  async function getAllBooks() {
    const { data } = await axiosApi.get("/books/1");
    setBooks(data);
  }

  async function getBooksByStatus(status: string) {
    const { data } = await axiosApi.get(`/books/1/${status.toLowerCase()}`);
    setBooks(data);
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <div className="p-4 w-[60%] h-[60%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md">
        <Header all={getAllBooks} byStatus={getBooksByStatus} />
        <main className="mt-3">
          <div className="flex items-center justify-between">
            <p>0 livros</p>
            <div className="flex gap-2 bg-gray-100 p-2 rounded-full text-purple-900">
              <input
                type="text"
                className="bg-gray-100 outline-none px-2 w-full"
              />
              <Search size={24} className="cursor-pointer" />
            </div>
          </div>
          {books && books.map((book) => <p>{book.title}</p>)}
        </main>
      </div>
    </>
  );
}
