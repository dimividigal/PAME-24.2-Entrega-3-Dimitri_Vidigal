

import Image from "next/image"
function Anuncio({foto,foto2,descricao,localizacao,m2,preco,nome,like}: any){


    return(
        <div className="h-[270px] w-[450px] m-3 bg-white border-4 grid grid-cols-2 place-content-start place-items-start gap-4 ">
            
            {/*coloca a foto que recebe no argumento */}
            <div className="h-[134px] w-[200px] border-r-4 border-b-4 overflow-y-scroll">
                <Image src={foto} alt={"foto da casa"} className="h-[130px] w-[200px] "></Image>
                <Image src={foto2} alt={"foto da casa"} className="h-[130px] w-[200px] "></Image>
                
            </div>
            {/*organizaçao dentro da propria caixa de anuncio */}
            <div className="bg-white h-[180px] w-[213px] flex flex-col  justify-between">
            <h1 className="font-sans text-l font-bold text-black">{nome}</h1>
            <h1 className="font-sans text-[13px] mr-2 text-black">{descricao}</h1>
            <h1 className="font-sans text-[14px] text-black">{m2}</h1>
            <div className="flex justify-center items-center">
                <button className="font-sans bg-blue-700 rounded-full text-m font-bold text-white h-[30px] w-[80px]">Ver Mais!</button>
                <button className="w-[40px] h-[40px] m-3"><Image src={like} alt=""></Image></button>
            </div>
            </div>
            <div>
                <h1 className="font-sans text-l font-bold text-black">Localização:</h1>
                <h2 className="font-sans text-l text-black">{localizacao}</h2>
            </div>
            <div>
                <h3 className="font-sans text-l font-bold text-black">Preço:</h3>
                <h4 className="font-sans text-l text-black">{preco}</h4>
            </div>
            

        </div>
    )
}

export default Anuncio