import React, { useContext } from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {DiMysql, DiReact} from 'react-icons/di'
import { ThemeContext } from '../App'
const SkillTease = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme==="light"? "max-w-[1158px]  flex justify-center bg-[color:var(--skill-tease)] w-full absolute -bottom-96 tablet:bottom-8 py-8 items-center flex-wrap z-40 gap-8 gap-y-2 animate-grow opacity-0 animation-delay-3000 shadow-2xl mx-auto" : "max-w-[1158px] flex justify-center bg-[color:var(--skill-tease-dark)] w-full  absolute -bottom-96 tablet:bottom-8 py-8 items-center animate-grow flex-wrap z-40 gap-8 gap-y-2 shadow-2xl"}>
        <DiReact className="text-[color:var(--light-blue)]" size={120}/>
        <SiTailwindcss className="text-[color:var(--light-blue)]" size={120}/>
        <DiMysql className="text-[color:var(--light-blue)]" size={120}/>
        <AiFillHtml5 className="text-[color:var(--light-blue)]" size={120}/>
        <FaNodeJs className="text-[color:var(--light-blue)]" size={120}/>
    </div>
  )
}

export default SkillTease