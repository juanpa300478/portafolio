import { Social } from "./Social"
import jean from "../assets/jean-paul-photo.jpg"
export const Home = () =>{
    return(
        <div className="dark:bg-neutral-800 dark:text-white -z-30 flex items-center place-content-center absolute top-0 left-0 right-0 bottom-0">
            <div className="w-10/12 text-center flex flex-col items-center gap-2">
                <div className="border rounded-xl w-48 h-auto overflow-hidden">
                    <img className="w-full" src={jean} alt="foto profecional de jean paul" />
                </div>
                <p className="md:text-3xl text-xl">¡Hola👋! Soy <strong>Jean Paul Villarreal Bustamante</strong>, <strong >analista</strong> y <strong>desarrollador de software</strong>. Me gusta el <strong>desarrollo web</strong> y la <strong>innovación</strong>; vivo con la idea de <strong>mejorar continuamente</strong>, en mi área <strong>personal</strong> y <strong>profesional</strong>.</p>
                <div><Social /></div>

            </div>
        </div>
    )
}