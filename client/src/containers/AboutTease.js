import React, { useContext } from 'react'
import SkillTease from './SkillTease'
import { ThemeContext } from '../App'
import { useInView } from 'react-intersection-observer';

const AboutTease = () => {
    const {theme} = useContext(ThemeContext)
    const { ref: myRef, inView: myElementIsVisible } = useInView({
        triggerOnce: true,
    });

  return (

    <div  className={theme==="light"? "bg-[color:var(--about-tease)]" : "bg-[color:var(--about-tease-dark)]"}>
        <h1 ref={myRef} className={theme==="light"? "text-sm title:text-med font-heading text-center w-[90%] mx-auto mt-48" : "text-sm title:text-med font-heading text-center w-[90%] mx-auto mt-48 text-white"}>I merge <i className="text-[color:var(--light-blue)]">exceptional design & engineering</i> to create <i className="text-[color:var(--light-blue)]">compelling digital experiences for business success</i>.</h1>
        <div className="flex gap-12 justify-center mx-16 flex-wrap py-16">
            <div className={`${theme==="light"? "flex flex-col max-w-[410px] leading-loose hover:shadow-2xl  transition-all relative hover:-top-2  bg-[color:var(--about-card)] py-6 px-4  text-black opacity-0" : "flex flex-col max-w-[410px] leading-loose bg-[color:var(--about-card-dark)] py-6 px-4 hover:shadow-2xl  transition-all relative hover:-top-2 text-white opacity-0 "} ${myElementIsVisible ? 'animate-grow' : ''}`}>
                <img src="/freelance.svg" alt="freelance"/>
                <h1 className="font-heading text-sm mt-2">Freelance Consultant</h1>
                <p className="font-paragraph">With my keen attention to detail, I transform intricate design concepts into flawless, high-quality user interfaces using HTML, CSS, and JavaScript, driving business success.</p>
            </div>
            <div className={`${theme==="light"? "flex flex-col max-w-[410px] leading-loose bg-[color:var(--about-card)] py-6 px-4 hover:shadow-2xl  relative hover:-top-2 transition-all pt-20 text-black opacity-0" : "flex flex-col max-w-[410px] leading-loose bg-[color:var(--about-card-dark)] py-6 px-4 hover:shadow-2xl  transition-all relative hover:-top-2 pt-20 text-white opacity-0"} ${myElementIsVisible ? 'animate-grow animation-delay-150' : ''}`}>
                <img src="/frontend.svg" alt="freelance"/>
                <h1 className="font-heading text-sm mt-2">Front End Developer</h1>
                <p className="font-paragraph">Experienced with creating beautiful and intuitive user interfaces using a wide range of modern frontend technologies that deliver a memorable user experience across all devices.</p>
            </div>
            <div className={`${theme==="light"? "flex flex-col max-w-[410px] leading-loose bg-[color:var(--about-card)] py-6 px-4 hover:shadow-2xl   relative hover:-top-2 transition-all text-black opacity-0" : "flex flex-col max-w-[410px] leading-loose bg-[color:var(--about-card-dark)] py-6 px-4 hover:shadow-2xl  transition-all relative hover:-top-2 text-white opacity-0"} ${myElementIsVisible ? 'animate-grow animation-delay-300' : ''}`}>
                <img src="/fullstack.svg" alt="freelance"/>
                <h1 className="font-heading text-sm mt-2">Full Stack Developer</h1>
                <p className="font-paragraph">As a passionate Full Stack Developer, I have crafted end-to-end web applications that are both scalable and maintainable. This encompasses everything from designing robust database schemas to implementing intuitive frontend user interfaces.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutTease