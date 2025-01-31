
import Image from "next/image"
import usuario from "../../../public/usuario.png"
import LinkButton from "./loginbutton"
import Link from "next/link"
function Sidebar(){

    return(
        <div className="flex">
            {/*faz com que o sidebar fique fixo*/}
            <aside className="w-[180px] h-screen sticky top-0 bg-white flex flex-col items-center  justify-around gap-12 border-r-2">

                {/* botao que leva de volta para a pagina principal*/}
                <Link href={"/"}>
                    <button className="font-sans text-4xl font-bold text-blue-700 )">Aluga Aí!</button>
                </Link>
                <div className="flex flex-col items-center h-[30vh] justify-around w-[400px]">

                    {/* botoes do sidebar que encaminham para as paginas referidas */}
                    <div className="flex flex-row justify-center items-center">
                        <Image className="w-[30px] m-3" src={usuario} alt="usuario"></Image>
                        <LinkButton name={"Meu Perfil"} rota={"perfil"} ></LinkButton>
                    </div>
                    <LinkButton name={"Favoritos"} rota={"favoritos"} ></LinkButton>
                    <LinkButton name={"Cadastre-se!"} rota={"cadastro"} ></LinkButton>
                    <LinkButton name={"Faça seu login!"} rota={"login"} ></LinkButton>
                    
                </div>
            </aside>
           
        </div>
        
    )
}

export default Sidebar
