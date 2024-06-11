"use client";
import { Library, LogOut, Plus, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  all: () => void;
  byStatus: (status: string) => void;
  onOpen: () => void;
}

export const Header = ({ all, byStatus, onOpen }: HeaderProps) => {
  const router = useRouter();
  const [selection, setSelection] = useState<
    "ALL" | "WANT" | "READING" | "READ"
  >("ALL");

  function getAll() {
    all();
    setSelection("ALL");
  }

  function getByStatus(status: string) {
    byStatus(status);
    setSelection(status as "ALL" | "WANT" | "READING" | "READ");
  }

  function handleSignOut() {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");

    router.push("/sign");
  }

  return (
    <header className="flex justify-between gap-5">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <div className="flex text-purple-900">
          <Library size={28} />
          <p className="pt-1 font-semibold">LivrosOrg</p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-purple-900 text-white p-2 hover:scale-110 transition-all rounded-full flex gap-1 items-center"
        >
          <LogOut size={20} />
        </button>
      </div>

      {/* MENU */}
      <div className="flex gap-2">
        <div
          onClick={() => getAll()}
          className={`${
            selection === "ALL" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer hover:scale-105 hover:shadow-md transition-all`}
        >
          Todos
        </div>
        <div
          onClick={() => getByStatus("WANT")}
          className={`${
            selection === "WANT" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer hover:scale-105 hover:shadow-md transition-all`}
        >
          Quero Ler
        </div>
        <div
          onClick={() => getByStatus("READING")}
          className={`${
            selection === "READING" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer hover:scale-105 hover:shadow-md transition-all`}
        >
          Lendo
        </div>
        <div
          onClick={() => getByStatus("READ")}
          className={`${
            selection === "READ" && "bg-purple-900 text-white"
          } bg-gray-100 p-2 px-4 rounded-full text-purple-900 cursor-pointer hover:scale-105 hover:shadow-md transition-all`}
        >
          Já Li
        </div>

        <div
          onClick={onOpen}
          className="bg-gray-100 p-2 flex rounded-full text-purple-900 cursor-pointer hover:scale-110 hover:shadow-md transition-all"
        >
          <Plus size={24} />
        </div>
      </div>
    </header>
  );
};
