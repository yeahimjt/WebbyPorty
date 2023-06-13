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
          <img className="absolute tablet:-top-8 tablet:left-96   top-24 left-52 animate-cloudMove animate-delay-300 w-[250px] tablet:w-max select-none" src="/c1.png" alt="flying animation"/>
          <img className="absolute tablet:top-24 tablet:left-16   top-32 left-16  animate-move fill-mode-both w-[200px] tablet:w-max select-none" src="/flying.png" alt="flying animation"/>
          <img className="absolute tablet:top-64 top-52  animate-cloudMove2 animate-delay-600 w-[200px] tablet:w-max select-none" src="/c2.png" alt="flying animation"/>
        </div>
      <div className="flex justify-center    ">
        <SkillTease />
    </div>
    <div className={theme === "light" ? "  bg-white flex justify-center flex-col items-center gap-6 w-full border-b-4 border-black/20 overflow-visible pb-64 z-20" : "  bg-[color:var(--black)] flex justify-center flex-col items-center gap-6 w-full border-b-4 border-black/20 overflow-visible pb-64 z-20"} id="">
        <div className={theme==="light" ? "leading-tight p-4 rounded-2xl z-40 relative text-[color:var(--black-darkest)] select-none mx-8 homepage-text:mx-0 animate-slideup   overflow-visible mt-96 smallest:mt-80" : "leading-tight rounded-2xl  relative text-[color:var(--white-lightest)] select-none z-40 mx-8 homepage-text:mx-0 animate-slideup overflow-visible mt-96 smallest:mt-80 p-4"}>
            <h4 className="text-xs smallest:text-sm left-12 font-paragraph -top-0 relative smallest:left-20 -rotate-2 animate-slightrotate  overflow-y-hidden z-40">Hi! I'm,</h4>
            <div className="">
                <div className={theme==="light"? "flex flex-row flex-wrap  gap-6 gap-y-0 justify-center bg-test text-transparent z-40 bg-clip-text bg-clip animate-pulse":"flex flex-row flex-wrap gap-6 gap-y-0 justify-center bg-test text-transparent bg-clip-text bg-clip animate-pulse"}>
                    <div className="flex font-heading text-med smallest:text-big gap-1 min-h-[90px] justify-center">
                        <h1 className="text-center overflow-y-hidden    " data-aos=''>Jonathan Andrew Trevino</h1>
                    </div>
                </div>
            </div>
            <p className=" mx-auto text-xs smallest:text-sm text-center  z-40 font-paragraph relative -top-4 smallest:-top-2 homepage-header:-top-6 animate-slideright animation-delay-1000 opacity-0 overflow-y-visible pb-4 leading-relaxed ">I transform complex ideas into elegant and user-friendly web solutions that leave a lasting impression.</p>
        </div>
        <div className="flex gap-6 smallest:py-2 px-4 overflow-visible z-40">
            <a href="https://www.github.com/yeahimjt" target="_blank" rel="noreferrer" className={theme==="light" ? "bg-[color:var(--black-darkest)] overflow-visible text-white p-2 rounded-full hover:cursor-pointer hover:scale-105  hover:bg-[color:var(--light-blue)] animate-slideright animation-delay-2000 opacity-0 transition-all np" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] hover:bg-[color:var(--light-blue)] animate-slideright animation-delay-2000 opacity-0"} title="Github Profile"><AiFillGithub size={36}/></a>
            <a href="https://www.linkedin.com/in/jonathan-trevino" target="_blank" rel="noreferrer" className={theme==="light" ? "bg-[color:var(--black-darkest)] overflow-visible text-white  p-2 rounded-full hover:cursor-pointer hover:scale-105   animate-grow opacity-0 animation-delay-1500 hover:bg-[color:var(--light-blue)] transition-all np" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] animate-grow opacity-0 animation-delay-1500 hover:bg-[color:var(--light-blue)]"} title="LinkedIn Profile"><AiFillLinkedin size={36}/></a>
            <a href="https://docs.google.com/document/d/1qtmoUpMdiTRYYnHjoC6bTenx3z02yTwe/view?usp=sharing&ouid=103661384321932378403&rtpof=true&sd=true" target="_blank" rel="noreferrer" className={theme==="light" ? "bg-[color:var(--black-darkest)] overflow-visible text-white  p-2 rounded-full hover:cursor-pointer hover:scale-105   animate-slideleft animation-delay-2000 opacity-0 hover:bg-[color:var(--light-blue)] transition-all np" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)] hover:bg-[color:var(--light-blue)] animate-slideleft animation-delay-2000 opacity-0"} title="Resume"><AiFillFilePdf size={36}/></a>
        </div>
        <div className={theme==="light"?"flex  flex-col tablet:flex-row gap-6  relative top-0 py-8 max-w-[400px] flex-wrap animate-grow animation-delay-2000 opacity-0 justify-center text-black w-full  overflow-visible":"flex flex-col tablet:flex-row max-w-[400px] gap-6 flex-wrap relative top-0 py-8 animate-grow animation-delay-2000 opacity-0 text-white w-full justify-center overflow-visible"}>
          <div className={theme==="light"?"text-center   shadow-lg  tablet:absolute left-[450px] animate-cloudMove3  -top-16 bg-gray-200/40 backdrop-blur-xl mx-auto tablet:m-0   w-[250px] p-8 rounded-full overflow-visible h-[250px] flex justify-center flex-col items-center": "text-center animate-cloudMove3 shadow-lg tablet:absolute left-[450px] -top-16  bg-black/10 backdrop-blur-xl mx-auto tablet:m-0 w-[250px] p-8 rounded-full overflow-visible h-[250px] flex justify-center flex-col items-center"}>
            <div className="flex justify-center">
              <FaUserGraduate className="icon" size={70}/>
            </div>
            <h1 className='text-xs smallest:text-sm mt-2 overflow-visible'>Bachelor of <b className="text-blue-500">Computer Science</b></h1>
            <p className='text-xs'>University of Texas at San Antonio</p>
          </div>
        <div className={theme==="light"?"text-center  shadow-lg bg-gray-200/40 backdrop-blur-xl mx-auto tablet:m-0  animate-cloudMove2  w-[250px] p-8 rounded-full overflow-visible h-[250px] flex justify-center flex-col items-center": "text-center  shadow-lg  bg-black/10 backdrop-blur-xl mx-auto tablet:m-0 animate-cloudMove2 w-[250px] p-8 rounded-full overflow-visible h-[250px] flex justify-center flex-col items-center"}>
            <div className="flex justify-center">
              <TbFileCertificate className="icon" size={70}/>
            </div>
            <h1 className='text-xs smallest:text-sm mt-2 overflow-visible'>Front End Developer Certified</h1>
            <p className='text-xs'>from <b className="text-blue-500">Meta</b> provided by Coursera</p>
          </div>
          <div className={theme==="light"?"text-center  shadow-lg bg-gray-200/40 backdrop-blur-xl mx-auto tablet:m-0 tablet:absolute left-[350px] animate-cloudMove top-[250px]   w-[250px] p-8 rounded-full overflow-visible h-[250px] flex justify-center flex-col items-center": "text-center  shadow-lg animate-cloudMove  bg-black/10 backdrop-blur-xl mx-auto tablet:m-0 tablet:absolute top-[250px] left-[350px] w-[250px] p-8 rounded-full overflow-visible h-[250px] flex justify-center flex-col items-center"}>
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