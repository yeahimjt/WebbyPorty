import React, {useContext, useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ThemeContext } from '../App'
import { AiOutlineClose } from 'react-icons/ai'

const NavMenu = ({state,setState,disabled, disableMenu}) => {

    const {theme} = useContext(ThemeContext)
    let mainMenu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    useEffect(()=> {
        if (state.clicked === false) {
            // close menu
            disableMenu()
            gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.6,
                height:0,
                ease: 'power3.inOut',
                stagger: {
                    amount:.07
                }
    
            })
            gsap.to(mainMenu, {
                duration: 1,
                css: {
                    display:'none'
                }
            })
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            // open menu
            gsap.to(mainMenu, {
                duration: 0,
                css: {
                    display:'block'
                }
            })
            gsap.to([revealMenu, revealMenuBackground], {
                duration:0,
                opacity:1,
                height:'100%'
            })
            staggerReveal(revealMenuBackground,revealMenu)
            staggerText(line1,line2,line3)
        }
      }, [state])

      const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height:0,
            transformOrigin: 'right top',
            skewY: 10,
            ease: 'power3.inOut',
            stagger: {
                amount: .1
            }
        })
        }
        const staggerText = (node1,node2,node3) => {
            gsap.from([node1,node2,node3], {
                duration: 0.8,
                y:100,
                delay:.1,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.3,
                }
            })
        }
        const handleHover = e => {
            gsap.to(e.target, {
                duration: .3,
                y: 3,
                skewX: 4,
                ease: 'power3.inOut'
            })
        }
        const handleHoverExit = e => {
            gsap.to(e.target, {
                duration: .3,
                y: -3,
                skewX: 0,
                ease: 'power3.inOut'
            })
        }
  return (
    <nav ref={el => (mainMenu = el)} className={theme==="light"?"text-left text-black hidden top-0 left-0 right-0 bottom-0 fixed z-50 h-screen w-screen  shadow-2xl border-b-2 border-[color:var(--about-tease)]" : "text-left text-white fixed  hidden left-0 right-0 bottom-0 top-0  z-50 h-screen w-screen  shadow-2xl border-b-2 border-[color:var(--about-tease)]"}>
        <div ref={el => (revealMenuBackground = el)} className="bg-[color:var(--light-blue)] opacity-0 fixed top-0 bottom-0 left-0 right-0 w-full h-full -z-10 overflow-hidden"></div>
        <div className={theme==="light"?"overflow-hidden bg-white block  relative opacity-0 z-50 text-[color:var(--black)]":"overflow-hidden bg-[color:var(--about-tease-dark)] block relative opacity-0 z-50"} ref={el => (revealMenu = el)}>
            <button disabled={disabled} onClick={()=> setState({clicked: false, menuName: "Menu"})}><AiOutlineClose  className={theme==="light"?"absolute right-14 top-8 animate-wiggle animate-infinite text-yellow hover:text-[color:var(--main-blue)] hover:cursor-pointer": "absolute right-14 top-8 animate-wiggle animate-infinite text-white hover:text-white hover:cursor-pointer"} size={30} /></button>
            <ul className="text-big mt-32">
                <li className="h-[135px] overflow-hidden relative flex justify-center items-center list-none w-full"><a ref={el=> (line1 = el)}  onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} className={theme==="light"?" absolute hover:text-[color:var(--about-tease-dark)]": "absolute hover:text-[color:var(--about-tease)]"} href="/#projects" onClick={()=> setState({clicked: false, menuName: "Menu"})}>Projects</a></li>
                <li className="h-[135px] overflow-hidden relative flex justify-center items-center list-none w-full"><a ref={el=> (line2 = el)}  onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} className={theme==="light"?" absolute hover:text-[color:var(--about-tease-dark)]": "absolute hover:text-[color:var(--about-tease)]"} href="/#profile" onClick={()=> setState({clicked: false, menuName: "Menu"})}>Profile</a></li>
                <li className="h-[135px] overflow-hidden relative flex justify-center items-center list-none w-full"><a ref={el=> (line3 = el)}  onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} className={theme==="light"?" absolute hover:text-[color:var(--about-tease-dark)]": "absolute hover:text-[color:var(--about-tease)]"} href="/#contact" onClick={()=> setState({clicked: false, menuName: "Menu"})}>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavMenu