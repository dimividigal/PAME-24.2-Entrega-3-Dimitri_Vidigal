import Sidebar from "@/app/components/sidebar"
import InputPadrao from "@/app/components/caixatexto"
import Link from "next/link"
import Sbar from "@/app/components/sbar"

export default function(){

  return(

    <div className=" bg-orange-600 h-screen w-screen flex flex-row">
      <Sbar />
      
          <div className="bg-white grow-7 flex content-center grow justify-center flex-col flex-wrap">

            <div className="bg-white border-4 w-[500px] h-[300px] flex justify-start items-center flex-col">

              <h1 className="text-black text-3xl font-sans font-bold m-8">Faça seu Login</h1>
                
                <InputPadrao algo={"Digite seu email"}></InputPadrao>
                
                <InputPadrao algo={"Digite sua senha"}></InputPadrao>
                
                <Link href={"/"}>
                    <button className="font-sans text-xl font-bold text-blue-700">Entrar</button>
                </Link>

                <button></button>
            </div>
            
            
          </div>      
        
    </div>

  )
}