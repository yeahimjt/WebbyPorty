import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import {AiFillGithub, AiFillLinkedin, AiFillFilePdf} from 'react-icons/ai'
import SkillTease from './SkillTease'
import {FaUserGraduate} from 'react-icons/fa'
import {TbFileCertificate} from 'react-icons/tb'
import {AiOutlineCompass} from 'react-icons/ai'

const Homepage = () => {
  const {theme} = useContext(ThemeContext)

  return (
    
    <header className=" w-screen relative overflow-visible">

  


        <div className="absolute w-full h-[90vh] z-20 ">
          <img className="absolute tablet:-top-8 tablet:left-96   top-24 left-52 animate-cloudMove animate-delay-300 w-[250px] tablet:w-max" src="/c1.png" />
          <img className="absolute tablet:top-24 tablet:left-16   top-32 left-16  animate-move fill-mode-both w-[200px] tablet:w-max" src="/flying.png" />
          <img className="absolute tablet:top-64 top-52  animate-cloudMove2 animate-delay-600 w-[200px] tablet:w-max" src="/c2.png" />
        </div>
      <div className="flex justify-center    ">
        <SkillTease />
    </div>
    <div className={theme === "light" ? "h-[120vh] tablet:h-[90vh] bg-white flex justify-center flex-col items-center gap-6 w-full border-b-4 border-black/20 overflow-visible pb-32 z-20" : "h-[120vh] tablet:h-[90vh] bg-[color:var(--black)] flex justify-center flex-col items-center gap-6 w-full border-b-4 border-black/20 overflow-visible pb-32"}>
        <div className={theme==="light" ? "leading-tight bg-white/90 p-4 rounded-2xl z-40 relative text-[color:var(--black-darkest)] select-none mx-8 homepage-text:mx-0 animate-slideup  overflow-visible mt-64 smallest:mt-64" : "leading-tight relative text-[color:var(--white-lightest)] select-none z-40 mx-8 homepage-text:mx-0 animate-slideup overflow-visible mt-64 smallest:mt-64"}>
            <h4 className="text-xs smallest:text-sm left-12 font-paragraph -top-0 relative smallest:left-0 -rotate-2 animate-slightrotate  overflow-y-hidden z-40">Hi! I'm,</h4>
            <div className="">
                <div className={theme==="light"? "flex flex-row flex-wrap  gap-6 gap-y-0 justify-center bg-test text-transparent z-40 bg-clip-text bg-clip animate-pulse":"flex flex-row flex-wrap gap-6 gap-y-0 justify-center bg-test text-transparent bg-clip-text bg-clip animate-pulse"}>
                    <div className="flex font-heading text-med smallest:text-big gap-1 min-h-[90px] justify-center">
                        <h1 className="text-center overflow-y-hidden    " data-aos=''>Jonathan Andrew Trevino</h1>
                    </div>
                </div>
            </div>
            <p className=" mx-auto text-xs smallest:text-sm text-center  z-40 font-paragraph relative -top-4 smallest:-top-2 homepage-header:-top-6 animate-slideright animation-delay-1000 opacity-0 overflow-y-visible pb-4 leading-relaxed ">I take your ideas to the skies, engineering cutting-edge digital solutions for success.</p>
        </div>
        <div className="flex gap-6 smallest:py-4 px-4 overflow-visible z-40">
            <a href="https://www.github.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] overflow-visible p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-white hover:rounded-2xl animate-slideright animation-delay-2000 opacity-0" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] hover:rounded-2xl animate-slideright animation-delay-2000 opacity-0"}><AiFillGithub size={36}/></a>
            <a href="https://www.linkedin.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] overflow-visible  p-2 rounded-full hover:cursor-pointer hover:scale-105  text-[color:var(--white-lightest)] animate-grow opacity-0 animation-delay-1500 hover:rounded-2xl transition-all" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] animate-grow opacity-0 animation-delay-1500 hover:rounded-2xl"}><AiFillLinkedin size={36}/></a>
            <a href="https://www.resume.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] overflow-visible  p-2 rounded-full hover:cursor-pointer hover:scale-105  text-[color:var(--white-lightest)] animate-slideleft animation-delay-2000 opacity-0 hover:rounded-2xl transition-all" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] hover:rounded-2xl animate-slideleft animation-delay-2000 opacity-0"}><AiFillFilePdf size={36}/></a>
        </div>
        <div className={theme==="light"?"flex  flex-col tablet:flex-row gap-6 tablet:flex-wrap relative top-0 py-8 animate-grow animation-delay-2000 opacity-0 justify-center text-black w-full  overflow-visible":"flex flex-col tablet:flex-row gap-6 flex-wrap relative top-0 py-8 animate-grow animation-delay-2000 opacity-0 text-white w-full justify-center"}>
          <div className={theme==="light"?"text-center  shadow-lg w-[70%] bg-white/10 backdrop-blur-xl mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl overflow-visible tablet:h-[250px] flex justify-center flex-col items-center": "text-center  shadow-lg w-[70%] bg-black/10 backdrop-blur-xl mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl overflow-visible tablet:h-[250px] flex justify-center flex-col items-center"}>
            <div className="flex justify-center">
              <FaUserGraduate className="icon" size={70}/>
            </div>
            <h1 className='text-xs smallest:text-sm mt-2 overflow-visible'>Bachelor of <b className="text-blue-500">Computer Science</b></h1>
            <p className='text-xs'>University of Texas at San Antonio</p>
          </div>
          <div className={theme==="light"?"text-center  shadow-lg w-[70%] bg-white/10 backdrop-blur-xl mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl overflow-visible tablet:h-[250px] flex justify-center flex-col items-center": "text-center  shadow-lg w-[70%] bg-black/10 backdrop-blur-xl mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl overflow-visible tablet:h-[250px] flex justify-center flex-col items-center"}>
            <div className="flex justify-center">
              <TbFileCertificate className="icon" size={70}/>
            </div>
            <h1 className='text-xs smallest:text-sm mt-2 overflow-visible'>Front End Developer Certified</h1>
            <p className='text-xs'>from <b className="text-blue-500">Meta</b> provided by Coursera</p>
          </div>
          <div className={theme==="light"?"text-center  shadow-lg w-[70%] bg-white/10 backdrop-blur-xl mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl overflow-visible tablet:h-[250px] flex justify-center flex-col items-center": "text-center  shadow-lg w-[70%] bg-black/10 backdrop-blur-xl mx-auto tablet:m-0   tablet:w-[350px] p-8 rounded-3xl overflow-visible tablet:h-[250px] flex justify-center flex-col items-center"}>
            <div className="flex justify-center">
              <AiOutlineCompass className="icon" size={70}/>
            </div>
            <h1 className='text-xs smallest:text-sm mt-2 overflow-visible'>2+ years experience</h1>
            <p className='text-xs text-blue-500'>as a Full Stack Developer</p>
          </div>
        </div>
    </div>
    </header>


  )
}

export default Homepage