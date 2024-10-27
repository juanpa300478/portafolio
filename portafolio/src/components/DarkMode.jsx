import {useEffect, useState } from "react"
export const DarkMode = () => {
    const [theme, setTheme] = useState(false)
    const handleTheme = () => {
        setTheme(!theme)
        localStorage.theme = theme 
    }
    useEffect(()=>{
        if(localStorage.theme === 'true'){
            document.querySelector('html').classList.add('dark')
        }else{
            document.querySelector('html').classList.remove('dark')
        }
    },[theme])
    const styleCircle = localStorage.theme === 'true'? 'ml-auto border-white' : 'bg-white'
    
    return(
        <div onClick={handleTheme} className={`w-12 h-6 px-1 border rounded-full border-white flex items-center cursor-pointer`}>
            <div className={`w-4 h-4 rounded-full border transition-all duration-100 ${styleCircle}`}></div>
        </div>
    )
}