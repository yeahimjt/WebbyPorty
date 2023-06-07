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
            // close menu
            gsap.to([revealProject, revealProjectBackground], {
                duration: 0.6,
                width:0,
                ease: 'power3.inOut',
                stagger: {
                    amount:.07
                }
    
            })
        } else if (projectState.clicked === true || (projectState.clicked === true && projectState.initial === null)) {
            // open menu
            console.log('in here')
            gsap.to([revealProject, revealProjectBackground], {
                duration:0,
                opacity:1,
                diplay:'block',
                left:'-100',
                skewX: 4,
                top:0,
                width:0,
            })
            staggerReveal(revealProjectBackground,revealProject)
            setTimeout(()=> {
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
        <div ref={el => (revealProjectBackground = el)} className="bg-[color:var(--light-blue)] opacity-0   top-0 bottom-0 left-0 right-0 w-full h-full z-40 overflow-hidden fixed"></div>
        <div className={theme==="light"?"overflow-hidden bg-white block fixed w-screen h-screen opacity-0 z-50 text-[color:var(--black)]":"overflow-hidden w-screen h-screen bg-[color:var(--about-tease-dark)] block fixed opacity-0 z-50"} ref={el => (revealProject = el)}>
        </div>
    </>

  )
}


export default ProjectUnswipe