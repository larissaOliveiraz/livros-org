"use client";
import { Library, Plus, Search } from "lucide-react";
import { useState } from "react";
import { AddBookPopup } from "./AddBookPopup";
import { Book } from "@/types/Book";

interface HeaderProps {
  all: () => void;
  byStatus: (status: string) => void;
}

export const Header = ({ all, byStatus }: HeaderProps) => {
  const [selection, setSelection] = useState<
    "ALL" | "WANT" | "READING" | "READ"
  >("ALL");
  const [opened, setOpened] = useState(false);

  function getAll() {
    all();
    setSelection("ALL");
  }

  function getByStatus(status: string) {
    byStatus(status);
    setSelection(status as "ALL" | "WANT" | "READING" | "READ");
  }

  return (
    <header className="flex justify-between gap-5">
      {/* LOGO */}
      <div className="flex text-purple-900">
        <Library size={28} />
        <p className="pt-1 font-semibold">LivrosOrg</p>
      </div>

      {/* MENU */}
      <div className="flex gap-2">
        <div
          onClick={() => getAll()}
          className={`${
            selection === "ALL" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
        >
          Todos
        </div>
        <div
          onClick={() => getByStatus("WANT")}
          className={`${
            selection === "WANT" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
        >
          Quero Ler
        </div>
        <div
          onClick={() => getByStatus("READING")}
          className={`${
            selection === "READING" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
        >
          Lendo
        </div>
        <div
          onClick={() => getByStatus("READ")}
          className={`${
            selection === "READ" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
        >
          Já Li
        </div>

        <div
          onClick={() => setOpened(true)}
          className="bg-gray-100 p-2 flex rounded-full text-purple-900 hover:bg-gray-200 cursor-pointer"
        >
          <Plus size={24} />
        </div>
        {opened && <AddBookPopup onClose={() => setOpened(false)} />}
      </div>
    </header>
  );
};
