"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import usuario from "../../../public/usuario.png"
import LinkButton from "./loginbutton";

export default function Sbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      {/* Botão para abrir/fechar sidebar */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 bg-blue-700 text-white rounded-md fixed top-4 left-4 z-50"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/*personalizar a sidebar*/}
      <div className={`fixed top-0 left-0 h-full w-30 bg-white text-white p-4 flex flex-col justify-start gap-5 items-center border-r-2
                      transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                      transition-transform duration-300 ease-in-out`}>

        <Link href={"/"}>
            <button className="font-sans text-4xl font-bold text-blue-700 mt-9 )">Aluga Aí!</button>
        </Link>
        <div className="flex flex-row justify-center items-center">
                <Image className="w-[30px] m-3" src={usuario} alt="usuario"></Image>
                <LinkButton name={"Meu Perfil"} rota={"perfil"} ></LinkButton>
        </div>
        <LinkButton name={"Favoritos"} rota={"favoritos"} ></LinkButton>
        <LinkButton name={"Cadastre-se!"} rota={"cadastro"} ></LinkButton>
        <LinkButton name={"Faça seu login!"} rota={"login"} ></LinkButton>

        
      </div>
    </div>
  );
}