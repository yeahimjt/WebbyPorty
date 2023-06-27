import React, { useContext } from 'react'
import { ProjectAnimationContext, ThemeContext } from '../App'
import { BsArrowRight } from 'react-icons/bs'
import ProjectSwipe from './ProjectSwipe'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  const {projectState, setProjectState} = useContext(ProjectAnimationContext)

  return (
    <>
    <ProjectSwipe projectState={projectState} setProjectState={setProjectState} />
    <footer className={theme==="light"?"bg-[color:var(--skill-tease)] relative flex pt-32 pb-32 flex-col items-center  gap-2 ":"bg-[color:var(--skill-tease-dark)] gap-2 relative  pt-32 pb-32 text-white flex flex-col items-center"}>
        <h1 className="font-heading text-med text-center  ">Have an idea?</h1>
        <button className="font-paragraph text-sm text-center bg-[color:var(--p-high)] px-8 py-2 flex items-center gap-2 hover:gap-4 hover:cursor-pointer transition-all w-fit rounded-2xl group" onClick={()=> {
              setProjectState({
                initial:null,
                clicked:true,
                redirect: '/contact'
              })}}>
          Contact Me <BsArrowRight size={30} className="group-hover:border-2 rounded-full p-1 transition-all"></BsArrowRight></button>
        <a className="text-right absolute right-8 bottom-4" href="mailto: yeahimjt@gmail.com">or reach me at <i>yeahimjt@gmail.com</i></a>
    </footer>
    </>
  )
}

export default Footer