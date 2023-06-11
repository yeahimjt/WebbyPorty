import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SiExpress, SiGit, SiHtml5, SiMongodb, SiNetlify, SiReact, SiRender, SiTailwindcss } from 'react-icons/si'
import { ProjectAnimationContext, ThemeContext } from '../App'
import { gsap } from 'gsap'
import { CgArrowLeft, CgArrowRight, CgArrowRightR } from 'react-icons/cg'
import Footer from '../components/Footer'
import ProjectSwipe from '../components/ProjectSwipe'

gsap.registerPlugin(ScrollTrigger)
const CentralTech = () => {
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
  let card7 = useRef()
  let card8 = useRef()
  
  const imgSlides = [
    "","ct-1.png","ct-2.png","ct-3.png","ct-4.png","ct-5.png","ct-6.png","ct-7.png","ct-8.png","ct-9.png","ct-10.png", "ct-11.png"
  ] 
  console.log('../assets/'+imgSlides[selectedImage])
  const {setProjectState} = useContext(ProjectAnimationContext)
  useEffect(()=> {
    // window.scrollTo(0, 0)
    staggerText(line1,line2)
    staggerImage(projectImage)
    animateOut(card1,card2,card3,card4,card5,card6,card7,card8)
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
    console.log('here')
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
  const animateOut = (node1,node2,node3,node4,node5,node6,node7,node8) => {
    gsap.to([node1,node2,node3,node4,node5,node6,node7,node8], {
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
                  <h1 ref={el => (line1 = el)} className="font-heading text-center text-med clip-began opacity-0 translate-y-8">Central Tech</h1>
                  <p ref={el => (line2 = el)} className="font-paragraph text-xs pb-4 leading-loose clip-began opacity-0 translate-y-8 text-center">Immerse yourself in a seamless online shopping journey with my self-developed full 
                  stack e-commerce web application. It provides a comprehensive array of functionalities, allowing you to effortlessly browse, search, save, purchase, and filter products. I have meticulously implemented all the necessary pages to provide a complete and satisfying e-commerce experience.
                  <br/><i className="text-red-500 italic text-xs text-center">Please allow website to load for 1-3 minutes, it is hosted on netlify and render and takes time to load. Once loaded, the application can be navigated seamlessly.</i>
                  </p>
                </div>
                <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap  ">
                  <div ref={el => (card1 = el)} className={theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "}>
                    <SiReact className="text-[color:var(--cyan)]" size={30}/>
                    <p className="text-sm">React</p>
                  </div>
                  <div ref={el => (card2 = el)} className={`${theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "}`}>
                    <SiHtml5 className="text-[color:#FF5733]" size={30}/>
                    <p className="text-sm">HTML5</p>
                  </div>
                  <div ref={el => (card3 = el)} className={`${theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "}`}>
                    <SiTailwindcss className="text-[color:#36B4EF]" size={30}/>
                    <p className="text-sm">Tailwindcss</p>
                  </div>
                  <div ref={el => (card4 = el)} className={`${theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "}`}>
                    <SiExpress className="text-[color:#9BCD27]" size={30}/>
                    <p className="text-sm">Express</p>
                  </div>
                  <div ref={el => (card5 = el)} className={`${theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "}`}>
                    <SiMongodb className="text-[color:#126049]" size={30}/>
                    <p className="text-sm">MongoDb</p>
                  </div>
                  <div ref={el => (card6 = el)} className={`${theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "}`}>
                    <SiRender className="text-[color:#5DEBC4]" size={30}/>
                    <p className="text-sm">Render</p>
                  </div>
                  <div ref={el => (card7 = el)} className={`${theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " :  "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "}`}>
                    <SiNetlify className="text-[color:#27B4B1]" size={30}/>
                    <p className="text-sm">Netlify</p>
                  </div>
                  <div ref={el => (card8 = el)} className={`${theme==="light"? "flex gap-2 scale-0 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 " : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 "} `}>
                    <SiGit className="text-[color:#EA4E31]" size={30}/>
                    <p className="text-sm">Git</p>
                  </div>
              </div>
            </div>
            <div className="relative py-16  tablet:px-8 tablet:flex-[0.5] justify-center">
              {selectedImage &&
                <img className=" object-scale-down mx-auto clip-began-right opacity-0 translate-x-8 mb-4 select-none" src={`/${imgSlides[selectedImage]}`} ref={el => (projectImage = el)} alt="Central Tech Preview"/>
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
                <a className="font-paragraph flex justify-center flex-[0.5] underline text-blue-500 overflow-visible text-center" href="https://effortless-froyo-17f9a2.netlify.app/" target="_blank" rel="noreferrer">https://effortless-froyo-17f9a2.netlify.app/</a>
                <a className="font-paragraph flex justify-center flex-[0.5] underline text-blue-500 overflow-visible text-center" href="https://github.com/yeahimjt/centraltech-react" target="_blank" rel="noreferrer">https://github.com/yeahimjt/centraltech-react</a>
                <h2 className="font-paragraph flex justify-center flex-[0.5] overflow-visible text-center">April 27th 2023</h2>
                <h2 className="font-paragraph flex justify-center flex-[0.5] overflow-visible text-center">May 8th 2023</h2>
            </div>
            </div>
            <hr className="py-2"/>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Features & Functionality</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <ul className="list-inside list-disc text-sm font-paragraph leading-relaxed tablet:w-[50%] w-[90%]">
                    <li>Modern UI/UX design.</li>
                    <li>Login/Log-out/Delete Account</li>
                    <li>Favorite items, add items to cart, and buy items</li>
                    <li>Search for items, filter by category</li>
                    <li>Shopping Cart - Remove and add items</li>
                    <li>Admin panel with Recharts graphs for financial data</li>
                    <li>Purchase History</li>
                  </ul>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Challenges & Solutions</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col py-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">Being this was the first project I had utilized MongoDB, I found myself often referencing official documentation for tasks that were often quickly executed in SQL without a thought. The material I sought out was usually quickly discovered and the solutions I found quickly began to make sense and was avoided at future times.</p>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Role & Contributions</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">I developed this full stack application entirely on my own, from the initial concept to the final implementation. Throughout the entire process, I handled both the frontend and backend aspects of the application.</p>
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
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">While I never intended this application to be the next innovative e-commerce web site, it did provide me with a necessary amount of self-accomplishment. To have executed a project with no outside input and recieve the result that I finished with, I was extremely proud of myself. What I had built was only the foundation of a e-commerce website and now knowing that I can complete that with my own knowledge, furthering development on the project (or any e-commerce website) I know I can implement more complicated functionality with the technology stack that I was unfamiliar with at the start of this project.</p>
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
                <div className="flex justify-between items-center w-[80%] max-w-[800px] hover:cursor-pointer group py-8  px-8 border-2 rounded-3xl mb-32 drop-shadow-md">
                  <div className="">
                    <h1 className="font-heading text-med">Film Review</h1>
                    <p className="text-sm">Full Stack Movie Browsing Website</p>
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

export default CentralTech