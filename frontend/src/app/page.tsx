"use client";
import { AddBookPopup } from "@/components/AddBookPopup";
import { Library, Plus, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selection, setSelection] = useState<
    "ALL" | "WANT" | "READING" | "READ"
  >("ALL");
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="p-4 w-[70%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md">
        <header className="flex justify-between gap-5">
          {/* LOGO */}
          <div className="flex text-purple-900">
            <Library size={28} />
            <p className="pt-1 font-semibold">LivrosOrg</p>
          </div>

          {/* MENU */}
          <div className="flex gap-2">
            <div
              onClick={() => setSelection("ALL")}
              className={`${
                selection === "ALL" && "bg-purple-900 text-white"
              } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
            >
              Todos
            </div>
            <div
              onClick={() => setSelection("WANT")}
              className={`${
                selection === "WANT" && "bg-purple-900 text-white"
              } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
            >
              Quero Ler
            </div>
            <div
              onClick={() => setSelection("READING")}
              className={`${
                selection === "READING" && "bg-purple-900 text-white"
              } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
            >
              Lendo
            </div>
            <div
              onClick={() => setSelection("READ")}
              className={`${
                selection === "READ" && "bg-purple-900 text-white"
              } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer`}
            >
              Já Li
            </div>
            <div className="flex gap-2 bg-gray-100 p-2 rounded-full text-purple-900">
              <input type="text" className="bg-gray-100 outline-none px-2" />
              <Search size={24} className="cursor-pointer" />
            </div>
            <div
              onClick={() => setOpened(true)}
              className="bg-gray-100 p-2 flex rounded-full text-purple-900 hover:bg-gray-200 cursor-pointer"
            >
              <Plus size={24} />
            </div>
          </div>
        </header>
        <main>livros</main>
      </div>
      {opened && <AddBookPopup onClose={() => setOpened(false)} />}
    </>
  );
}
