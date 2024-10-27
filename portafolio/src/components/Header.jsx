import { DarkMode } from './DarkMode'
import Hamburger from './Hamburguer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
    const [open, setOpen ] = useState(false)
    
    const openClass = open ? 'top-0 left-0 right-0 w-full h-full' 
    : '-left-full  w-full h-full'
    const handleClick = () =>{
        setOpen(!open)
    }
    return (
        <header className="flex justify-between bg-slate-950 p-5">
            <div className="space-x-1 text-white flex w-44 place-items-center">
                <DarkMode />
                <span className='text-xs'>Dark mode</span>
            </div>
            <Hamburger open={open} handleClick={handleClick}/>
            <nav className={`-z-10 bg-gray-600 text-white absolute transition-all 
                duration-75 ${openClass} flex place-items-center place-content-center
                 md:w-max md:relative md:h-auto md:left-1 md:z-10 md:bg-transparent`}>
                <ul className="text-3xl flex flex-col gap-5 md:text-lg md:flex-row">
                    <li className='content-center'><Link className="w-full h-full cursor-pointer rounded-md text-center  hover:bg-neutral-500 md:py-3 md:px-4 py-2 px-14" to='/'>inicio</Link></li>
                    <li className='content-center'><Link className="w-full h-full cursor-pointer rounded-md text-center  hover:bg-neutral-500 md:py-3 md:px-4 py-2 px-14" to='/curriculum'>curriculum</Link></li>
                    <li className="cursor-pointer p-2 rounded-md text-center hover:bg-neutral-500">projectos</li>
                    <li className="cursor-pointer p-2 rounded-md text-center hover:bg-neutral-500">blog</li>
                    <li className="cursor-pointer p-2 rounded-md text-center hover:bg-neutral-500">contactato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header