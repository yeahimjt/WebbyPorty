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
    gsap.fromTo([project1], 
      {
        duration: 1,
        autoAlpha: 0,
        x: -140,
        ease: 'power3.inOut',
        stagger: 1,
      },
      {
        duration: 1,

        x: 0,
        autoAlpha: 1,
        scale:1,
        scrollTrigger: {
          trigger: project1,
          end: "-=200",
          start: "-=350",
          // markers:true
        },

        ease: 'power3.inOut'
      }
    )
    gsap.fromTo([project2], 
      {
        duration: 1,
        autoAlpha: 0,
        x: 140,
        ease: 'power3.inOut',
        stagger: 1,
      },
      {
        duration: 1,

        x: 0,
        autoAlpha: 1,
        scale:1,
        scrollTrigger: {
          trigger: project2,
          end: "-=200",
          start: "-=350",
          // markers:true
        },

        ease: 'power3.inOut'
      }
    )
    gsap.fromTo([project3], 
      {
        duration: 1,
        autoAlpha: 0,
        x: -140,
        ease: 'power3.inOut',
        stagger: 1,
      },
      {
        duration: 1,

        x: 0,
        autoAlpha: 1,
        scale:1,
        scrollTrigger: {
          trigger: project3,
          end: "-=200",
          start: "-=350",
          // markers:true
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
    <div className={theme==="light"?"relative tablet:pt-48 py-12 px-12 flex flex-col justify-end items-end":"bg-[color:var(--black)] relative tablet:pt-48 py-12 px-12 text-white flex flex-col justify-end items-end"} id="projects">
      <div className="tablet:absolute top-0 tablet:py-32 pt-12 flex flex-col items-end">
            <div className="px-8 py-2 bg-red-50 w-fit rotate-12 p-0">
              <h1 className="font-heading text-med text-black">What I've Done</h1>
            </div>
          <div className="flex tablet:flex-row flex-col gap-12 items-end justify-end text-right">
            <div className="flex flex-col pt-16 flex-[0.45]  gap-4 items-end">
                <h1 className="font-paragraph text-med">Mastering dreams to reality, I seamlessly craft awe-inspiring full-stack applications once deemed unreachable.</h1>
                <p className="font-paragraph text-sm">These projects have cemented expertise with their respective skills.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center tablet:flex-row flex-col items-center">
          <div className="flex flex-col gap-y-5 mt-16 overflow-hidden flex-[0.5]">
            <div ref={el => (project1 = el)} className="rounded-2xl  group flex-[0.5] cursor-pointer opacity-0   overflow-hidden" onMouseMove={e=>moveCircle(e)} onMouseLeave={e=>cleanCircle(e)} onClick={()=> {
                setProjectState({
                  initial:null,
                  clicked:true,
                  redirect: '/central-tech'
                })
              }}>
                <img className="w-full rounded-2xl" src={CentralPreview} alt="Central Tech"/>
                <div className={theme==="light"?"p-4 flex justify-between items-center ":"p-4 flex justify-between items-center  text-white"}>
                  <section>
                    <h1 className="font-heading text-med">Central Tech</h1>
                    <p className={theme==="light"?"font-paragraph italic text-black/50 px-1":"font-paragraph italic text-white/60 px-1"}>Full Stack Ecommerce Website</p>
                  </section>
                  <div className={theme==="light"?"group-hover:-rotate-45 group-hover:bg-[color:var(--black)] group-hover:text-white p-4 rounded-full transition-all":"group-hover:-rotate-45 group-hover:bg-white group-hover:text-black p-4 rounded-full transition-all"}><BsArrowRight size={30} /></div>
                </div>
              </div>
            <div ref={el => (project3 = el)} className=" w-fit group cursor-pointer" onMouseMove={e=>moveCircle(e)} onMouseLeave={e=>cleanCircle(e)} onClick={()=> {
              setProjectState({
                initial:null,
                clicked:true,
                redirect: '/film-review'
              })
            }}>
              <img className="rounded-2xl"src={Macbook} alt="Film Review"/>
              <div className={theme==="light"?"p-4 flex justify-between items-center ":"p-4 flex justify-between items-center  text-white"}>
                <section>
                  <h1 className="font-heading text-med">Film Review</h1>
                  <p className={theme==="light"?"font-paragraph italic text-black/50 px-1":"font-paragraph italic text-white/60 px-1"}>Full Stack Movie Browsing Website</p>
                </section>
              <div className={theme==="light"?"group-hover:-rotate-45 group-hover:bg-[color:var(--black)] group-hover:text-white p-4 rounded-full transition-all":"group-hover:-rotate-45 group-hover:bg-white group-hover:text-black p-4 rounded-full transition-all"}><BsArrowRight size={30} /></div>
            </div>
            </div>
          </div>
          {/* </Link> */}
          <div className="overflow-hidden flex-[0.5]">
          <div ref={el => (project2 = el)} className="rounded-2xl w-fit group flex-[0.5] cursor-pointer opacity-0   overflow-hidden" onMouseMove={e=>moveCircle(e)} onMouseLeave={e=>cleanCircle(e)} onClick={()=> {
              setProjectState({
                initial:null,
                clicked:true,
                redirect: '/my-llave'
              })
            }}>
              <img className="rounded-2xl"src={MyLlave} alt="My Llave"/>
              <div className={theme==="light"?"p-4 flex justify-between items-center ":"p-4 flex justify-between items-center  text-white"}>
                <section>
                  <h1 className="font-heading text-med">My LLave</h1>
                  <p className={theme==="light"?"font-paragraph italic text-black/50 px-1":"font-paragraph italic text-white/60  px-1"}>Full Stack Realtor Website</p>
                </section>
                <div className={theme==="light"?"group-hover:-rotate-45 group-hover:bg-[color:var(--black)] group-hover:text-white p-4 rounded-full transition-all":"group-hover:-rotate-45 group-hover:bg-white group-hover:text-black p-4 rounded-full transition-all"}><BsArrowRight size={30} /></div>
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