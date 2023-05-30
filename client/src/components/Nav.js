import React, { useContext } from 'react'
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs'
import { ThemeContext } from '../App'
const Nav = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <nav className={theme==="light"?" shadow-2xl rounded-full fixed font-paragraph text-sm top-0 m-2 mobile:m-4 bg-[color:var(--black-lightest)] text-white border-2 right-0 flex gap-6 px-8 py-3 items-center justify-center mobile:w-[400px] select-none z-50 animate-slidedown animation-delay-2000 opacity-0":"rounded-full fixed font-paragraph text-sm top-0 right-0 m-2  mobile:m-4 bg-[color:var(--white-lightest)] text-black border-2 flex gap-6 px-8 py-3 items-center justify-center mobile:w-[400px] select-none z-50 animate-slidedown animation-delay-2000 opacity-0"}>
        {theme === "light" &&
            <BsFillMoonStarsFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all" size={20} onClick={()=>toggleTheme()}/>
        }
        {theme === "dark" &&
            <BsSunFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all text-yellow-300" size={28} onClick={()=>toggleTheme()}/>
        }
        <a  className="hover:scale-105 hover:text-[color:var(--blue)] hidden mobile:block" href="#projects">Projects</a>
        <a  className="hover:scale-105 hover:text-[color:var(--blue)] hidden mobile:block" href="#profile">Profile</a>
        <a  className="hover:scale-105 hover:text-[color:var(--blue)] hidden mobile:block" href="#contact">Contact</a>
    </nav>
  )
}

export default Nav