import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={theme==="light"?"bg-[color:var(--skill-tease)] pt-16 pb-8":"bg-[color:var(--skill-tease-dark)] pt-16 pb-8 text-white"}>
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-paragraph text-med">Interested in starting a conversation?</h1>
            <a className="font-heading text-sm bg-[color:var(--black)] px-4 py-2 rounded-full text-white hover:scale-105 transition-all" href="mailto:yeahimjt@gmail.com">Contact me</a>
        </div>
        <p className="text-center mt-8 italic text-xs">I really appreciate the time you've taken to explore my website!</p>
    </footer>
  )
}

export default Footer