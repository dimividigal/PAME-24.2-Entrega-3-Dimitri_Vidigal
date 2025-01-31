import Anuncio from "./components/anuncio"
import lupa from "../../public/lupa.png"
import casa1 from "../../public/casasolid.jpg"
import casa12 from "../../public/casasolid2.jpg"
import casa2 from "../../public/casa2.jpg"
import casa21 from "../../public/casa21.png"
import casa3 from "../../public/casa3.jpeg"
import casa32 from "../../public/casa32.png"
import casa4 from "../../public/casa4.jpeg"
import casa42 from "../../public/casa42.png"
import gostei from "../../public/like.png"
import naogostei from "../../public/likevazio.png"
import Image from "next/image"
import Sbar from "./components/sbar"


export default function(){

  return(
    /*onde tudo da pagina se localiza, colocando a sidebar e o restante da pagina*/
    <main>
    <div className=" bg-white flex flex-row">
      <Sbar/>
      <div className="grow flex flex-col bg-white">
        {/*parte que contem a caixa de pesquisa*/}
        <div className="h-[100px] grow-2 border-b-2 flex justify-center items-center">
          <div className="bg-white w-[300px] h-[50px] md:w-[400px] rounded-full shadow-xl border flex items-center justify-between">
              <input className="m-3 w-[300px] font-sans placeholder:text-gray-500 placeholder:italic" placeholder="Digite um nome ou um endereço"></input>
              <button className="m-3 h-[30px] w-[30px]">
                <Image src={lupa} alt=""></Image>
              </button>
          </div>
        </div>
          {/* parte que contem os anuncios */}
          <div className="bg-white grow-7 flex content-center grow justify-center flex-row flex-wrap">
            <Anuncio foto={casa2} foto2={casa21} descricao={"Casa completa e mobiliada, 4 quartos, 1 cozinha completa e quintal espaçoso."} localizacao={"Barra da Tijuca"} preco={"R$2500/mes"} m2={"250m2"} nome={"Casa na praia"} like={gostei} route={"casa_1_detalhada"}  ></Anuncio>
            <Anuncio foto={casa1} foto2={casa12} descricao={"Casa de 2 quartos e um banheiro e cozinha. Mobiliada."} localizacao={"Recreio"} preco={"R$1000/mes"} m2={"70m2"} nome={"Casa Família"} like={naogostei} route={"casa_2_detalhada"} ></Anuncio>
            <Anuncio foto={casa3} foto2={casa32} descricao={"Apartamento beira mar, uma suite e uma cozinha"} localizacao={"Copacabana"} preco={"R$2500/mes"} m2={"50m2"} nome={"Apartamento Casal"} like={gostei} route={"casa_3_detalhada"} ></Anuncio>
            <Anuncio foto={casa4} foto2={casa42} descricao={"Casa completa e mobiliada, 5 quartos, 1 cozinha completa suite casal e quintal beira praia"} localizacao={"Angra dos Reis"} preco={"R$5000/mes"} m2={"50m2"} nome={"Casa Paradisiaca"} like={naogostei} route={"casa_4_detalhada"}  ></Anuncio>
            
          </div>      
        </div>
    </div>
    </main>

  )

}
