"use client";
import { Book } from "@/types/Book";
import { Pencil, Trash2, X } from "lucide-react";
import { DeleteBookPopup } from "./DeleteBookPopup";
import { useState } from "react";

interface BookDetailsPopupProps {
  book: Book;
  onClose: () => void;
}

export const BookDetailsPopup = ({ book, onClose }: BookDetailsPopupProps) => {
  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  function deleteBookRedirect() {
    setOpenDeletePopup(true);
    console.log(book.id);
  }

  function deleteBookCloseAll() {
    setOpenDeletePopup(false);
    onClose();
  }

  return (
    <>
      <div className="bg-black/30 fixed top-0 left-0 right-0 bottom-0">
        <div className="bg-white text-purple-900 w-2/5 fixed p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl">{book.title}...</p>
            <X onClick={onClose} className="hover:scale-110 cursor-pointer" />
          </div>

          <div
            className={`${book.status === "WANT" && "bg-blue-100"}
            ${book.status === "READING" && "bg-yellow-100"}
            ${
              book.status === "READ" && "bg-green-100"
            } my-4 w-fit flex items-center gap-2 p-2 rounded-full px-4`}
          >
            <div
              className={`w-3 h-3 rounded-full ${
                book.status === "WANT" && "bg-blue-700"
              }
            ${book.status === "READING" && "bg-yellow-500"}
            ${book.status === "READ" && "bg-green-700"}`}
            />
            <p>
              {book.status === "WANT" && "Quero ler"}
              {book.status === "READING" && "Lendo"}
              {book.status === "READ" && "Já li"}
            </p>
          </div>

          <div className="text-[1.05rem] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-900 rounded-full" /> Autor(a):
              <strong>{book.author}</strong>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-900 rounded-full" /> Gênero:
              <strong>{book.genre}</strong>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-900 rounded-full" /> Ano de
              publicação:
              <strong>{book.publicationYear}</strong>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-900 rounded-full" /> Descrição:
              <strong>{book.description}</strong>
            </div>
            {book.status === "READ" && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-900 rounded-full" />
                  Data da leitura:
                  <strong>
                    {book.readingMonth.length === 1
                      ? `0${book.readingMonth}`
                      : book.readingMonth}
                    /{book.readingYear}
                  </strong>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-900 rounded-full" />
                  Nota:
                  <strong>{book.score}</strong>
                </div>
              </>
            )}
          </div>

          <div className="w-full flex justify-end gap-3">
            <div className="bg-blue-800 rounded-full overflow-hidden p-2 cursor-pointer hover:scale-110 transition-all">
              <Pencil className="" color="white" />
            </div>
            <div
              onClick={deleteBookRedirect}
              className="bg-red-600 rounded-full overflow-hidden p-2 cursor-pointer hover:scale-105 transition-all"
            >
              <Trash2 className="" color="white" />
            </div>
          </div>
        </div>
      </div>
      {openDeletePopup && (
        <DeleteBookPopup
          book={book}
          onClose={() => setOpenDeletePopup(false)}
          onCloseAll={deleteBookCloseAll}
        />
      )}
    </>
  );
};
