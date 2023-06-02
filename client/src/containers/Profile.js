import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import Gif from '../assets/ezgif.com-video-to-gif.gif'

import Typewriter from 'typewriter-effect';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { SiAmazonaws, SiBootstrap, SiCss3, SiExpress, SiFigma, SiFlask, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPython, SiReact, SiRedux, SiRender, SiTailwindcss } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

import { Tooltip } from 'react-tooltip'
import { useInView } from 'react-intersection-observer';


const Profile = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView({
    triggerOnce: true
  });
  return (
    <>
    <div  ref={myRef4} className={theme==="light"?"bg-white p-8 tablet:m-0" : "bg-[color:var(--black)] p-8 tablet:m-0"} id="profile">
      <h1   className={theme==="light"? "mx-auto w-max pt-16 font-heading text-med homepage-header:text-big leading-snug px-4 text-black " : "mx-auto w-max pt-16 font-heading text-med homepage-header:text-big leading-snug px-4 text-white"}>Profile <br/><i className="text-[color:var(--light-blue)] text-sm title:text-med relative -top-4 homepage-header:-top-12">a little more about me</i><section className="inline-block relative -top-2 title:-top-1 homepage-header:-top-7 left-2">.</section></h1>
      <div  className={`${theme==="light"?"max-w-[1200px]  flex flex-col gap-4 p-4 bg-white   mx-auto rounded drop-shadow-xl border-x-2 border-b-2 border-t-[1px]":" max-w-[1200px]  flex flex-col gap-4 p-4 bg-[color:var(--about-tease-dark)] text-white   mx-auto rounded drop-shadow-xl border-x-2 border-b-2 border-t-[1px] "} ${myElementIsVisible4 ? 'animate-flip-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animation-delay-300' : ''}`}>
        <div className="flex gap-4 h-full flex-col profile-icon:flex-row">
          <div className="flex justify-center items-center">
            <img className="w-[120px] h-[120px] relative  object-cover rounded-full" src={Gif} alt="memoji"/>
          </div>
          <div className='my-tool select-none'  data-tooltip-id='my-tool' data-tooltip-place='bottom' data-data-tooltip-offset={10} data-tooltip-content="I go by JT too!">
            <h1 className="text-med font-heading ">Jonathan Andrew Trevino</h1>
            <Typewriter
  options={{
    strings: ['Full Stack Developer', 'Freelance Consultant', 'Front End Developer'],
    autoStart: true,
    loop: true,
    pauseFor: 200,
    deleteSpeed: 2,
    changeDelay: 0
  }}
/>
          </div>
        </div>
        <p className="font-heading text-sm">Skills</p>
        <Accordion allowMultipleExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor: theme==="light"? '#DDDDDD' : '#999999', color: theme==="light"? 'black' : 'white'}}>
                        Front End Skills
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                 <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap">
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiReact className="text-[color:var(--cyan)]" size={30}/>
                    <p className="text-sm">React</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiRedux className="text-[color:#7347B8]" size={30}/>
                    <p className="text-sm">Redux</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiPython className="text-[color:#F6C73A]" size={30}/>
                    <p className="text-sm">Python</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiHtml5 className="text-[color:#FF5733]" size={30}/>
                    <p className="text-sm">HTML5</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiTailwindcss className="text-[color:#36B4EF]" size={30}/>
                    <p className="text-sm">Tailwindcss</p>
                  </div>
                    <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiCss3 className="text-[color:#2760E6]" size={30}/>
                    <p className="text-sm">CSS3</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiBootstrap className="text-[color:#7210F6]" size={30}/>
                    <p className="text-sm">Bootstrap</p>
                  </div>
                  </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor: theme==="light"? '#DDDDDD' : '#999999', color: theme==="light"? 'black' : 'white'}}>
                        Back End Skills
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap">
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "} `}>
                    <SiExpress className="text-[color:#9BCD27]" size={30}/>
                    <p className="text-sm">Express</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"}`}>
                    <SiMongodb className="text-[color:#126049]" size={30}/>
                    <p className="text-sm">MongoDb</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "} `}>
                    <SiRender className="text-[color:#5DEBC4]" size={30}/>
                    <p className="text-sm">Render</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                  <SiFlask className={theme==="light"?"text-white": "text-black"} size={30}/>
                    <p className="text-sm">Flask</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiAmazonaws className="text-[color:#FF9900]" size={30}/>
                    <p className="text-sm">EC2</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiAmazonaws className="text-[color:#FF9900]" size={30}/>
                    <p className="text-sm">RDS</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiMysql className={theme==="light"?"text-white":"text-black"} size={30}/>
                    <p className="text-sm">MySQL</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <DiJava className="text-[color:#477899]" size={30}/>
                    <p className="text-sm">Java</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiJavascript className="text-[color:#EED819]" size={30}/>
                    <p className="text-sm">JavaScript</p>
                  </div>
                </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor: theme==="light"? '#DDDDDD' : '#999999', color: theme==="light"? 'black' : 'white'}}>
                        Other Skills
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap">
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiGit className="text-[color:#EA4E31]" size={30}/>
                    <p className="text-sm">Git</p>
                  </div>
                  <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                    <SiFigma className="text-[color:#F86F60]" size={30}/>
                    <p className="text-sm">Figma</p>
                  </div>
                </div>    
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <p className="font-heading text-sm mt-12">About Me</p>
        <p>Having an extensive background in computer science, I possess a broad understanding of various programming languages, enabling me to rapidly adapt to new technologies by leveraging my grasp of fundamental programming principles. Love to take my knowledge a step further and not simply get something to work, but to understand why it works. I take great pride in the work I do.</p>
        <p className="font-heading text-sm mt-12">Experience</p>
        <div className="flex flex-col gap-4 justify-center" >
          <div className={theme==="light"?"flex justify-center gap-6 mobile:gap-32 items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease)] rounded-full select-none my-tool":"flex justify-center gap-6 mobile:gap-32  items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease-dark)] rounded-full select-none my-tool"} data-tooltip-id='my-tool' data-tooltip-place='bottom' data-data-tooltip-offset={10} data-tooltip-content="Designed & Developed a realtor web application end-to-end for Glass Realty, aimed at fostering mutual benefits between consumers and realtors through the utilization of shared data. This platform enables them to generate keys from the data they post, offering opportunities for financial gains and self-promotion on the website. The application was developed using React, HTML, Tailwind, and SQL as key technologies.">
            <p className="text-sm text-center w-[100px]">2023</p>
            <div className="w-[287px]">
              <p className="text-sm text-[color:var(--light-blue)]">Full Stack Developer</p>
              <p className="text-xs italic">at Glass Realty working on myLlave</p>
            </div>
          </div>
          <hr/>
          <div className={theme==="light"?"flex justify-center gap-6 mobile:gap-32 items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease)] rounded-full select-none my-tool":"flex justify-center gap-6 mobile:gap-32  items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease-dark)] rounded-full select-none my-tool"} data-tooltip-id='my-tool' data-tooltip-place='bottom' data-data-tooltip-offset={10} data-tooltip-content="Through this comprehensive course, I have acquired the necessary skills and knowledge to thrive in the dynamic field of front-end web development. The program provided me with hands-on experience and a deep understanding of essential concepts such as HTML, CSS, JavaScript, responsive design, user interface (UI) development, and web accessibility. The curriculum was thoughtfully designed to offer a well-rounded education that combines theoretical foundations with practical application. Led by industry experts, the certificate program ensured that I stayed up-to-date with the latest industry standards and best practices in web development">
            <p className="text-sm text-center w-[100px]">2023</p>
            <div className="w-[287px]">
              <p className="text-sm text-[color:var(--light-blue)]">Full Stack Developer Certificate</p>
              <p className="text-xs italic">provided by Meta through Coursera</p>
            </div>
          </div>
          <hr/>
          <div className={theme==="light"?"flex justify-center gap-6 mobile:gap-32 items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease)] rounded-full select-none my-tool":"flex justify-center gap-6 mobile:gap-32  items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease-dark)] rounded-full select-none my-tool"} data-tooltip-id='my-tool' data-tooltip-place='bottom' data-data-tooltip-offset={10} data-tooltip-content="Through collaborative projects and practical experiences with a wide range of programming languages, I honed my problem-solving and communication skills, preparing me for diverse roles in the technology industry and fostering continuous learning and growth.">
            <p className="text-sm text-center w-[100px]">2019-2022</p>
            <div className="w-[287px]">
              <p className="text-sm text-[color:var(--light-blue)]">University of Texas at San Antonio</p>
              <p className="text-xs italic">completed Bachelor of Computer Science<br/> with minor in Cyber Security</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <Tooltip anchorSelect='.my-tool'  style={{width: '300px', backgroundColor: theme === 'light' ? 'black' : 'white', color: theme==='light' ? 'white' : 'black', overflow: 'visible'}}/>
    </>
  )
}

export default Profile