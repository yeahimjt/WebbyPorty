import React, { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../App'
import { BsArrowRight } from 'react-icons/bs'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import { SiAmazonaws, SiBootstrap, SiC, SiCss3, SiExpress, SiFigma, SiFlask, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPython, SiReact, SiRedux, SiRender, SiTailwindcss } from 'react-icons/si';
import { DiJava, DiPhp } from 'react-icons/di';
import {BiPlus, BiMinus} from 'react-icons/bi'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const {theme} = useContext(ThemeContext)
    let do1 = useRef()
    let do2 = useRef()
    let do3 = useRef()
    let do4 = useRef()
    useEffect(()=> {
        gsap.fromTo([do1,do2,do3,do4], 
            {
                translateY: '440px',
            },    
            {
                stagger:0.2,
                duration:0.7,
                translateY: '0px',
                scrollTrigger: {
                    trigger: do1,
                }
            }
        )
    },[])
  return (
<div className={theme==="light"?"relative py-16 px-12 h-full flex flex-col ":"bg-[color:var(--black)] relative py-16 px-12 text-white h-full"}>
        <div className="px-2 py-16">
            <h1 className="font-heading rotate-12 px-8 py-2 float-right bg-red-50 w-fit text-med text-black">What I Use</h1>
        </div>
        <div className="flex tablet:flex-row flex-col-reverse gap-12">
            <div className="flex flex-col  flex-[0.5] gap-4">
            <Accordion className="flex flex-col gap-4" allowMultipleExpanded allowZeroExpanded>
                    <AccordionItem className="select-none">
                        <AccordionItemHeading>
                            <AccordionItemButton className='overflow-hidden'>
                                <AccordionItemState>
                                    {({ expanded }) => (expanded ?  
                                        <div  className="bg-[color:var(--p-pink)] flex justify-around items-center py-4 font-heading rounded-3xl rounded-b-none transition-all hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 04</p>
                                            <p className="text-sm text-black">Front End Skills</p>
                                            <BiMinus size={40} className="border-2 border-black p-1 text-black"></BiMinus>
                                        </div>
                                    : 
                                        <div ref={(el) => (do1 = el)} className="bg-[color:var(--p-pink)] flex justify-around items-center py-4 font-heading rounded-3xl transition-all hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 04</p>
                                            <p className="text-sm text-black">Front End Skills</p>
                                            <BiPlus size={40} className="border-2 border-black p-1 text-black"></BiPlus>
                                        </div>
                                    )}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="bg-[color:var(--p-pink)] border-t-2 border-black/5 rounded-b-3xl">
                        <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap py-12">
                            <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                                <SiReact className="text-[color:var(--cyan)]" size={30}/>
                                <p className="text-sm">React</p>
                            </div>
                            <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                                <SiRedux className="text-[color:#7347B8]" size={30}/>
                                <p className="text-sm">Redux</p>
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
                    <AccordionItem className="select-none">
                        <AccordionItemHeading>
                            <AccordionItemButton className='overflow-hidden'>
                                <AccordionItemState>
                                    {({ expanded }) => (expanded ?  
                                        <div  className="bg-[color:var(--p-yellow)] flex justify-around items-center py-4 font-heading rounded-3xl rounded-b-none transition-all  hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 05</p>
                                            <p className="text-sm text-black">Back End Skills</p>
                                            <BiMinus size={40} className="border-2 border-black p-1 text-black"></BiMinus>
                                        </div>
                                    : 
                                        <div ref={(el) => (do2 = el)} className="bg-[color:var(--p-yellow)] flex justify-around items-center py-4 font-heading rounded-3xl transition-all  hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 05</p>
                                            <p className="text-sm text-black">Back End Skills</p>
                                            <BiPlus size={40} className="border-2 border-black p-1 text-black"></BiPlus>
                                        </div>
                                    )}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="bg-[color:var(--p-yellow)] border-t-2 border-black/5 rounded-b-3xl">
                        <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap py-12">
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
                    <AccordionItem className="select-none">
                        <AccordionItemHeading>
                            <AccordionItemButton className='overflow-hidden'>
                                <AccordionItemState>
                                    {({ expanded }) => (expanded ?  
                                        <div className="bg-[color:var(--p-green)] flex justify-around items-center py-4 font-heading rounded-3xl rounded-b-none transition-all  hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 06</p>
                                            <p className="text-sm text-black">Programming Languages</p>
                                            <BiMinus size={40} className="border-2 border-black p-1 text-black"></BiMinus>
                                        </div>
                                    : 
                                        <div ref={(el) => (do3 = el)} className="bg-[color:var(--p-green)] flex justify-around items-center py-4 font-heading rounded-3xl transition-all  hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 06</p>
                                            <p className="text-sm text-black">Programming Languages</p>
                                            <BiPlus size={40} className="border-2 border-black p-1 text-black"></BiPlus>
                                        </div>
                                    )}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="bg-[color:var(--p-green)] border-t-2 border-black/5 rounded-b-3xl">
                            <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap py-12">
                                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                                    <SiPython className="text-[color:#F6C73A]" size={30}/>
                                    <p className="text-sm">Python</p>
                                </div>
                                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                                    <DiJava className="text-white" size={30}/>
                                    <p className="text-sm">Java</p>
                                </div>
                                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                                    <p className="text-sm">C</p>
                                </div>
                                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2"} `}>
                                    <DiPhp className="text-white" size={30}/>
                                    <p className="text-sm">PHP</p>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="select-none">
                        <AccordionItemHeading>
                            <AccordionItemButton className='overflow-hidden'>
                                <AccordionItemState>
                                    {({ expanded }) => (expanded ?  
                                        <div className="bg-[color:var(--p-orange)] flex justify-around items-center py-4 font-heading rounded-3xl rounded-b-none transition-all hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 07</p>
                                            <p className="text-sm text-black">Other</p>
                                            <BiMinus size={40} className="border-2 border-black p-1 text-black"></BiMinus>
                                        </div>
                                    : 
                                        <div ref={(el) => (do4 = el)} className="bg-[color:var(--p-orange)] flex justify-around items-center py-4 font-heading rounded-3xl transition-all hover:bg-[color:var(--p-blue)]">
                                            <p className="text-med text-black">// 07</p>
                                            <p className="text-sm text-black">Other</p>
                                            <BiPlus size={40} className="border-2 border-black p-1 text-black"></BiPlus>
                                        </div>
                                    )}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="bg-[color:var(--p-orange)] border-t-2 border-black/5 rounded-b-3xl">
                            <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap py-12">
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

            </div>
            <div className="flex flex-col  flex-[0.5] gap-4 text-right">
                <h1 className="font-paragraph text-med">Fueling Progress with passion, adaptability, and unparalleled technical prowess.</h1>
                <p className="font-paragraph text-sm">An assortment of my most relevant skills.</p>
            </div>
        </div>
    </div>
  )
}

export default Skills