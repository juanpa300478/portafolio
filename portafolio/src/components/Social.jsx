import { GitIcon } from "./GitIcon"
import { Linkedin } from "./Linkedin"
import { WhatsApp } from "./WhatsApp"
import { Youtube } from "./Youtube"

export const Social = () =>{
        //https://www.svgrepo.com/svg/521923/whatsapp
        const dark = '#fff'
        const light = '#000'
    return(
        <div className="flex items-center content-center">
            <div className="dark:flex items-center content-center gap-2 hidden dark:visible" >
                <a href="https://github.com/juanpa300478" target="_blanck"><GitIcon theme={dark}/></a>
                <a href="https://wa.me/+573248179095?text=hola, necesito contactar contigo" target="_blanck"><WhatsApp theme={dark}/></a>
                <a href="https://www.linkedin.com/in/jean-paul-villarreal-bustamante-a33891220/" target="_blanck"><Linkedin theme={dark}/></a>
                <a href=""><Youtube theme={dark}/></a>
            </div>
            <div className="flex items-center content-center gap-2 visible dark:hidden">
            <a href="https://github.com/juanpa300478" target="_blanck"><GitIcon theme={light}/></a>
                <a href="https://wa.me/+573248179095?text=hola, necesito contactar contigo" target="_blanck"><WhatsApp theme={light}/></a>
                <a href="https://www.linkedin.com/in/jean-paul-villarreal-bustamante-a33891220/" target="_blanck"><Linkedin theme={light}/></a>
                <a href=""><Youtube theme={light}/></a>
            </div>
        </div>
        
    )
}