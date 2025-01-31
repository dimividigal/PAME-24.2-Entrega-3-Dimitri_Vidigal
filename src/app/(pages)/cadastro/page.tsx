import Sidebar from "@/app/components/sidebar"
import InputPadrao from "@/app/components/caixatexto"
import Link from "next/link"
export default function(){

  return(
    //div que guarda tudo
    <div className=" bg-white h-screen w-screen flex flex-row">
      <Sidebar></Sidebar>
      
          <div className="bg-white grow-7 flex content-center grow justify-center flex-col flex-wrap">

            <div className="bg-white border-4 w-[500px] h-[500px] flex justify-start items-center flex-col">

              <h1 className="text-black text-3xl font-sans font-bold m-8">Cadastro</h1>
                <InputPadrao algo={"Digite seu nome"}></InputPadrao>
                <InputPadrao algo={"Digite seu email"}></InputPadrao>
                <InputPadrao algo={"Confime seu email"}></InputPadrao>
                <InputPadrao algo={"Digite sua senha"}></InputPadrao>
                <InputPadrao algo={"Confime seu email"}></InputPadrao>
                <Link href={"/"}>
                    <button className="font-sans text-xl font-bold text-blue-700">Cadastrar</button>
                </Link>

                <button></button>
            </div>
            
            
          </div>      
        
    </div>

  )
}