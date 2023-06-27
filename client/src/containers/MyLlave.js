import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SiExpress, SiGit, SiHtml5, SiMicrosoftazure, SiNetlify, SiReact, SiRender, SiTailwindcss } from 'react-icons/si'
import { ProjectAnimationContext, ThemeContext } from '../App'
import { gsap } from 'gsap'
import { CgArrowLeft, CgArrowRight, CgArrowRightR } from 'react-icons/cg'
import Footer from '../components/Footer'
import ProjectSwipe from '../components/ProjectSwipe'
import ProjectUnswipe from '../components/ProjectUnswipe'
gsap.registerPlugin(ScrollTrigger)
const MyLlave = () => {
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
    "","ml-1.png","ml-2.png","ml-3.png","ml-4.png","ml-5.png","ml-6.png","ml-7.png","ml-8.png"
  ] 
  console.log('../assets/'+imgSlides[selectedImage])
  const {projectState, setProjectState} = useContext(ProjectAnimationContext)
  useEffect(()=> {
    window.scrollTo(0, 0)
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
        <ProjectUnswipe projectState={projectState} setProjectState={setProjectState}/>
        <div className={theme==="light"?"pt-32 px-12 flex tablet:flex-row flex-col items-center gap-y-6 pb-8": "pt-32 px-12 flex tablet:flex-row bg-[color:var(--black)] flex-col text-white items-center gap-y-6 pb-8"}>
            <div className="tablet:flex-[0.5] justify-center ">
              <div className="overflow-hidden h-fit ">
                  <h1 ref={el => (line1 = el)} className="font-heading text-center text-med clip-began opacity-0 translate-y-8">My LLave</h1>
                  <p ref={el => (line2 = el)} className="font-paragraph text-xs pb-4 leading-loose clip-began opacity-0 translate-y-8 text-center">Find your perfect community, whether you are a realtor or someone seeking a new home! My Llave is a full stack application that allows monetization of the data posted. Features core functionality of a realtor marketplace.</p>
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
                    <SiMicrosoftazure className={theme==="light"?"text-white": "text-black"} size={30}/>
                    <p className="text-sm">Azure SQL</p>
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
            <div className="relative py-16  px-8 tablet:flex-[0.5] justify-center">
              {selectedImage &&
                <img className=" object-scale-down mx-auto clip-began-right opacity-0 translate-x-8 mb-4 select-none" src={`/${imgSlides[selectedImage]}`} ref={el => (projectImage = el)} alt="Central Tech Preview"/>
              }
              <CgArrowLeft className="absolute top-[50%] left-2 hover:cursor-pointer bg-[color:var(--light-blue)] hover:text-white w-[50px] h-[50px] rounded-full animate-jump-in animation-delay-1200" size={30} onClick={()=> {if (selectedImage !== 1) {setSelectedImage(selectedImage-1)}}}/>
              <CgArrowRight className="absolute top-[50%] right-2 hover:cursor-pointer bg-[color:var(--light-blue)] hover:text-white w-[50px] h-[50px] rounded-full animate-jump-in animation-delay-1200" size={30} onClick={()=> {if (selectedImage !== imgSlides.length-1) {setSelectedImage(selectedImage+1)}}}/>
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
                {/* <a className="font-paragraph flex justify-center flex-[0.5] underline text-blue-500 overflow-visible text-center" href="https://myllave.com" target="_blank" rel="noreferrer">https://myllave.com</a> */}
                <a className="font-paragraph flex justify-center flex-[0.5] underline text-blue-500 overflow-visible text-center" href="https://myllave.com" target="_blank" rel="noreferrer">https://myllave.com</a>
                <a className="font-paragraph flex justify-center flex-[0.5] underline text-blue-500 overflow-visible text-center" href="https://github.com/yeahimjt/llave" target="_blank" rel="noreferrer">https://github.com/yeahimjt/llave</a>
                <h2 className="font-paragraph flex justify-center flex-[0.5] overflow-visible text-center">May 1st 2023</h2>
                <h2 className="font-paragraph flex justify-center flex-[0.5] overflow-visible text-center">June 2nd 2023</h2>
            </div>
            </div>
            <hr className="py-2"/>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Features & Functionality</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <ul className="list-inside list-disc text-sm font-paragraph leading-relaxed tablet:w-[50%] w-[90%]">
                    <li>User Friendly UI/UX design</li>
                    <li>Login/Log-out/Delete Account</li>
                    <li>User specific functionality (posting properties, information displayed on profile)</li>
                    <li>Post Properties, Edit Properties, Delete Properties</li>
                    <li>Link Agents, Lenders, Title Company to Property</li>
                    <li>Admin panel to accept/delete users, advertisement requests, and transaction requests</li>
                    <li>Impressions tracker for advertisements, and properties that user can view</li>
                    <li>Email notifications for specific actions taken (account accepted/denied, advertisment accepted/denied, transaction accepted/denied)</li>
                  </ul>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Challenges & Solutions</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col py-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">Unfamiliar with the realty world, I found myself having trouble with terms common in that space. To address this issue I had weekly SCRUM meetings with my superior. It was during these meetings where basic terminology was tweaked (allowing me to quickly adapt), and new functionality along with their deadlines were discussed.</p>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Role & Contributions</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">I was contracted to build this realtor application end-to-end on my own. As the sole Full Stack Developer I both designed and developed all UI/UX for the front-end and functionality in the back-end.</p>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Development Process</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">Pushed functional updates to GitHub through Git as they were completed alongside writing down progress on specific functionality to ensure deadlines would be met. Provided frequent updates to my superior to get any feedback quickly to increase development time</p>
                </div>
            </div>
            <div className="flex tablet:flex-row flex-col py-24">
                <div className="flex flex-[0.3] items-center flex-col text-center mt-16">
                    <h3 className="font-heading text-med">Results & Impact</h3>
                </div>
                <div className="flex flex-[1] items-center flex-col mt-32">
                  <p className="indent-4 tablet:w-[50%] w-[90%] text-sm font-paragraph leading-relaxed">I believe greatly in this application and I am excited to it create a community of its own. The integration of monetization opportunities while maintaining seamless property browsing capabilities has resulted in a win-win situation for users. They can capitalize on their data, receive personalized experiences, and engage more actively with the platform while enjoying a smooth and hassle-free property search process.</p>
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
                <div className="flex justify-between items-center w-[80%] max-w-[800px] hover:cursor-pointer group py-8  px-8 border-2 rounded-3xl mb-32 drop-shadow-md" onClick={()=> {
                    setProjectState({
                      initial:null,
                      clicked:true,
                      redirect: '/film-review'
                    })
                  }}>
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

export default MyLlave