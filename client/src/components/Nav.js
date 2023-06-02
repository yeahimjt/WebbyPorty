import React, { useContext, useState } from 'react'
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs'
import { ThemeContext } from '../App'
import {CgMenuRight} from 'react-icons/cg'
import {AiOutlineClose} from 'react-icons/ai'
const Nav = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [menu, setMenu] = useState(null)
  console.log(menu)
  return (
    <>
      
      <nav className={theme==="light"?" shadow-2xl rounded-full fixed font-paragraph text-sm top-2 m-2 mobile:m-4 bg-[color:var(--black-lightest)] text-white border-2 right-2 flex gap-6 px-8 py-3 items-center justify-center mobile:w-[400px] select-none z-50 animate-slidedown animation-delay-2000 opacity-0":"rounded-full fixed font-paragraph text-sm top-2 right-2 m-2  mobile:m-4 bg-[color:var(--white-lightest)] text-black border-2 flex gap-6 px-8 py-3 items-center justify-center mobile:w-[400px] select-none z-50 animate-slidedown animation-delay-2000 opacity-0"}>
          {theme === "light" &&
              <BsFillMoonStarsFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all" size={20} onClick={()=>toggleTheme()}/>
          }
          {theme === "dark" &&
              <BsSunFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all text-yellow-300 " size={28} onClick={()=>toggleTheme()}/>
          }
          <a  className="hover:scale-105 hover:text-[color:var(--blue)] hidden mobile:block" href="#projects">Projects</a>
          <a  className="hover:scale-105 hover:text-[color:var(--blue)] hidden mobile:block" href="#profile">Profile</a>
          <a  className="hover:scale-105 hover:text-[color:var(--blue)] hidden mobile:block" href="#contact">Contact</a>
          <button className="smallest:hidden block hover:cursor-pointer hover:scale-105" onClick={()=>setMenu(!menu)}><CgMenuRight size={30}/></button>
      </nav>
      {
        menu &&
        <nav className={theme==="light"?"text-left text-black fixed top-0 left-0 bg-[color:#F8F8F8] z-50 h-[400px] w-screen smallest:hidden animate-mobileOpen shadow-2xl border-b-2 border-[color:var(--about-tease)]" : "text-left text-white fixed top-0 left-0 bg-[color:var(--about-tease-dark)] z-50 h-[400px] w-screen smallest:hidden animate-mobileOpen shadow-2xl border-b-2 border-[color:var(--about-tease)]"}>
          <AiOutlineClose className={theme==="light"?"absolute right-14 top-8 animate-wiggle animate-infinite  hover:text-[color:var(--main-blue)] hover:cursor-pointer": "absolute right-14 top-8 animate-wiggle animate-infinite text-white hover:text-white hover:cursor-pointer"} size={30} onClick={()=> setMenu(!menu)}/>
          <div className="flex justify-center items-center h-full flex-col text-med gap-8">
            {/* {theme === "light" &&
                // <BsFillMoonStarsFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all" size={20} onClick={()=>toggleTheme()}/>
            }
            {theme === "dark" &&
                // <BsSunFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all text-yellow-300" size={28} onClick={()=>toggleTheme()}/>
            } */}
            <a className={theme==="light"?"text-center animate-fade-right animation-delay-500 hover:scale-105 hover:bg-[color:var(--about-tease)] w-[90vw] rounded-full transition-all": "text-center animate-fade-right animation-delay-500 hover:scale-105 hover:bg-[color:var(--skill-tease-dark)] w-[90vw] rounded-full transition-all"} href="#projects">Projects</a>
            <a className={theme==="light"?"text-center animate-fade-left animation-delay-600 hover:scale-105 hover:bg-[color:var(--about-tease)] w-[90vw] rounded-full transition-all": "text-center animate-fade-right animation-delay-500 hover:scale-105 hover:bg-[color:var(--skill-tease-dark)] w-[90vw] rounded-full transition-all"} href="#profile">Profile</a>
            <a className={theme==="light"?"text-center animate-fade-right animation-delay-700 hover:scale-105 hover:bg-[color:var(--about-tease)] w-[90vw] rounded-full transition-all": "text-center animate-fade-right animation-delay-500 hover:scale-105 hover:bg-[color:var(--skill-tease-dark)] w-[90vw] rounded-full transition-all"} href="#contact">Contact</a>
          </div>
        </nav>
      }
    </>
  )
}

export default Nav