import { axiosApi } from "@/lib/axios";
import { Book } from "@/types/Book";
import { X } from "lucide-react";

interface DeleteBookPopupProps {
  book: Book;
  onClose: () => void;
  onCloseAll: () => void;
}

export const DeleteBookPopup = ({
  book,
  onClose,
  onCloseAll,
}: DeleteBookPopupProps) => {
  async function deleteBook(bookId: string) {
    await axiosApi.delete(`/books/${bookId}`);
    onCloseAll();
    4;
  }

  return (
    <div className="bg-black/30 fixed top-0 bottom-0 right-0 left-0">
      <div className="bg-white text-purple-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-4">
        <div className="flex justify-between">
          <p className="font-bold text-lg">Excluir livro</p>
          <X className="hover:scale-110 cursor-pointer" onClick={onClose} />
        </div>
        <p className="my-5">
          Tem certeza que quer excluir o livro <strong>{book.title}</strong> da
          sua biblioteca?
        </p>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="w-full bg-gray-300 p-2 rounded-lg hover:scale-105 transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={() => deleteBook(book.id as string)}
            className="w-full bg-red-600 text-white p-2 rounded-lg hover:scale-105 transition-all"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};
