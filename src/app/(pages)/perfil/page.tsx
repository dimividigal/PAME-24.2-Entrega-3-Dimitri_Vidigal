
import Image from "next/image"
import usuario from "../../../../public/usuario.png"
import Sbar from "@/app/components/sbar"


export default function(){

  return(

    /*onde tudo da pagina se localiza, colocando a sidebar e o restante da pagina*/
    <div className=" bg-white flex flex-row">
      <Sbar />
      <div className="grow flex flex-col h-screen bg-white">
        {/*parte que contem o nome do usuario*/}
        <div className="h-[100px] grow-2 border-b-2 flex justify-center items-center">
              <Image className="w-[40px] h-[40px] m-3" src={usuario} alt="usuario"></Image>
              <h1 className="text-blue-700 font-sans text-3xl NomeUsuario123">NomeUsuario123</h1>
          
        </div>
          {/* parte que contem as informacoes */}
          <div className="bg-white grow-7 flex content-center grow justify-center items-center flex-row flex-wrap">
            <div className="bg-white border-4 w-[600px] h-[250px] flex justify-start items-start p-8 flex-col">
              {/*local onde ficam guardadas as informações do cliente */}
              <h1 className="text-black font-sans text-xl mb-4">Dados:</h1>
              <div>
                <h2 className="text-black font-sans mt-4">Nome: NomeUsuario123</h2>
              </div>
              <div className="flex flex-row mt-5" >
                <h3 className="mr-4 text-black font-sans">Senha: ******</h3>
                <button className="mr-8 text-blue-800 font-sans font-bold">Ver senha</button>
                <button className="mr-4 text-blue-800 font-sans font-bold">Alterar senha</button>
              </div>

              <div className="flex flex-row mt-5">
                <h3 className="mr-4 text-black font-sans">email: usuario@dominio.com</h3>
                <button className="mr-8 text-blue-800 font-sans font-bold">Ver email</button>
                <button className="mr-4 text-blue-800 font-sans font-bold">Alterar email</button>
              </div>

            </div>
            
          </div>      
        </div>
    </div>


  )
}