import React, { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

const ProjectUnswipe = ({projectState, setProjectState}) => {
    let revealProjectBackground = useRef()
    let revealProject = useRef()
    const {theme} = useContext(ThemeContext)
    console.log(projectState)
    const nav = useNavigate()
    useEffect(()=> {
        if (projectState.clicked === false) {
            gsap.to([revealProject, revealProjectBackground], {
                duration: 0.6,
                delay: 0,
                width:0,
                ease: 'power3.inOut',
                stagger: {
                    amount:.07
                }
    
            })
            gsap.to(revealProject, {
                duration: 1,
                css: {
                    // display:'none'
                }
            })
        } else if (projectState.clicked === true || (projectState.clicked === true && projectState.initial === null)) {
            // open menu
            gsap.to([revealProject, revealProjectBackground], {
                duration:0,
                opacity:1,
                diplay:'block',
                left:'-100',
                skewX: 4,
                top:0,
                width:'140%'
            })
            staggerReveal(revealProjectBackground,revealProject)
            setTimeout(()=> {
                setProjectState({
                    initial: null,
                    clicked: false,
                    redirect: '/film-review'
                })
                nav(`${projectState.redirect}`)
            }, 1500)
        }
            

      }, [projectState])

      const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            width:0,
            ease: 'power3.inOut',
            stagger: {
                amount: .1
            },
        })
        }
  return (

    <>
        <div ref={el => (revealProjectBackground = el)} className="bg-[color:var(--light-blue)]    top-0 bottom-0 left-0 right-0 w-screen h-full z-40 overflow-hidden fixed"></div>
        <div className={theme==="light"?"overflow-hidden bg-white block fixed w-screen h-screen  z-50 text-[color:var(--black)]":"overflow-hidden w-screen h-screen bg-[color:var(--about-tease-dark)] block fixed z-50"} ref={el => (revealProject = el)}>
        </div>
    </>

  )
}


export default ProjectUnswipe