import Sidebar from "@/app/components/sidebar"
import Anuncio from "@/app/components/anuncio"
import Image from "next/image"
import gostei from "../../../../public/like.png"
import casa2 from "../../../../public/casa2.jpg"
import casa3 from "../../../../public/casa3.jpeg"
import casa21 from "../../../../public/casa21.png"
import casa32 from "../../../../public/casa32.png"
import Sbar from "@/app/components/sbar"




export default function(){

  return(

    /*onde tudo da pagina se localiza, colocando a sidebar e o restante da pagina*/
    <div className=" bg-white h-screen flex flex-row">
      <Sbar />
      <div className="grow flex flex-col bg-white">
        {/*parte que contem a caixa de pesquisa*/}
        <div className="h-[100px] grow-2 border-b-2 flex justify-center items-center">
              
              <h1 className="text-blue-700 font-sans text-3xl NomeUsuario123">Casas Favoritas</h1>
          
        </div>

        
          {/* parte que contem os anuncios */}
          <div className="bg-white grow-7 flex content-center grow justify-center flex-row flex-wrap">
          <Anuncio foto={casa3} foto2={casa32} descricao={"Apartamento beira mar, uma suite e uma cozinha"} localizacao={"Copacabana"} preco={"R$2500/mes"} m2={"50m2"} nome={"Apartamento Casal"} like={gostei}></Anuncio>
          <Anuncio foto={casa2} foto2={casa21} descricao={"Casa completa e mobiliada, 4 quartos, 1 cozinha completa e quintal espaçoso."} localizacao={"Barra da Tijuca"} preco={"R$2500/mes"} m2={"250m2"} nome={"Casa na praia"} like={gostei}></Anuncio>
          </div>     
        </div>
    </div>


  )
}