import React, { useContext, useEffect, useRef } from 'react'
import { ProjectAnimationContext, ThemeContext } from '../App'
import CentralPreview from '../assets/centralpreview.png'
import MyLlave from '../assets/myllavepreview.png'
import Macbook from '../assets/Macbook.png'
import { gsap } from 'gsap'
import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles


import { BsArrowRight } from 'react-icons/bs'
import ProjectSwipe from '../components/ProjectSwipe'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ..
AOS.init();
gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
  const {theme} = useContext(ThemeContext)
  let projectHover = useRef()
  let projectStart = useRef()
  let project1 = useRef()
  let project2 = useRef()
  let project3 = useRef()
  const {projectState, setProjectState} = useContext(ProjectAnimationContext)


  useEffect(()=> {
    // gsap.to([project1,project2], {
    //   duration: 1.5,
    //   autoAlpha:1,
    //   y: 0,
    //   scale:1,
    //   stagger : {
    //   },
    //   scrollTrigger: {
    //     trigger: projectStart,
    //     end: "-=100"
    //   }

    // })
    gsap.fromTo([project1,project2,project3], 
      {
        duration: 2,
        autoAlpha: 0,
        y: 140,
        ease: 'power3.inOut',
        stagger: 1,
      },
      {
        duration: 2,
        delay: 0.5,
        y: 0,
        autoAlpha: 1,
        scale:1,
        scrollTrigger: {
          trigger: projectStart,
          end: "-=200"
        },

        ease: 'power3.inOut'
      }
    )
  },[])
function moveCircle(e) {
  gsap.to(projectHover, {
    css: {
      opacity: '1',
      left: e.pageX + 12,
      top: e.pageY + 12
    }
  });
}
function cleanCircle(e) {
  gsap.to(projectHover, {
    css: {
      opacity: '0',
      left: e.pageX + 75,
      top: e.pageY + 75
    }
  });
}


  return (
    <>   
    <ProjectSwipe projectState={projectState} setProjectState={setProjectState}/>
    <div className={theme==="light"?"bg-white border-t-4 border-black/20 px-12":"bg-[color:var(--black)]  border-t-4 border-black/20 px-12"} id="projects">
        <h1 ref={el=> (projectStart = el)} className={theme==="light"? "mx-auto  smallest:w-max pt-16 font-heading text-med smallest:text-big leading-snug px-4 text-black text-center" : "mx-auto smallest:w-max pt-16 font-heading text-med smallest:text-big leading-snug px-4 text-white text-center"}>Projects <br/><i className="text-[color:var(--light-blue)] text-sm title:text-med relative -top-6 smallest:-top-12">that have cemented expertise and skills</i><section className="inline-block relative -top-3 smallest:-top-7 left-2">.</section></h1>
        <div className="flex gap-4 justify-center tablet:flex-row flex-col items-center">
          <div className="flex flex-col gap-y-5 mt-16 overflow-hidden">
            <div ref={el => (project1 = el)} className="rounded-2xl w-fit group cursor-pointer max-w-[680px] opacity-0  translate-y-[300px] overflow-hidden" onMouseMove={e=>moveCircle(e)} onMouseLeave={e=>cleanCircle(e)} onClick={()=> {
                setProjectState({
                  initial:null,
                  clicked:true,
                  redirect: '/central-tech'
                })
              }}>
                <img src={CentralPreview} alt="Central Tech"/>
                <div className={theme==="light"?"p-4 flex justify-between items-center bg-gray-200/40":"p-4 flex justify-between items-center bg-black/20 text-white"}>
                  <section>
                    <h1 className="font-heading text-med">Central Tech</h1>
                    <p className={theme==="light"?"font-paragraph italic text-black/50 px-1":"font-paragraph italic text-white/60 px-1"}>Full Stack Ecommerce Website</p>
                  </section>
                  <div className="group-hover:-rotate-45 group-hover:bg-[color:var(--black)] group-hover:text-white p-4 rounded-full transition-all"><BsArrowRight size={30} /></div>
                </div>
              </div>
            <div ref={el => (project3 = el)} className="rounded-2xl w-fit group cursor-pointer max-w-[680px]" onMouseMove={e=>moveCircle(e)} onMouseLeave={e=>cleanCircle(e)} onClick={()=> {
              setProjectState({
                initial:null,
                clicked:true,
                redirect: '/film-review'
              })
            }}>
              <img src={Macbook} alt="Film Review"/>
              <div className={theme==="light"?"p-4 flex justify-between items-center bg-gray-200/40":"p-4 flex justify-between items-center bg-black/20 text-white"}>
                <section>
                  <h1 className="font-heading text-med">Film Review</h1>
                  <p className={theme==="light"?"font-paragraph italic text-black/50 px-1":"font-paragraph italic text-white/60 px-1"}>Full Stack Movie Browsing Website</p>
                </section>
              <div className="group-hover:-rotate-45 group-hover:bg-[color:var(--black)] group-hover:text-white p-4 rounded-full transition-all"><BsArrowRight size={30} /></div>
            </div>
            </div>
          </div>
          {/* </Link> */}
          <div className="overflow-hidden">
          <div ref={el => (project2 = el)} className="rounded-2xl w-fit group cursor-pointer max-w-[680px] opacity-0  translate-y-[300px] overflow-hidden" onMouseMove={e=>moveCircle(e)} onMouseLeave={e=>cleanCircle(e)} onClick={()=> {
              setProjectState({
                initial:null,
                clicked:true,
                redirect: '/my-llave'
              })
            }}>
              <img src={MyLlave} alt="My Llave"/>
              <div className={theme==="light"?"p-4 flex justify-between items-center bg-gray-200/40":"p-4 flex justify-between items-center bg-black/20 text-white"}>
                <section>
                  <h1 className="font-heading text-med">My LLave</h1>
                  <p className={theme==="light"?"font-paragraph italic text-black/50 px-1":"font-paragraph italic text-white/60  px-1"}>Full Stack Realtor Website</p>
                </section>
                <div className="group-hover:-rotate-45 group-hover:bg-[color:var(--black)] group-hover:text-white p-4 rounded-full transition-all"><BsArrowRight size={30} /></div>
              </div>
            </div>
          
          </div>
        </div>
    </div>
    <div ref={el=> (projectHover = el)} className={theme==="light"?"h-[100px] w-[100px] bg-black border-[color:var(--blue)] border-2 text-white z-50 circle absolute rounded-full text-center opacity-0":"h-[100px] w-[100px] bg-white border-[color:var(--blue)] border-2 text-black z-50 circle absolute rounded-full text-center opacity-0"}>
      <h1 className="mt-9">View More</h1>
    </div>
    </>

  )
}

export default Projects