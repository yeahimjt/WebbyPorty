import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import {AiFillGithub, AiFillLinkedin, AiFillFilePdf} from 'react-icons/ai'
import CyanBlur from '../blurs/Cyanblur'
import RedBlur from '../blurs/RedBlur'
import MovingComponent from 'react-moving-text'
import SkillTease from './SkillTease'
import {FaUserGraduate} from 'react-icons/fa'
import {GrCertificate, GrUserExpert} from 'react-icons/gr'

const Homepage = () => {
  const {theme} = useContext(ThemeContext)
  const Letters = [
    "J",
    "o",
    "n",
    "a",
    "t",
    "h",
    "a",
    "n",
  ]
  const MidLetters = [
    "A",
    "n",
    "d",
    "r",
    "e",
    "w"
  ]
  const LastLetters = [
    "T",
    "r",
    "e",
    "v",
    "i",
    "n",
    "o"
  ]
  return (
    <header className=" w-screen z-20 ">

    <div className={theme === "light" ? "h-[120vh] tablet:h-[90vh] bg-white flex justify-center flex-col items-center gap-6 w-full border-b-4 border-black/20" : "h-[120vh] tablet:h-[90vh] bg-[color:var(--black)] flex justify-center flex-col items-center gap-6 w-full border-b-4 border-black/20"}>
        <div className={theme==="light" ? "leading-tight relative text-[color:var(--black-darkest)] select-none mx-8 homepage-text:mx-0 animate-slideup" : "leading-tight relative text-[color:var(--white-lightest)] select-none mx-8 homepage-text:mx-0 animate-slideup"}>
            <h4 className="text-sm  font-paragraph top-3 homepage-hi3:left-32 relative left-0 homepage-hi4:left-20 -rotate-2 animate-slightrotate animate-wave homepage-hi:left-0 homepage-hi2:left-4">Hi! I'm,</h4>
            <div>
                <div className={theme==="light"? "flex flex-row flex-wrap gap-6 gap-y-0 justify-center bg-test text-transparent bg-clip-text bg-clip animate-pulse":"flex flex-row flex-wrap gap-6 gap-y-0 justify-center bg-test text-transparent bg-clip-text bg-clip animate-pulse"}>
                    <div className="flex font-heading text-big gap-1 min-h-[90px] justify-center">
                        <h1 className="text-center overflow-y-hidden" data-aos=''>Jonathan Andrew Trevino</h1>
                    </div>
                </div>
            </div>
            <p className="text-sm text-center font-paragraph relative -top-2 homepage-header:-top-6 animate-slideright animation-delay-1000 opacity-0">I turn your ideas into a reality by crafting captivating and seamless web applications.</p>
        </div>
        <div className="flex gap-6 py-4 px-4">
            <a href="https://www.github.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105  text-[color:var(--white-lightest)] animate-slideright animation-delay-2000 opacity-0 hover:rounded-2xl transition-all" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] hover:rounded-2xl animate-slideright animation-delay-2000 opacity-0"}><AiFillGithub size={36}/></a>
            <a href="https://www.linkedin.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105  text-[color:var(--white-lightest)] animate-grow opacity-0 animation-delay-1500 hover:rounded-2xl transition-all" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] animate-grow opacity-0 animation-delay-1500 hover:rounded-2xl"}><AiFillLinkedin size={36}/></a>
            <a href="https://www.resume.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105  text-[color:var(--white-lightest)] animate-slideleft animation-delay-2000 opacity-0 hover:rounded-2xl transition-all" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] hover:rounded-2xl animate-slideleft animation-delay-2000 opacity-0"}><AiFillFilePdf size={36}/></a>
        </div>
        <div className={theme==="light"?"flex  flex-col tablet:flex-row gap-6 tablet:flex-wrap relative top-0 py-8 animate-grow animation-delay-2000 opacity-0 justify-center text-black w-full":"flex flex-col tablet:flex-row gap-6 flex-wrap relative top-0 py-8 animate-grow animation-delay-2000 opacity-0 text-white w-full justify-center"}>
          <div className="text-center  shadow-lg w-[70%] mx-auto tablet:m-0  tablet:w-[350px] p-8 rounded-3xl  tablet:h-[250px] flex justify-center flex-col items-center ">
            <div className="flex justify-center">
              <FaUserGraduate className="icon" size={70}/>
            </div>
            <h1 className='text-sm mt-2'>Bachelor of <b className="text-blue-500">Computer Science</b></h1>
            <p className='text-xs'>University of Texas at San Antonio</p>
          </div>
          <div className="text-center  shadow-lg w-[70%] mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl  tablet:h-[250px] flex justify-center flex-col items-center">
            <div className="flex justify-center">
              <GrCertificate className="icon" size={70}/>
            </div>
            <h1 className='text-sm mt-2'>Front End Developer Certified</h1>
            <p className='text-xs'>from <b className="text-blue-500">Meta</b> provided by Coursera</p>
          </div>
          <div className="text-center  shadow-lg w-[70%] mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl  tablet:h-[250px] flex justify-center flex-col items-center">
            <div className="flex justify-center">
              <GrUserExpert className="icon" size={70}/>
            </div>
            <h1 className='text-sm mt-2'>2+ years experience</h1>
            <p className='text-xs text-blue-500'>as a Full Stack Developer</p>
          </div>
        </div>
    </div>

      <div className="tablet:flex tablet:justify-center mx-auto z-50">
          <SkillTease/>
      </div>

    </header>
  )
}

export default Homepage