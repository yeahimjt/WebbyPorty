import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import CentralTech from '../assets/centraltech.png'
import Nerd4u from '../assets/nerd4u.png'
import FilmReview from '../assets/filmreview.png'
import {GrClose} from 'react-icons/gr'
import {GoArrowSmallLeft, GoArrowSmallRight} from 'react-icons/go'
import {RxCode} from 'react-icons/rx'
import {AiOutlineEye} from 'react-icons/ai'


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { SiAmazonaws, SiBootstrap, SiCss3, SiExpress, SiFlask, SiGit, SiGithub, SiGithubpages, SiHtml5, SiMongodb, SiNetlify, SiPython, SiReact, SiRedux, SiRender, SiTailwindcss } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
// ..
AOS.init();

const Projects = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [ct, setCt] = useState(null)
  const [nu, setNu] = useState(null)
  const [fr, setFr] = useState(null)

  const [currentIndexCt, setCurrentIndexCt] = useState(0)
  const [currentIndexNu, setCurrentIndexNu] = useState(0)
  const [currentIndexFr, setCurrentIndexFr] = useState(0)


  const imgSlides = [
    ["nerd4u-1.png","nerd4u-2.png","nerd4u-3.png","nerd4u-4.png","nerd4u-5.png","nerd4u-6.png","nerd4u-7.png"],
    ["fr-1.png","fr-2.png","fr-3.png","fr-4.png","fr-5.png"],
    ["ct-1.png","ct-2.png","ct-3.png","ct-4.png","ct-5.png","ct-6.png","ct-7.png","ct-8.png","ct-9.png","ct-10.png", "ct-11.png"],
  ] 

  const prevSlideFr = () => {
    if (currentIndexFr === 0) {

    }
    else {
      setCurrentIndexFr(currentIndexFr-1)
    }
  }
  const nextSlideFr = () => {
    if (currentIndexFr === imgSlides[1].length-1) {

    }
    else {
      setCurrentIndexFr(currentIndexFr+1)
    }
  }

  // Nerd 4 U
  const prevSlideNu = () => {
    if (currentIndexNu === 0) {

    }
    else {
      setCurrentIndexNu(currentIndexNu-1)
    }
  }
  const nextSlideNu = () => {
    if (currentIndexNu === imgSlides[0].length-1) {

    }
    else {
      setCurrentIndexNu(currentIndexNu+1)
    }
  }

  // Central Tech
  const prevSlideCt = () => {
    if (currentIndexCt === 0) {

    }
    else {
      setCurrentIndexCt(currentIndexCt-1)
    }
  }
  const nextSlideCt = () => {
    if (currentIndexCt === imgSlides[2].length-1) {

    }
    else {
      setCurrentIndexCt(currentIndexCt+1)
    }
  }

  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({
    triggerOnce: true
  
  });
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    triggerOnce: true
    
  });
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView({
    triggerOnce: true,
  });
  return (
    <>
    { ct && 
      <div className="top-0 fixed flex justify-center items-center z-50 bg-black/95 w-screen h-screen">
      <div className="max-w-[80%] relative group overflow-visible" data-aos="fade-left">
              <div className='absolute -top-4 -right-4 z-60 hover:scale-105 hover:cursor-pointer transition-all z-80 bg-[color:var(--red)] p-4 rounded-full' onClick={()=>{setCt(!ct); setCurrentIndexCt(0)}}>
                <GrClose className="relative" size={22} />
              </div>
              <img className="object-contain" src={`/${imgSlides[2][currentIndexCt]}`}>
              </img>
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5 text-5 text-2l rounded-full p-2 bg-[color:var(--cyan)] text-white cursor-pointer" onClick={()=>prevSlideCt()}>
                <GoArrowSmallLeft size={32}/>
              </div>
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5 text-5 text-2l rounded-full p-2 bg-[color:var(--cyan)] text-white cursor-pointer" onClick={()=>nextSlideCt()}>
                <GoArrowSmallRight size={32}/>
              </div>
            </div>
      </div>
    }
    { nu && 
      <div className="top-0 fixed flex justify-center items-center z-50 bg-black/95 w-screen h-screen ">
        <div className="max-w-[80%] relative group overflow-visible" data-aos="fade-left">
              <div className='absolute -top-4 -right-4 z-60 hover:scale-105 hover:cursor-pointer transition-all z-80 bg-[color:var(--red)] p-4 rounded-full' onClick={()=>{setNu(!nu); setCurrentIndexNu(0)}}>
                <GrClose className="relative" size={22} />
              </div>
              <img className="object-contain" src={`/${imgSlides[0][currentIndexNu]}`}>
              </img>
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5 text-5 text-2l rounded-full p-2 bg-[color:var(--cyan)] text-white cursor-pointer" onClick={()=>prevSlideNu()}>
                <GoArrowSmallLeft size={32}/>
              </div>
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5 text-5 text-2l rounded-full p-2 bg-[color:var(--cyan)] text-white cursor-pointer" onClick={()=>nextSlideNu()}>
                <GoArrowSmallRight size={32}/>
              </div>
            </div>
      </div>
    }
    { fr && 
      <div className="top-0 fixed flex justify-center items-center z-50 bg-black/95 h-screen w-screen ">
      <div className="max-w-[80%] relative group overflow-visible" data-aos="fade-left">
              <div className='absolute -top-4 -right-4 z-60 hover:scale-105 hover:cursor-pointer transition-all z-80 bg-[color:var(--red)] p-4 rounded-full' onClick={()=>{setFr(!fr); setCurrentIndexFr(0)}}>
                <GrClose className="relative" size={22} />
              </div>
              <img className="object-contain" src={`/${imgSlides[1][currentIndexFr]}`}>
              </img>
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5 text-5 text-2l rounded-full p-2 bg-[color:var(--cyan)] text-white cursor-pointer" onClick={()=>prevSlideFr()}>
                <GoArrowSmallLeft size={32}/>
              </div>
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5 text-5 text-2l rounded-full p-2 bg-[color:var(--cyan)] text-white cursor-pointer" onClick={()=>nextSlideFr()}>
                <GoArrowSmallRight size={32}/>
              </div>
            </div>
      </div>
    }
    <div className={theme==="light"?"bg-white border-t-4 border-black/20":"bg-[color:var(--black)]  border-t-4 border-black/20"} id="projects">
        <h1 className={theme==="light"? "mx-auto  smallest:w-max pt-16 font-heading text-med smallest:text-big leading-snug px-4 text-black " : "mx-auto smallest:w-max pt-16 font-heading text-med leading-snug px-4 text-white"}>Projects <br/><i className="text-[color:var(--light-blue)] text-sm title:text-med relative -top-2 title:-top-4">that have cemented expertise and skills</i><section className="inline-block relative left-2 -top-1 top:-top-7 top:left-2">.</section></h1>
        <div className="flex flex-col gap-x-6 gap-y-4 w-full homepage-header:w-[70%] px-8 homepage-header:px-0 mx-auto pt-32">
            <div ref={myRef1} className={`${theme==="light"?"flex flex-col large:flex-row gap-x-6 ":"flex flex-col large:flex-row gap-x-6 text-white"}`}>
                <div className="flex-[0.50] flex items-center justify-center overflow-visible relative">
                    <div className={`${"relative py-16  px-8 rounded-2xl opacity-0"} ${myElementIsVisible1 ? 'animate-slideleft' : ''}`}>
                        <img className="hover:scale-105 hover:cursor-pointer transition-all relative" src={CentralTech} alt="Central Tech Project View" onClick={()=>setCt(!ct)}/>
                        <div className="absolute flex -left-12 -top-8 -rotate-[45deg] transition-all animate-clickhere" onClick={()=>setCt(!ct)}>
                            <svg className="animate-clickhere" width="216" height="216" viewBox="0 0 216 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M108 31.6117L125.15 84.3948H180.65L135.75 117.017L152.9 169.8L108 137.178L63.1 169.8L80.2502 117.017L35.3502 84.3948H90.8497L108 31.6117Z" fill="#FF3F44"/>
                                <path d="M160.735 52.7353L136.704 102.762L176.856 141.076L121.852 133.68L97.8201 183.707L87.8569 129.109L32.8525 121.713L81.6993 95.3659L71.7362 40.768L111.888 79.0824L160.735 52.7353Z" fill="#FF3F44"/>
                                <path d="M174.028 69.588L137.028 110.954L164.936 158.927L114.16 136.52L77.16 177.886L82.7795 122.672L32.0041 100.265L86.2525 88.5477L91.872 33.3334L119.78 81.3057L174.028 69.588Z" fill="#FF3F44"/>
                                <path d="M184.323 111.162L130.875 126.113L128.578 181.565L97.8427 135.353L44.395 150.304L78.8472 106.792L48.1117 60.5807L100.14 79.9009L134.592 36.3896L132.295 91.8415L184.323 111.162Z" fill="#FF3F44"/>
                                <path d="M182.347 125.541L127.036 130.113L114.292 184.129L92.8525 132.938L37.5416 137.51L79.6019 101.3L58.1619 50.1093L105.597 78.9216L147.657 42.7121L134.913 96.7286L182.347 125.541Z" fill="#FF3F44"/>
                                <path d="M142.995 175.901L103.569 136.84L54.2363 162.265L79.2029 112.698L39.7773 73.6367L94.6332 82.0644L119.6 32.4977L128.536 87.273L183.392 95.7008L134.059 121.126L142.995 175.901Z" fill="#FF3F44"/>
                                <path d="M67.6408 120.113C67.7408 120.569 67.8853 120.949 68.0742 121.253C68.2631 121.556 68.4923 121.79 68.7617 121.953C69.0365 122.115 69.3468 122.211 69.6927 122.241C70.0438 122.27 70.429 122.238 70.8483 122.146C71.3472 122.037 71.923 121.847 72.5756 121.576C73.2282 121.305 73.9379 120.952 74.7047 120.517L75.5214 124.243C74.7297 124.716 73.9419 125.106 73.1577 125.412C72.3789 125.716 71.5968 125.954 70.8113 126.126C69.8506 126.337 68.9248 126.414 68.0339 126.359C67.1483 126.303 66.3368 126.078 65.5995 125.683C64.8663 125.282 64.2329 124.715 63.6993 123.981C63.1657 123.246 62.7785 122.33 62.5377 121.231C62.3027 120.159 62.2621 119.2 62.416 118.355C62.5752 117.507 62.8973 116.769 63.3824 116.14C63.8716 115.504 64.5067 114.976 65.2876 114.554C66.0738 114.132 66.9764 113.809 67.9954 113.585C68.6217 113.448 69.1913 113.357 69.7041 113.311C70.2223 113.264 70.6935 113.244 71.1179 113.251C71.5422 113.258 71.9216 113.289 72.2562 113.344C72.5949 113.392 72.8986 113.445 73.1672 113.503L73.97 117.165L71.5736 117.69C71.2192 117.368 70.855 117.153 70.4811 117.045C70.1125 116.937 69.753 116.921 69.4027 116.998C69.1055 117.063 68.829 117.185 68.5733 117.364C68.323 117.541 68.1134 117.765 67.9447 118.035C67.7759 118.306 67.6607 118.618 67.599 118.971C67.5361 119.318 67.55 119.699 67.6408 120.113ZM82.2584 120.263C82.4813 120.214 82.6872 120.138 82.8761 120.035C83.0638 119.928 83.2322 119.807 83.3811 119.674C83.5341 119.535 83.6668 119.392 83.7792 119.245C83.8957 119.092 83.9937 118.942 84.0731 118.797L85.4026 118.505L86.2961 122.581L77.1886 124.578L76.4923 121.401L77.4075 121.009L76.4145 116.479L75.419 116.505L74.7314 113.369L81.4347 111.899L82.1223 115.036L81.1991 115.43L82.2584 120.263ZM84.9216 111.135L91.6249 109.665L92.3125 112.802L91.3973 113.195L92.3904 117.724L93.3858 117.698L94.0822 120.875L87.3789 122.344L86.6825 119.168L87.5977 118.775L86.6047 114.245L85.6093 114.272L84.9216 111.135ZM98.7674 113.815C98.9524 114.659 99.3023 115.228 99.8171 115.521C100.331 115.809 100.983 115.866 101.774 115.693C102.241 115.59 102.775 115.412 103.375 115.158C103.981 114.903 104.654 114.569 105.392 114.157L106.151 117.62C104.665 118.452 103.187 119.029 101.716 119.351C100.804 119.551 99.9311 119.631 99.0991 119.591C98.2659 119.546 97.5059 119.34 96.8192 118.973C96.1325 118.606 95.5399 118.085 95.0415 117.41C94.5473 116.729 94.189 115.881 93.9668 114.867C93.7469 113.864 93.7091 112.969 93.8534 112.181C94.0018 111.386 94.3035 110.694 94.7584 110.105C95.2174 109.509 95.8153 109.014 96.5519 108.619C97.2885 108.224 98.1398 107.92 99.1058 107.708C99.6949 107.579 100.232 107.492 100.717 107.447C101.208 107.401 101.651 107.381 102.048 107.389C102.45 107.395 102.806 107.423 103.117 107.472C103.432 107.514 103.713 107.561 103.958 107.613L104.717 111.076L102.464 111.57C102.132 111.275 101.794 111.08 101.451 110.982C101.105 110.88 100.766 110.866 100.431 110.939C100.155 110.999 99.8964 111.112 99.6543 111.276C99.4175 111.439 99.2183 111.647 99.0566 111.899C98.8992 112.145 98.7893 112.431 98.7271 112.756C98.6702 113.08 98.6836 113.433 98.7674 113.815ZM120.999 114.974L115.625 116.152L112.478 111.919L113.507 116.616L107.759 117.876L107.063 114.7L107.978 114.307L106.985 109.778L105.99 109.804L105.302 106.667L111.05 105.407L112.031 109.881L113.168 104.943L118.327 103.812L118.77 105.834C118.515 106.168 118.284 106.511 118.077 106.862C117.876 107.212 117.691 107.561 117.523 107.91C117.354 108.258 117.203 108.597 117.07 108.927C116.936 109.257 116.818 109.569 116.716 109.864C116.995 110.147 117.291 110.444 117.604 110.754C117.915 111.058 118.235 111.364 118.564 111.67C118.898 111.975 119.239 112.273 119.586 112.564C119.938 112.848 120.29 113.11 120.643 113.35L120.999 114.974ZM131.356 106.955L132.558 112.44L126.818 113.698L126.122 110.522L127.037 110.129L126.044 105.6L125.049 105.626L124.361 102.489L130.101 101.231L133.452 104.985L134.902 100.179L140.642 98.9203L141.329 102.057L140.414 102.45L141.407 106.979L142.403 106.953L143.099 110.13L137.359 111.388L136.157 105.903L134.655 110.47L131.356 106.955ZM149.014 102.25L151.117 101.297L151.614 103.565L149.304 103.571L149.69 105.331C150.008 105.261 150.311 105.172 150.599 105.064C150.886 104.952 151.148 104.827 151.385 104.692C151.623 104.556 151.836 104.412 152.025 104.26C152.214 104.107 152.372 103.953 152.499 103.797L153.59 103.558L154.483 107.634L144.643 109.791L143.947 106.615L144.862 106.222L143.873 101.708L142.877 101.734L142.186 98.5817L152.026 96.4247L152.92 100.501L151.829 100.74C151.65 100.657 151.442 100.586 151.206 100.526C150.971 100.466 150.717 100.425 150.445 100.401C150.173 100.377 149.883 100.374 149.575 100.391C149.267 100.409 148.954 100.452 148.636 100.522L149.014 102.25Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={`${"flex-[0.5] overflow-hidden opacity-0"} ${myElementIsVisible1 ? 'animate-slideright' : ''}`}>
                    <h1 className="text-center font-heading text-med">Central Tech</h1>
                    <div className="flex flex-col project-button:flex-row justify-center items-center gap-6 pt-4 pb-2">
                        <a className="w-full project-button:w-[25%] border-2 border-[color:var(--blue)] rounded-xl py-1 hover:cursor-pointer hover:scale-105 transition-all text-center flex justify-center gap-2 items-center" href="https://github.com/yeahimjt/centraltech-react" target="_blank" rel="noreferrer"><RxCode size={30} />View Code</a>
                        <a className="bg-test w-full project-button:w-[25%] py-1 rounded-xl hover:cursor-pointer hover:scale-105 transition-all text-white text-center flex justify-center gap-2 items-center" href="https://effortless-froyo-17f9a2.netlify.app/" target="_blank" rel="noreferrer"><AiOutlineEye size={30}/>View Live</a>
                    </div>
                    <p className="font-paragraph leading-loose text-center pt-8">Immerse yourself in a seamless online shopping journey with my self-developed full stack e-commerce web application. It provides a comprehensive array of functionalities, allowing you to effortlessly browse, search, save, purchase, and filter products. I have meticulously implemented all the necessary pages to provide a complete and satisfying e-commerce experience.</p>
                    <p className="italic font-paragraph text-xs text-center pt-4">Please allow website to load for 1-3 minutes. Server is hosted on <i className="text-[color:var(--light-blue)]">Render</i> so data takes time to load. Once loaded the experience will be seamless.</p>
                </div>
            </div>
            <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap">
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow' : ''}`}>
                  <SiReact className="text-[color:var(--cyan)]" size={30}/>
                  <p className="text-sm">React</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow animation-delay-100' : ''}`}>
                  <SiHtml5 className="text-[color:#FF5733]" size={30}/>
                  <p className="text-sm">HTML5</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow animation-delay-200' : ''}`}>
                  <SiTailwindcss className="text-[color:#36B4EF]" size={30}/>
                  <p className="text-sm">Tailwindcss</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow animation-delay-300' : ''}`}>
                  <SiExpress className="text-[color:#9BCD27]" size={30}/>
                  <p className="text-sm">Express</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow animation-delay-400' : ''}`}>
                  <SiMongodb className="text-[color:#126049]" size={30}/>
                  <p className="text-sm">MongoDb</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow animation-delay-500' : ''}`}>
                  <SiRender className="text-[color:#5DEBC4]" size={30}/>
                  <p className="text-sm">Render</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" :  "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow animation-delay-600' : ''}`}>
                  <SiNetlify className="text-[color:#27B4B1]" size={30}/>
                  <p className="text-sm">Netlify</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible1 ? 'animate-grow animation-delay-700' : ''}`}>
                  <SiGit className="text-[color:#EA4E31]" size={30}/>
                  <p className="text-sm">Git</p>
                </div>
            </div>
            <div ref={myRef2} className={`${theme==="light"?"flex flex-col-reverse large:flex-row  gap-x-6 mt-64 ":"flex flex-col-reverse large:flex-row  gap-x-6 text-white mt-64"}`}>
              <div className={`${"flex-[0.5] overflow-hidden"} ${myElementIsVisible2 ? 'animate-slideright' : ''}`}>
                <h1 className="text-center font-heading text-med">Film Review</h1>
                <div className="flex flex-col project-button:flex-row justify-center items-center gap-6 pt-4 pb-2">

                    <a className="bg-test w-full project-button:w-[25%] py-1 rounded-xl hover:cursor-pointer hover:scale-105 transition-all text-white text-center flex justify-center gap-2 items-center" href="http://www.nerd4u.online/" target="_blank" rel="noreferrer"><AiOutlineEye size={30}/>View Live</a>
                    <a className="w-full project-button:w-[25%] border-2 border-[color:var(--blue)] rounded-xl py-1 hover:cursor-pointer hover:scale-105 transition-all text-center flex justify-center gap-2 items-center" href="https://github.com/yeahimjt/Nerd4U-Ecommerce" target="_blank" rel="noreferrer"><RxCode size={30}/>View Code</a>
                </div>
                <p className="font-paragraph leading-loose text-center pt-8">Film Review is an innovative web application that empowers users to effortlessly explore a vast array of captivating movies using intuitive filters or a comprehensive search functionality. Additionally, users can stay updated on the latest trends in the film industry by discovering acclaimed actors and directors and exploring their notable works. The inclusion of an embedded YouTube Media Player ensures a seamless experience, exclusively playing official trailers whenever they are available.</p>
              </div>
              <div className="flex-[0.50] flex items-center justify-center overflow-visible relative">
                    <div className={`${"relative py-16  px-8 rounded-2xl"} ${myElementIsVisible2 ? 'animate-slideleft' : ''}`}>
                        <img className="hover:scale-105 hover:cursor-pointer transition-all relative" src={FilmReview} alt="Film Review View" onClick={()=>setFr(!fr)}/>
                        <div className="absolute flex -left-12 -top-8 -rotate-[45deg] transition-all animate-clickhere" onClick={()=>setFr(!fr)}>
                            <svg className="animate-clickhere" width="216" height="216" viewBox="0 0 216 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M108 31.6117L125.15 84.3948H180.65L135.75 117.017L152.9 169.8L108 137.178L63.1 169.8L80.2502 117.017L35.3502 84.3948H90.8497L108 31.6117Z" fill="#FF3F44"/>
                                <path d="M160.735 52.7353L136.704 102.762L176.856 141.076L121.852 133.68L97.8201 183.707L87.8569 129.109L32.8525 121.713L81.6993 95.3659L71.7362 40.768L111.888 79.0824L160.735 52.7353Z" fill="#FF3F44"/>
                                <path d="M174.028 69.588L137.028 110.954L164.936 158.927L114.16 136.52L77.16 177.886L82.7795 122.672L32.0041 100.265L86.2525 88.5477L91.872 33.3334L119.78 81.3057L174.028 69.588Z" fill="#FF3F44"/>
                                <path d="M184.323 111.162L130.875 126.113L128.578 181.565L97.8427 135.353L44.395 150.304L78.8472 106.792L48.1117 60.5807L100.14 79.9009L134.592 36.3896L132.295 91.8415L184.323 111.162Z" fill="#FF3F44"/>
                                <path d="M182.347 125.541L127.036 130.113L114.292 184.129L92.8525 132.938L37.5416 137.51L79.6019 101.3L58.1619 50.1093L105.597 78.9216L147.657 42.7121L134.913 96.7286L182.347 125.541Z" fill="#FF3F44"/>
                                <path d="M142.995 175.901L103.569 136.84L54.2363 162.265L79.2029 112.698L39.7773 73.6367L94.6332 82.0644L119.6 32.4977L128.536 87.273L183.392 95.7008L134.059 121.126L142.995 175.901Z" fill="#FF3F44"/>
                                <path d="M67.6408 120.113C67.7408 120.569 67.8853 120.949 68.0742 121.253C68.2631 121.556 68.4923 121.79 68.7617 121.953C69.0365 122.115 69.3468 122.211 69.6927 122.241C70.0438 122.27 70.429 122.238 70.8483 122.146C71.3472 122.037 71.923 121.847 72.5756 121.576C73.2282 121.305 73.9379 120.952 74.7047 120.517L75.5214 124.243C74.7297 124.716 73.9419 125.106 73.1577 125.412C72.3789 125.716 71.5968 125.954 70.8113 126.126C69.8506 126.337 68.9248 126.414 68.0339 126.359C67.1483 126.303 66.3368 126.078 65.5995 125.683C64.8663 125.282 64.2329 124.715 63.6993 123.981C63.1657 123.246 62.7785 122.33 62.5377 121.231C62.3027 120.159 62.2621 119.2 62.416 118.355C62.5752 117.507 62.8973 116.769 63.3824 116.14C63.8716 115.504 64.5067 114.976 65.2876 114.554C66.0738 114.132 66.9764 113.809 67.9954 113.585C68.6217 113.448 69.1913 113.357 69.7041 113.311C70.2223 113.264 70.6935 113.244 71.1179 113.251C71.5422 113.258 71.9216 113.289 72.2562 113.344C72.5949 113.392 72.8986 113.445 73.1672 113.503L73.97 117.165L71.5736 117.69C71.2192 117.368 70.855 117.153 70.4811 117.045C70.1125 116.937 69.753 116.921 69.4027 116.998C69.1055 117.063 68.829 117.185 68.5733 117.364C68.323 117.541 68.1134 117.765 67.9447 118.035C67.7759 118.306 67.6607 118.618 67.599 118.971C67.5361 119.318 67.55 119.699 67.6408 120.113ZM82.2584 120.263C82.4813 120.214 82.6872 120.138 82.8761 120.035C83.0638 119.928 83.2322 119.807 83.3811 119.674C83.5341 119.535 83.6668 119.392 83.7792 119.245C83.8957 119.092 83.9937 118.942 84.0731 118.797L85.4026 118.505L86.2961 122.581L77.1886 124.578L76.4923 121.401L77.4075 121.009L76.4145 116.479L75.419 116.505L74.7314 113.369L81.4347 111.899L82.1223 115.036L81.1991 115.43L82.2584 120.263ZM84.9216 111.135L91.6249 109.665L92.3125 112.802L91.3973 113.195L92.3904 117.724L93.3858 117.698L94.0822 120.875L87.3789 122.344L86.6825 119.168L87.5977 118.775L86.6047 114.245L85.6093 114.272L84.9216 111.135ZM98.7674 113.815C98.9524 114.659 99.3023 115.228 99.8171 115.521C100.331 115.809 100.983 115.866 101.774 115.693C102.241 115.59 102.775 115.412 103.375 115.158C103.981 114.903 104.654 114.569 105.392 114.157L106.151 117.62C104.665 118.452 103.187 119.029 101.716 119.351C100.804 119.551 99.9311 119.631 99.0991 119.591C98.2659 119.546 97.5059 119.34 96.8192 118.973C96.1325 118.606 95.5399 118.085 95.0415 117.41C94.5473 116.729 94.189 115.881 93.9668 114.867C93.7469 113.864 93.7091 112.969 93.8534 112.181C94.0018 111.386 94.3035 110.694 94.7584 110.105C95.2174 109.509 95.8153 109.014 96.5519 108.619C97.2885 108.224 98.1398 107.92 99.1058 107.708C99.6949 107.579 100.232 107.492 100.717 107.447C101.208 107.401 101.651 107.381 102.048 107.389C102.45 107.395 102.806 107.423 103.117 107.472C103.432 107.514 103.713 107.561 103.958 107.613L104.717 111.076L102.464 111.57C102.132 111.275 101.794 111.08 101.451 110.982C101.105 110.88 100.766 110.866 100.431 110.939C100.155 110.999 99.8964 111.112 99.6543 111.276C99.4175 111.439 99.2183 111.647 99.0566 111.899C98.8992 112.145 98.7893 112.431 98.7271 112.756C98.6702 113.08 98.6836 113.433 98.7674 113.815ZM120.999 114.974L115.625 116.152L112.478 111.919L113.507 116.616L107.759 117.876L107.063 114.7L107.978 114.307L106.985 109.778L105.99 109.804L105.302 106.667L111.05 105.407L112.031 109.881L113.168 104.943L118.327 103.812L118.77 105.834C118.515 106.168 118.284 106.511 118.077 106.862C117.876 107.212 117.691 107.561 117.523 107.91C117.354 108.258 117.203 108.597 117.07 108.927C116.936 109.257 116.818 109.569 116.716 109.864C116.995 110.147 117.291 110.444 117.604 110.754C117.915 111.058 118.235 111.364 118.564 111.67C118.898 111.975 119.239 112.273 119.586 112.564C119.938 112.848 120.29 113.11 120.643 113.35L120.999 114.974ZM131.356 106.955L132.558 112.44L126.818 113.698L126.122 110.522L127.037 110.129L126.044 105.6L125.049 105.626L124.361 102.489L130.101 101.231L133.452 104.985L134.902 100.179L140.642 98.9203L141.329 102.057L140.414 102.45L141.407 106.979L142.403 106.953L143.099 110.13L137.359 111.388L136.157 105.903L134.655 110.47L131.356 106.955ZM149.014 102.25L151.117 101.297L151.614 103.565L149.304 103.571L149.69 105.331C150.008 105.261 150.311 105.172 150.599 105.064C150.886 104.952 151.148 104.827 151.385 104.692C151.623 104.556 151.836 104.412 152.025 104.26C152.214 104.107 152.372 103.953 152.499 103.797L153.59 103.558L154.483 107.634L144.643 109.791L143.947 106.615L144.862 106.222L143.873 101.708L142.877 101.734L142.186 98.5817L152.026 96.4247L152.92 100.501L151.829 100.74C151.65 100.657 151.442 100.586 151.206 100.526C150.971 100.466 150.717 100.425 150.445 100.401C150.173 100.377 149.883 100.374 149.575 100.391C149.267 100.409 148.954 100.452 148.636 100.522L149.014 102.25Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center  gap-2 gap-y-2 text-white flex-wrap">
                <div className={`${theme==="light"? "flex  gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible2 ? 'animate-grow' : ''}`}>
                  <SiReact className="text-[color:var(--cyan)]" size={30}/>
                  <p className="text-sm">React</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible2 ? 'animate-grow' : ''}`}>
                  <SiRedux className="text-[color:#7347B8]" size={30}/>
                  <p className="text-sm">Redux</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible2 ? 'animate-grow animation-delay-100' : ''}`}>
                  <SiHtml5 className="text-[color:#FF5733]" size={30}/>
                  <p className="text-sm">HTML5</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible2 ? 'animate-grow animation-delay-200' : ''}`}>
                  <SiTailwindcss className="text-[color:#36B4EF]" size={30}/>
                  <p className="text-sm">Tailwindcss</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible2 ? 'animate-grow animation-delay-700' : ''}`}>
                  <SiGithub className={theme==="light"?"text-white" : "text-black"} size={40}/>
                  <p className="text-sm">Pages</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible2 ? 'animate-grow animation-delay-700' : ''}`}>
                  <SiGit className="text-[color:#EA4E31]" size={30}/>
                  <p className="text-sm">Git</p>
                </div>
            </div>
            <div ref={myRef3} className={`${theme==="light"?"flex flex-col large:flex-row gap-x-6 mt-64 ":"flex flex-col large:flex-row gap-x-6 text-white mt-64"}`}>
              <div className="flex-[0.50] flex items-center justify-center overflow-visible relative">
                    <div className={`${"relative py-16  px-8 rounded-2xl"} ${myElementIsVisible3 ? 'animate-slideleft' : ''}`}>
                        <img className="hover:scale-105 hover:cursor-pointer transition-all relative" src={Nerd4u} alt="Nerd4u View" onClick={()=>setNu(!nu)}/>
                        <div className="absolute flex -left-12 -top-8 -rotate-[45deg] transition-all animate-clickhere" onClick={()=>setNu(!nu)}>
                            <svg className="animate-clickhere" width="216" height="216" viewBox="0 0 216 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M108 31.6117L125.15 84.3948H180.65L135.75 117.017L152.9 169.8L108 137.178L63.1 169.8L80.2502 117.017L35.3502 84.3948H90.8497L108 31.6117Z" fill="#FF3F44"/>
                                <path d="M160.735 52.7353L136.704 102.762L176.856 141.076L121.852 133.68L97.8201 183.707L87.8569 129.109L32.8525 121.713L81.6993 95.3659L71.7362 40.768L111.888 79.0824L160.735 52.7353Z" fill="#FF3F44"/>
                                <path d="M174.028 69.588L137.028 110.954L164.936 158.927L114.16 136.52L77.16 177.886L82.7795 122.672L32.0041 100.265L86.2525 88.5477L91.872 33.3334L119.78 81.3057L174.028 69.588Z" fill="#FF3F44"/>
                                <path d="M184.323 111.162L130.875 126.113L128.578 181.565L97.8427 135.353L44.395 150.304L78.8472 106.792L48.1117 60.5807L100.14 79.9009L134.592 36.3896L132.295 91.8415L184.323 111.162Z" fill="#FF3F44"/>
                                <path d="M182.347 125.541L127.036 130.113L114.292 184.129L92.8525 132.938L37.5416 137.51L79.6019 101.3L58.1619 50.1093L105.597 78.9216L147.657 42.7121L134.913 96.7286L182.347 125.541Z" fill="#FF3F44"/>
                                <path d="M142.995 175.901L103.569 136.84L54.2363 162.265L79.2029 112.698L39.7773 73.6367L94.6332 82.0644L119.6 32.4977L128.536 87.273L183.392 95.7008L134.059 121.126L142.995 175.901Z" fill="#FF3F44"/>
                                <path d="M67.6408 120.113C67.7408 120.569 67.8853 120.949 68.0742 121.253C68.2631 121.556 68.4923 121.79 68.7617 121.953C69.0365 122.115 69.3468 122.211 69.6927 122.241C70.0438 122.27 70.429 122.238 70.8483 122.146C71.3472 122.037 71.923 121.847 72.5756 121.576C73.2282 121.305 73.9379 120.952 74.7047 120.517L75.5214 124.243C74.7297 124.716 73.9419 125.106 73.1577 125.412C72.3789 125.716 71.5968 125.954 70.8113 126.126C69.8506 126.337 68.9248 126.414 68.0339 126.359C67.1483 126.303 66.3368 126.078 65.5995 125.683C64.8663 125.282 64.2329 124.715 63.6993 123.981C63.1657 123.246 62.7785 122.33 62.5377 121.231C62.3027 120.159 62.2621 119.2 62.416 118.355C62.5752 117.507 62.8973 116.769 63.3824 116.14C63.8716 115.504 64.5067 114.976 65.2876 114.554C66.0738 114.132 66.9764 113.809 67.9954 113.585C68.6217 113.448 69.1913 113.357 69.7041 113.311C70.2223 113.264 70.6935 113.244 71.1179 113.251C71.5422 113.258 71.9216 113.289 72.2562 113.344C72.5949 113.392 72.8986 113.445 73.1672 113.503L73.97 117.165L71.5736 117.69C71.2192 117.368 70.855 117.153 70.4811 117.045C70.1125 116.937 69.753 116.921 69.4027 116.998C69.1055 117.063 68.829 117.185 68.5733 117.364C68.323 117.541 68.1134 117.765 67.9447 118.035C67.7759 118.306 67.6607 118.618 67.599 118.971C67.5361 119.318 67.55 119.699 67.6408 120.113ZM82.2584 120.263C82.4813 120.214 82.6872 120.138 82.8761 120.035C83.0638 119.928 83.2322 119.807 83.3811 119.674C83.5341 119.535 83.6668 119.392 83.7792 119.245C83.8957 119.092 83.9937 118.942 84.0731 118.797L85.4026 118.505L86.2961 122.581L77.1886 124.578L76.4923 121.401L77.4075 121.009L76.4145 116.479L75.419 116.505L74.7314 113.369L81.4347 111.899L82.1223 115.036L81.1991 115.43L82.2584 120.263ZM84.9216 111.135L91.6249 109.665L92.3125 112.802L91.3973 113.195L92.3904 117.724L93.3858 117.698L94.0822 120.875L87.3789 122.344L86.6825 119.168L87.5977 118.775L86.6047 114.245L85.6093 114.272L84.9216 111.135ZM98.7674 113.815C98.9524 114.659 99.3023 115.228 99.8171 115.521C100.331 115.809 100.983 115.866 101.774 115.693C102.241 115.59 102.775 115.412 103.375 115.158C103.981 114.903 104.654 114.569 105.392 114.157L106.151 117.62C104.665 118.452 103.187 119.029 101.716 119.351C100.804 119.551 99.9311 119.631 99.0991 119.591C98.2659 119.546 97.5059 119.34 96.8192 118.973C96.1325 118.606 95.5399 118.085 95.0415 117.41C94.5473 116.729 94.189 115.881 93.9668 114.867C93.7469 113.864 93.7091 112.969 93.8534 112.181C94.0018 111.386 94.3035 110.694 94.7584 110.105C95.2174 109.509 95.8153 109.014 96.5519 108.619C97.2885 108.224 98.1398 107.92 99.1058 107.708C99.6949 107.579 100.232 107.492 100.717 107.447C101.208 107.401 101.651 107.381 102.048 107.389C102.45 107.395 102.806 107.423 103.117 107.472C103.432 107.514 103.713 107.561 103.958 107.613L104.717 111.076L102.464 111.57C102.132 111.275 101.794 111.08 101.451 110.982C101.105 110.88 100.766 110.866 100.431 110.939C100.155 110.999 99.8964 111.112 99.6543 111.276C99.4175 111.439 99.2183 111.647 99.0566 111.899C98.8992 112.145 98.7893 112.431 98.7271 112.756C98.6702 113.08 98.6836 113.433 98.7674 113.815ZM120.999 114.974L115.625 116.152L112.478 111.919L113.507 116.616L107.759 117.876L107.063 114.7L107.978 114.307L106.985 109.778L105.99 109.804L105.302 106.667L111.05 105.407L112.031 109.881L113.168 104.943L118.327 103.812L118.77 105.834C118.515 106.168 118.284 106.511 118.077 106.862C117.876 107.212 117.691 107.561 117.523 107.91C117.354 108.258 117.203 108.597 117.07 108.927C116.936 109.257 116.818 109.569 116.716 109.864C116.995 110.147 117.291 110.444 117.604 110.754C117.915 111.058 118.235 111.364 118.564 111.67C118.898 111.975 119.239 112.273 119.586 112.564C119.938 112.848 120.29 113.11 120.643 113.35L120.999 114.974ZM131.356 106.955L132.558 112.44L126.818 113.698L126.122 110.522L127.037 110.129L126.044 105.6L125.049 105.626L124.361 102.489L130.101 101.231L133.452 104.985L134.902 100.179L140.642 98.9203L141.329 102.057L140.414 102.45L141.407 106.979L142.403 106.953L143.099 110.13L137.359 111.388L136.157 105.903L134.655 110.47L131.356 106.955ZM149.014 102.25L151.117 101.297L151.614 103.565L149.304 103.571L149.69 105.331C150.008 105.261 150.311 105.172 150.599 105.064C150.886 104.952 151.148 104.827 151.385 104.692C151.623 104.556 151.836 104.412 152.025 104.26C152.214 104.107 152.372 103.953 152.499 103.797L153.59 103.558L154.483 107.634L144.643 109.791L143.947 106.615L144.862 106.222L143.873 101.708L142.877 101.734L142.186 98.5817L152.026 96.4247L152.92 100.501L151.829 100.74C151.65 100.657 151.442 100.586 151.206 100.526C150.971 100.466 150.717 100.425 150.445 100.401C150.173 100.377 149.883 100.374 149.575 100.391C149.267 100.409 148.954 100.452 148.636 100.522L149.014 102.25Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={`${"flex-[0.5] overflow-hidden"} ${myElementIsVisible3 ? 'animate-slideright' : ''}`}>
                    <h1 className="text-center font-heading text-med">Nerd4U</h1>
                    <div className="flex flex-col project-button:flex-row justify-center items-center gap-6 pt-4 pb-2">
                        <a className="w-full project-button:w-[25%] border-2 border-[color:var(--blue)] rounded-xl py-1 hover:cursor-pointer hover:scale-105 transition-all text-center flex justify-center gap-2 items-center" href="https://github.com/yeahimjt/Nerd4U-Ecommerce" target="_blank" rel="noreferrer"><RxCode size={30}/>View Code</a>
                        <a className="bg-test w-full project-button:w-[25%] py-1 rounded-xl hover:cursor-pointer hover:scale-105 transition-all text-white text-center flex justify-center gap-2 items-center" href="http://www.nerd4u.online/" target="_blank" rel="noreferrer"><AiOutlineEye size={30}/>View Live</a>
                    </div>
                    <p className="font-paragraph leading-loose text-center pt-8">E-commerce web application designed for the purchase of comics and other related items. It features a searching system with appropriate filteration, secure user authentication, admin panel for control of SQL database, and checkout.</p>
                </div>
            </div>
            <div className="flex justify-center gap-2 gap-y-2 text-white flex-wrap mb-32">
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow' : ''}`}>
                  <SiFlask className="text-white" size={30}/>
                  <p className="text-sm">Flask</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow' : ''}`}>
                  <SiPython className="text-[color:#F6C73A]" size={30}/>
                  <p className="text-sm">Python</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow animation-delay-100' : ''}`}>
                  <SiHtml5 className="text-[color:#FF5733]" size={30}/>
                  <p className="text-sm">HTML5</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow animation-delay-100' : ''}`}>
                  <SiCss3 className="text-[color:#2760E6]" size={30}/>
                  <p className="text-sm">CSS3</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow animation-delay-100' : ''}`}>
                  <SiBootstrap className="text-[color:#7210F6]" size={30}/>
                  <p className="text-sm">Bootstrap</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow animation-delay-100' : ''}`}>
                  <SiAmazonaws className="text-[color:#FF9900]" size={30}/>
                  <p className="text-sm">EC2</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow animation-delay-100' : ''}`}>
                  <SiAmazonaws className="text-[color:#FF9900]" size={30}/>
                  <p className="text-sm">RDS</p>
                </div>
                <div className={`${theme==="light"? "flex gap-2 justify-center items-center w-[150px] bg-[color:var(--black)] py-2 opacity-0" : "flex gap-2 justify-center items-center w-[150px] bg-white text-black py-2 opacity-0"} ${myElementIsVisible3 ? 'animate-grow animation-delay-700' : ''}`}>
                  <SiGit className="text-[color:#EA4E31]" size={30}/>
                  <p className="text-sm">Git</p>
                </div>
          </div>
        </div>
        
    </div>
    </>

  )
}

export default Projects