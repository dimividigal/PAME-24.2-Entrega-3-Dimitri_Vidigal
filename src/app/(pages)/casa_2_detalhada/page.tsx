import Sbar from "@/app/components/sbar"
import Image from "next/image"
import casa21 from "../../../../public/casasolid.jpg"
import casa2 from "../../../../public/casasolid2.jpg"

export default function(){

    return(

        
        <div className="grow flex flex-col h-fit p-10 pl-7 bg-white">
        
            <Sbar/>
            
                <div className=" h-[20vh] flex items-center border-2 ">
                    {/*aqui aonde ficam os nomes dos imoveis */}
                          <h1 className="text-black font-bold font-sans text-3xl">Casa Família</h1>
                </div>

                <div className=" md:w-[60vw] flex flex-col md:flex-row justify-between items-center h-fit">
                    <div className="w-80 h-60 overflow-y-scroll">
                        {/*aqui aonde ficam as imagens dos imoveis */}
                        <Image src={casa2} alt={"casa"} className="w-80 h-60"></Image>
                        <Image src={casa21} alt={"casa"} className="w-80 h-60"></Image>
                    </div>
                    <iframe className="h-80 w-80 m-2 md:mt-2 mt-3" src={"https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117508.76856413599!2d-43.46055794851098!3d-23.018300121127673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bc2cdead0f623%3A0x618a0cca0ad51256!2sPraia%20da%20Barra%20da%20Tijuca!5e0!3m2!1spt-BR!2sbr!4v1738279312091!5m2!1spt-BR!2sbr"}>

                    </iframe>
        
                </div>
                        {/*aqui aonde ficam a descrição dos imoveis */}
                <div className="flex flex-col justify-start items-start h-fit pt-4 border-2 p-4">
                    <p className="font-bold font-sans text-black">A casa tem dois quartos, um de casal e outro com beliche. ambos os quartos tem televisão, escrivaninha para trabalhar e ar condicionado. 
                                                                    tem apenas um banheiro, que conta com chuveiro elétrico
                                                                    área de serviço/varanda, que tem um tanque e uma máquina lava e seca.
                                                                    cozinha equipada com cooktop, exaustor, geladeira e airfryer. 
                                                                    sala com televisão,ar condicionado</p>
                    <p className="font-bold font-sans text-black mt-2">Localização: Barra da Tijuca</p>
                    <p className="font-bold font-sans text-black mt-2">Preço: R$1000</p>
                    <button className="font-bold font-sans rounded-full mt-2 w-[100px] h-[30px] bg-blue-700">Alugue Aí!</button>


                </div>
                

            

        </div>

    )
}