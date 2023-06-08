import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={theme==="light"?"bg-[color:var(--skill-tease)] pt-16 pb-8 flex flex-col justify-center items-center":"bg-[color:var(--skill-tease-dark)] pt-16 pb-8 text-white flex flex-col justify-center items-center"}>
        <h1 className="font-paragraph text-med">Interested in starting a conversation?</h1>
        <a className={theme==="light"?"font-heading text-sm bg-[color:var(--black)] px-4 py-2 rounded-full text-white hover:scale-105 transition-all":"font-heading text-sm bg-white px-4 py-2 rounded-full text-black hover:scale-105 transition-all"} href="mailto:yeahimjt@gmail.com">Contact me</a>
        <p className="text-center mt-8 italic text-xs">I really appreciate the time you've taken to explore my website!</p>
    </footer>
  )
}

export default Footer