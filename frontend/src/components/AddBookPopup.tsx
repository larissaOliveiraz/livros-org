"use client";
import { X } from "lucide-react";
import { GenericInput } from "./GenericInput";
import { useState } from "react";
import { axiosApi } from "@/lib/axios";
import { Book } from "@/types/Book";

interface AddBookPopupProps {
  onClose: () => void;
}

export const AddBookPopup = ({ onClose }: AddBookPopupProps) => {
  const [status, setStatus] = useState<"WANT" | "READING" | "READ">("WANT");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [description, setDescription] = useState("");
  const [readingYear, setReadingYear] = useState("");
  const [readingMonth, setReadingMonth] = useState("");
  const [score, setScore] = useState("");

  async function addBook({
    title,
    author,
    genre,
    publicationYear,
    description,
    status,
    readingMonth,
    readingYear,
    score,
  }: Book) {
    const { data } = await axiosApi.post("/books", {
      title,
      author,
      genre,
      publicationYear,
      description,
      status,
      readingMonth,
      readingYear,
      score,
      user: {
        id: 1,
      },
    });

    console.log(data);

    onClose();
  }

  return (
    <div className="bg-black/30 fixed top-0 left-0 right-0 bottom-0">
      <div className="bg-white text-purple-900 w-2/5 fixed p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between text-purple-900">
          <p className="font-semibold text-lg">ADICIONAR LIVRO</p>
          <X
            onClick={() => onClose()}
            className="cursor-pointer hover:scale-110"
          />
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <label>
              Título*
              <GenericInput value={title} setValue={setTitle} />
            </label>
            <label>
              Autor*
              <GenericInput value={author} setValue={setAuthor} />
            </label>
            <label>
              Gênero
              <GenericInput value={genre} setValue={setGenre} />
            </label>
            <label>
              Ano de publicação
              <GenericInput
                value={publicationYear}
                setValue={setPublicationYear}
              />
            </label>
          </div>

          <label className="flex flex-col">
            Descrição
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols={30}
              rows={3}
              className="bg-gray-100 p-2 outline-none rounded-lg"
            ></textarea>
          </label>

          <label>
            Status*
            <div className="flex justify-between gap-3">
              <button
                onClick={() => setStatus("WANT")}
                className={`${
                  status === "WANT" ? "bg-blue-800 text-white" : "bg-gray-100"
                }  w-full rounded-lg p-3`}
              >
                Quero ler
              </button>
              <button
                onClick={() => setStatus("READ")}
                className={`${
                  status === "READ" ? "bg-green-700 text-white" : "bg-gray-100"
                }  w-full rounded-lg p-3`}
              >
                Já li
              </button>
              <button
                onClick={() => setStatus("READING")}
                className={`${
                  status === "READING"
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-100"
                } w-full rounded-lg p-3 outline-none`}
              >
                Lendo
              </button>
            </div>
          </label>
          {status === "READ" && (
            <div className="flex gap-5">
              <label className="w-full">
                Mês
                <GenericInput value={readingMonth} setValue={setReadingMonth} />
              </label>
              <label className="w-full">
                Ano
                <GenericInput value={readingYear} setValue={setReadingYear} />
              </label>
              <label>
                Nota <GenericInput value={score} setValue={setScore} />
              </label>
            </div>
          )}
          <button
            onClick={() =>
              addBook({
                title,
                author,
                genre,
                publicationYear,
                description,
                status,
                readingMonth,
                readingYear,
                score,
              })
            }
            className="bg-purple-900 text-white p-3 rounded-lg"
          >
            ADICIONAR
          </button>
        </div>
      </div>
    </div>
  );
};
