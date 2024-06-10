"use client";

import { GenericInput } from "@/components/GenericInput";
import { useState } from "react";

export default function Sign() {
  const [activeButton, setActiveButton] = useState<"SIGNIN" | "LOGIN">(
    "SIGNIN"
  );
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-4 w-[40%]  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md">
      <header className="flex w-full">
        <button
          onClick={() => setActiveButton("SIGNIN")}
          className={`flex flex-1 items-center justify-center mr-2 bg-gray-100 p-3 rounded-full ${
            activeButton === "SIGNIN" && "bg-purple-900 text-white"
          }`}
        >
          Cadastro
        </button>
        <button
          onClick={() => setActiveButton("LOGIN")}
          className={`flex flex-1 items-center justify-center ml-2 bg-gray-100 p-3 rounded-full ${
            activeButton === "LOGIN" && "bg-purple-900 text-white"
          }`}
        >
          Login
        </button>
      </header>

      {activeButton === "SIGNIN" ? (
        <div className="mt-10 flex flex-col gap-3">
          <label>
            Nome:
            <GenericInput value={name} setValue={setName} />
          </label>
          <label>
            Usuário:
            <GenericInput value={username} setValue={setUsername} />
          </label>
          <label>
            Senha:
            <GenericInput value={password} setValue={setPassword} />
          </label>
          <button className="bg-purple-900 text-white p-2 rounded-lg mt-5 hover:brightness-75">
            Cadastrar
          </button>
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-3">
          <label>
            Usuário:
            <GenericInput value={username} setValue={setUsername} />
          </label>
          <label>
            Senha:
            <GenericInput value={password} setValue={setPassword} />
          </label>
          <button className="bg-purple-900 text-white p-2 rounded-lg mt-5 hover:brightness-75">
            Login
          </button>
        </div>
      )}
    </div>
  );
}
