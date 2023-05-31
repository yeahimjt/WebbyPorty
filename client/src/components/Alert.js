import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Alert = ({alert, setAlert}) => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={theme==="light"?"fixed bottom-8 right-2 smallest:right-8 bg-[color:var(--black)] flex gap-4 px-8 py-4 text-white hover:opacity-50 hover:cursor-pointer transition-all animate-swipeLeft" : "fixed bottom-8 right-8 bg-white flex gap-4 px-8 py-4 text-black hover:opacity-50 hover:cursor-pointer transition-all animate-swipeLeft"} onClick={()=> setAlert(null)}>
        <div>{alert[0]}</div>
        <div>
            {/* <AiFillCloseCircle className="absolute right-2 top-2" size={24}/> */}
            <h1 className="font-heading text-xs smallest:text-sm overflow-visible">{alert[1]}</h1>
            <p className="font-paragraph text-xs smallest:text-base overflow-visible">{alert[2]}</p>
        </div>
    </div>
  )
}

export default Alert