import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SiGit, SiGithub, SiHtml5, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si'
import { ProjectAnimationContext, ThemeContext } from '../App'
import { gsap } from 'gsap'
import { CgArrowLeft, CgArrowRight, CgArrowRightR } from 'react-icons/cg'
import Footer from '../components/Footer'
import ProjectSwipe from '../components/ProjectSwipe'

gsap.registerPlugin(ScrollTrigger)
const FilmReview = () => {
  const {theme} = useContext(ThemeContext)
  const [selectedImage, setSelectedImage] = useState(1)
  let projectImage = useRef()
  let line1 = useRef()
  let line2 = useRef()
  let card1 = useRef()
  let card2 = useRef()
  let card3 = useRef()
  let card4 = useRef()
  let card5 = useRef()
  let card6 = useRef()
  const imgSlides = [
    "","fr-1.png","fr-2.png","fr-3.png","fr-4.png","fr-5.png"
  ]
  const {setProjectState} = useContext(ProjectAnimationContext)
  useEffect(()=> {
    window.scrollTo(0, 0)
    staggerText(line1,line2)
    staggerImage(projectImage)
    animateOut(card1,card2,card3,card4,card5,card6)
  },[])
  const staggerText = (node1,node2) => {
    gsap.to([node1,node2], {
        duration: .6,
        opacity:1,
        y: 0,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        ease: 'power3.inOut',
        stagger: {
            amount: 0.3,
        }
    })
  }
  const staggerImage = (node1) => {
    gsap.to(node1, {
        duration: .6,
        delay:0.7,
        opacity:1,
        x:0,
        clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
        ease: 'power3.inOut',
        stagger: {
            amount: 0.3,
        }
    })
  }
  const animateOut = (node1,node2,node3,node4,node5,node6) => {
    gsap.to([node1,node2,node3,node4,node5,node6], {
      duration: .6,
      delay:0.7,
      opacity:1,
      y: 0,
      scale: 1,
      ease: 'power3.inOut',
      stagger: {
          amount: 0.4,
      }
  })
  }
  return (
    <>
        <ProjectSwipe />
        <div className={theme==="light"?"pt-32 px-12 flex tablet:flex-row flex-col items-center gap-y-6 pb-8":"pt-32 px-12 flex tablet:flex-row flex-col items-center gap-y-6 pb-8 bg-[color:var(--black)] text-white"}>
            <div className="tablet:flex-[0.5] justify-center ">
              <div className="overflow-hidden h-fit ">
                  <h1 ref={el => (line1 = el)} className="font-heading text-center text-med clip-began opacity-0 translate-y-8">Film Review</h1>
                  <p ref={el => (line2 = el)} className="font-paragraph text-xs pb-4 leading-loose clip-began opacity-0 translate-y-8 text-center">Discover and explore the world of cinema like never before with our full stack movie/TV browsing application. Immerse yourself in a vast collection of titles, filter and search with ease, and access both detailed information and ratings. With a seamless user experience and integration with IMDB API, embark on a cinematic journey tailored to your preferences.</p>
                </div>
                <div className="flex justify-center  gap-2 gap-y-2 text-white flex-wrap">
                <div ref={el=> (card1 = el)}className={`${theme==="light"? "flex  gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"}`}>
                  <SiReact className="text-[color:var(--cyan)]" size={30}/>
                  <p className="text-sm">React</p>
                </div>
                <div ref={el=> (card2 = el)}className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"}`}>
                  <SiRedux className="text-[color:#7347B8]" size={30}/>
                  <p className="text-sm">Redux</p>
                </div>
                <div ref={el=> (card3 = el)}className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"}`}>
                  <SiHtml5 className="text-[color:#FF5733]" size={30}/>
                  <p className="text-sm">HTML5</p>
                </div>
                <div ref={el=> (card4 = el)}className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"}`}>
                  <SiTailwindcss className="text-[color:#36B4EF]" size={30}/>
                  <p className="text-sm">Tailwindcss</p>
                </div>
                <div ref={el=> (card5 = el)}className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"}`}>
                  <SiGithub className={theme==="light"?"text-white" : "text-black"} size={40}/>
                  <p className="text-sm">Pages</p>
                </div>
                <div ref={el=> (card6 = el)}className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"}`}>
                  <SiGit className="text-[color:#EA4E31]" size={30}/>
                  <p className="text-sm">Git</p>
                </div>
            </div>
            </div>
            <div className="relative py-16  tablet:px-8 tablet:flex-[0.5] justify-center">
              {selectedImage &&
                <img className=" object-scale-down mx-auto clip-began-right opacity-0 translate-x-8 mb-4 select-none" src={`/${imgSlides[selectedImage]}`} ref={el => (projectImage = el)} alt="Film Review Preview"/>
              }
              <CgArrowLeft className="absolute top-[50%] left-0 tablet:left-2 hover:cursor-pointer bg-[color:var(--light-blue)] hover:text-white w-[50px] h-[50px] rounded-full animate-jump-in animation-delay-1200" size={30} onClick={()=> {if (selectedImage !== 1) {setSelectedImage(selectedImage-1)}}}/>
              <CgArrowRight className="absolute top-[50%] right-0 tablet:right-2 hover:cursor-pointer bg-[color:var(--light-blue)] hover:text-white w-[50px] h-[50px] rounded-full animate-jump-in animation-delay-1200" size={30} onClick={()=> {if (selectedImage !== imgSlides.length-1) {setSelectedImage(selectedImage+1)}}}/>
            </div>
        </div>
        <div className={theme==="light"?"tablet:px-12 px-2":"tablet:px-12 px-2 bg-[color:var(--black)] text-white"}>
          <div className="flex tablet:flex-col flex-row justify-center">
            <div className="flex justify-evenly tablet:flex-row flex-col overflow-visible gap-y-4">
                <h2 className="font-heading flex text-sm justify-center flex-[0.5] overflow-visible text-center">Website</h2>
                <h2 className="font-heading flex text-sm justify-center flex-[0.5] overflow-visible text-center">Github</h2>
                <h2 className="font-heading flex text-sm justify-center flex-[0.5] overflow-visible text-center">Project Started</h2>
                <h2 className="font-heading flex text-sm justify-center flex-[0.5] overflow-visible text-center">Project Completed</h2>
            </div>
            <div className="flex pb-2 tablet:flex-row flex-col overflow-visible">
                <a className="font-paragraph flex justify-center flex-[0.5] underline text-blue-500 overflow-visible text-center" href="https://yeahimjt.github.io/movieapp/" target="_blank" rel="noreferrer">https://yeahimjt.github.io/movieapp/</a>
                <a className="font-paragraph flex justify-center flex-[0.5] underline text-blue-500 overflow-visible text-center" href="https://github.com/yeahimjt/movieapp" target="_blank" rel="noreferrer">https://github.com/yeahimjt/movieapp</a>
                <h2 className="font-paragraph flex justify-center flex-[0.5] overflow-visible text-center">March 7th 2023</h2>
                <h2 className="font-paragraph flex justify-center flex-[0.5] overflow-visible text-center">March 14th 2023</h2>
            </div>
            </div>
            <hr className="py-2"/>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Features & Functionality</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <ul className="list-inside list-disc text-sm font-paragraph leading-relaxed tablet:w-[50%] w-[90%]">
                    <li>Modern UI/UX design</li>
                    <li>Browse Film/TV shows</li>
                    <li>Search for Film/TV shows</li>
                    <li>Filteration, Pagination for browsing</li>
                    <li>Similar movies of selected movies category</li>
                    <li>Actors/Directors credited work browsing</li>
                    <li>Youtube Embedded Media Player for Official Movie/TV Shows Trailers</li>
                  </ul>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Challenges & Solutions</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col py-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">First application built utilizing an external API, found myself often referencing documentation for successful data retrieval.</p>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Role & Contributions</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">I developed this full stack application entirely on my own, from the initial concept to the final implementation.</p>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Development Process</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">Pushed functional updates to GitHub through Git as they were completed. Out of the passion I have for projects I work on, I showed my progress to personal friends to explain how the project was coming along; I found that this heavily fortified my knowledge with specific skills as I was able to explain any troubles I was having and how I overcame them.</p>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Results & Impact</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">This project was a simple stepping stone into working with API's. It provided a strong base of knowledge with how data could be efficiently and effictively retrieved externally.</p>
                </div>
            </div>
            <hr/>
            <div className="mt-32">
              <h1 className="font-heading text-big text-center">More of my work!</h1>
              <div className="flex flex-col items-center mt-16 gap-8">
                <div className="flex justify-between items-center w-[80%] max-w-[800px] hover:cursor-pointer group py-8  px-8 border-2 rounded-3xl drop-shadow-md" onClick={()=> {
                    setProjectState({
                      initial:null,
                      clicked:true,
                      redirect: '/my-llave'
                    })
                  }}>
                  <div className="">
                    <h1 className="font-heading text-med">My Llave</h1>
                    <p className="text-sm">Full Stack Realtor Website</p>
                  </div>
                  <div className="overflow-visible">
                    <CgArrowRightR className="group-hover:rotate-45 transition-all" size={30}/>
                  </div>
                </div>
                <div className="flex justify-between items-center w-[80%] max-w-[800px] hover:cursor-pointer group py-8  px-8 border-2 rounded-3xl mb-32 drop-shadow-md" onClick={()=> {
                    setProjectState({
                      initial:null,
                      clicked:true,
                      redirect: '/central-tech'
                    })
                  }}>
                  <div className="">
                    <h1 className="font-heading text-med">Central Tech</h1>
                    <p className="text-sm">Full Stack Ecommerce Website</p>
                  </div>
                  <div className="overflow-visible">
                    <CgArrowRightR className="group-hover:rotate-45 transition-all" size={30}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default FilmReview
