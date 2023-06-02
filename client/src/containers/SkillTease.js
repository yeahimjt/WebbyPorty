import React, { useContext } from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {DiMysql, DiReact} from 'react-icons/di'
import { ThemeContext } from '../App'
const SkillTease = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme==="light"? "max-w-[1158px]  flex justify-center w-[70%] smallest:w-full  bg-[color:var(--skill-tease)]  absolute mb-8 -bottom-16 tablet:-bottom-20 py-8 items-center flex-wrap z-30 gap-8 gap-y-2 animate-grow opacity-0 animation-delay-3000 shadow-2xl  " : "max-w-[1158px] flex justify-center bg-[color:var(--skill-tease-dark)] w-[70%] smallest:w-full absolute mb-8 -bottom-16 tablet:-bottom-20 py-8 items-center animate-grow flex-wrap z-30 gap-8 gap-y-2 shadow-2xl"}>
        <DiReact className="text-[color:var(--light-blue)] icon text-big" />
        <SiTailwindcss className="text-[color:var(--light-blue)] icon text-big" />
        <DiMysql className="text-[color:var(--light-blue)] icon text-big" />
        <AiFillHtml5 className="text-[color:var(--light-blue)] icon text-big" />
        <FaNodeJs className="text-[color:var(--light-blue)] icon text-big" />
    </div>
  )
}

export default SkillTease