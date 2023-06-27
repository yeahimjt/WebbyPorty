import React, { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../App'
import { useInView } from 'react-intersection-observer';
import { BsArrowRight } from 'react-icons/bs'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutTease = () => {
    const {theme} = useContext(ThemeContext)
    let do1 = useRef()
    let do2 = useRef()
    let do3 = useRef()
    let text1 = useRef()
    let text2 = useRef()
    let text3 = useRef()
    let text4 = useRef()
    let text5 = useRef()
    let text6 = useRef()
    let text7 = useRef()
    let text8 = useRef()
    let text9 = useRef()
    useEffect(()=> {
        // gsap.fromTo([do1,do2,do3], 
        //     {
        //         duration: 1,
        //         width:'200px',
        //         ease: 'power3.inOut',
        //         opacity:0,

        //     },
        //     {
        //         stagger:0.2,
        //         duration: 0.3,
        //         width: '100%',
        //         opacity:1,
        //         scrollTrigger: {
        //             trigger: do1,
        //             start: "-=450",
        //         },
        //         ease: 'power4.inOut'
        //     }
        // )
        // gsap.fromTo([text1,text4,text7], 
        //     {
        //         duration:0,
        //         opacity:0,
        //     },
        //     {
        //         delay:2,
        //     stagger:0.3,
        //         css: {
        //             opacity: 1
        //         }
        //     }
        // )
        gsap.fromTo([do1,do2,do3], 
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
    <div className={theme==="light"?"relative py-64 px-12":"bg-[color:var(--black)] relative py-64 px-12 text-white"}>
        <div className="px-8 py-2 bg-red-50 w-fit -rotate-12 relative">
            <h1 className="font-heading text-med text-black">What I Do</h1>
        </div>
        <div className="flex tablet:flex-row flex-col gap-12">
            <div className="flex flex-col pt-16 flex-[0.5] gap-4">
                <h1 className="font-paragraph text-med">Transform abstract ideas into tangible solutions that shape the future of technology.</h1>
                <p className="font-paragraph text-sm">I enjoy developing meaningful experiences for brands & businesses to help them serve their target users.</p>
                <a className="font-paragraph text-sm bg-[color:var(--p-high)] px-6 py-4 flex items-center gap-2 hover:gap-4 hover:cursor-pointer transition-all w-fit rounded-2xl group" href='#profile'>About Me <BsArrowRight size={30} className="group-hover:border-2 rounded-full p-1 transition-all"></BsArrowRight></a>
            </div>
            <div className="flex flex-col pt-16 flex-[0.5] gap-4">
                <Accordion className="flex flex-col gap-4 overflow-hidden" allowMultipleExpanded={true} allowZeroExpanded>
                    <AccordionItem className="select-none overflow-hidden">
                        <AccordionItemHeading>
                            <AccordionItemButton className='overflow-hidden'>
                                <AccordionItemState>
                                    {({ expanded }) => (expanded ?  
                                        <div className="bg-[color:var(--p-pink)] flex justify-around items-center py-4 font-heading rounded-3xl rounded-b-none transition-all  hover:bg-[color:var(--p-blue)] h-[77px] overflow-hidden">
                                            <p className="text-med text-black">// 01</p>
                                            <p className="text-sm text-black">Full Stack Developer</p>
                                            <BiMinus size={40} className="border-2 border-black p-1 text-black"></BiMinus>
                                        </div>
                                    : 
                                        <div ref={el => (do1 = el)} className="bg-[color:var(--p-pink)] flex justify-around items-center py-4 font-heading rounded-3xl transition-all hover:bg-[color:var(--p-blue)] h-[77px] overflow-hidden">
                                            <p ref={(el=> (text1 = el))} className="text-med text-black ">// 01</p>
                                            <p ref={(el=> (text2 = el))} className="text-sm text-black">Full Stack Developer</p>
                                            <BiPlus ref={(el=> (text3 = el))}  size={40} className="border-2 border-black p-1 text-black"></BiPlus>

                                        </div>
                                    )}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="bg-[color:var(--p-pink)] border-t-2 border-black/5 rounded-b-3xl">
                            <p className="text-black px-16 pt-12 pb-8">As a passionate Full Stack Developer, I have crafted end-to-end web applications that are both scalable and maintainable. This encompasses everything from designing robust database schemas to implementing intuitive frontend user interfaces.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="select-none">
                        <AccordionItemHeading>
                            <AccordionItemButton className='overflow-hidden'>
                                <AccordionItemState>
                                    {({ expanded }) => (expanded ?  
                                        <div className="bg-[color:var(--p-yellow)] flex justify-around items-center py-4 font-heading rounded-3xl rounded-b-none transition-all hover:bg-[color:var(--p-blue)] h-[77px] overflow-hidden">
                                            <p className="text-med text-black">// 02</p>
                                            <p className="text-sm text-black">Front End Developer</p>
                                            <BiMinus size={40} className="border-2 border-black p-1 text-black"></BiMinus>
                                        </div>
                                    : 
                                        <div ref={el => (do2 = el)} className="bg-[color:var(--p-yellow)] flex justify-around items-center py-4 font-heading rounded-3xl transition-all hover:bg-[color:var(--p-blue)] h-[77px] overflow-hidden">
                                            <p ref={(el=> (text4 = el))} className="text-med text-black">// 02</p>
                                            <p ref={(el=> (text5 = el))} className="text-sm text-black">Front End Developer</p>
                                            <BiPlus  size={40} className="border-2 border-black p-1 text-black"></BiPlus>

                                        </div>
                                    )}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="bg-[color:var(--p-yellow)] border-t-2 border-black/5 rounded-b-3xl">
                            <p className="text-black px-16 pt-12 pb-8">Experienced with creating beautiful and intuitive user interfaces using a wide range of modern frontend technologies that deliver a memorable user experience across all devices.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="select-none">
                        <AccordionItemHeading>
                            <AccordionItemButton className='overflow-hidden'>
                                <AccordionItemState>
                                    {({ expanded }) => (expanded ?  
                                        <div className="bg-[color:var(--p-green)] flex justify-around items-center py-4 font-heading rounded-3xl rounded-b-none transition-all hover:bg-[color:var(--p-blue)] h-[77px] overflow-hidden">
                                            <p  className="text-med text-black">// 03</p>
                                            <p  className="text-sm text-black">Freelance Consultant</p>
                                            <BiMinus  size={40} className="border-2 border-black p-1 text-black"></BiMinus>
                                        </div>
                                    : 
                                        <div ref={el => (do3 = el)} className="bg-[color:var(--p-green)] flex justify-around items-center py-4 font-heading rounded-3xl transition-all hover:bg-[color:var(--p-blue)] h-[77px] overflow-hidden">
                                            <p ref={(el=> (text7 = el))} className="text-med text-black">// 03</p>
                                            <p ref={(el=> (text8 = el))} className="text-sm text-black">Freelance Consultant</p>
                                            <BiPlus  size={40} className="border-2 border-black p-1 text-black"></BiPlus>
                                        </div>
                                    )}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="bg-[color:var(--p-green)] border-t-2 border-black/5 rounded-b-3xl">
                            <p className="text-black px-16 pt-12 pb-8">With my keen attention to detail, I transform intricate design concepts into flawless, high-quality user interfaces using HTML, CSS, and JavaScript, driving business success.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    </div>
  )
}

export default AboutTease