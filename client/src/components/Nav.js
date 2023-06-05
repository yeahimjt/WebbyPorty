import React, { useContext, useState, useRef, useEffect } from 'react'
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs'
import { ThemeContext } from '../App'
import {CgMenuRight} from 'react-icons/cg'
import {AiOutlineClose} from 'react-icons/ai'
import gsap from 'gsap'
import NavMenu from './NavMenu'

const Nav = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  })
  const [disabled,setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
        setState({
            initial:null,
            clicked:true,
            menuName: "Close"
        })
    }
    else if (state.clicked === true) {
        setState({
            clicked: !state.clicked,
            menuName: "Menu"
        })
    }
    else if (state.clicked === false) {
        setState({
            clicked: !state.clicked,
            menuName: "Close"
        })
    }
  }
  const disableMenu = () => {
    setDisabled(true);
    setTimeout(()=> {
        setDisabled(false)
    },1200)
  }

  
  


  return (
    <>
      
      <nav className={theme==="light"?" shadow-2xl rounded-full fixed font-paragraph text-sm top-2 m-2 mobile:m-4 bg-[color:var(--black-lightest)] text-white border-2 right-2 flex gap-6 px-8 py-3 items-center justify-center mobile:w-[150px] select-none z-50 animate-slidedown animation-delay-2000 opacity-0":"rounded-full fixed font-paragraph text-sm top-2 right-2 m-2  mobile:m-4 bg-[color:var(--white-lightest)] text-black border-2 flex gap-6 px-8 py-3 items-center justify-center mobile:w-[150px] select-none z-50 animate-slidedown animation-delay-2000 opacity-0"}>
          {theme === "light" &&
              <BsFillMoonStarsFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all" size={20} onClick={()=>toggleTheme()}/>
          }
          {theme === "dark" &&
              <BsSunFill className="hover:scale-105 hover:rotate-12 hover:cursor-pointer transition-all text-yellow-300 " size={28} onClick={()=>toggleTheme()}/>
          }
          <button className=" hover:cursor-pointer hover:scale-105" onClick={()=>handleMenu()}><CgMenuRight size={30}/></button>
      </nav>
      <NavMenu state={state} setState={setState} disabled={disabled} />
        
      
    </>
  )
}

export default Nav