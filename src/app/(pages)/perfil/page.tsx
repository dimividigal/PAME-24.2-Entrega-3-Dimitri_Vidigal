import Sidebar from "@/app/components/sidebar"
import Image from "next/image"
import usuario from "../../../../public/usuario.png"


export default function(){

  return(

    /*onde tudo da pagina se localiza, colocando a sidebar e o restante da pagina*/
    <div className=" bg-white flex flex-row">
      <Sidebar></Sidebar>
      <div className="grow flex flex-col bg-white">
        {/*parte que contem a caixa de pesquisa*/}
        <div className="h-[100px] grow-2 border-b-2 flex justify-center items-center">
              <Image className="w-[40px] h-[40px] m-3" src={usuario} alt="usuario"></Image>
              <h1 className="text-blue-700 font-sans text-3xl NomeUsuario123">NomeUsuario123</h1>
          
        </div>
          {/* parte que contem os anuncios */}
          <div className="bg-white grow-7 flex content-center grow justify-center flex-row flex-wrap">
            <div className="bg-white border-4 w-[500px] h-[400px] flex justify-start items-start p-4 flex-col">
              <h1 className="text-black font-sans text-xl mb-4">Dados:</h1>
              <div>
                <h2 className="text-black font-sans mt-4">Nome: NomeUsuario123</h2>
              </div>
              <div className="flex flex-row">
                <h3 className="mr-4 text-black font-sans">Senha: ******</h3>
                <button className="mr-8 text-blue-800 font-sans font-bold">Ver senha</button>
                <button className="mr-4 text-blue-800 font-sans font-bold">Alterar senha</button>
              </div>

              <div className="flex flex-row">
                <h3 className="mr-4 text-black font-sans">Senha: ******</h3>
                <button className="mr-8 text-blue-800 font-sans font-bold">Ver email</button>
                <button className="mr-4 text-blue-800 font-sans font-bold"> Alterar email</button>
              </div>

            </div>
            
          </div>      
        </div>
    </div>


  )
}