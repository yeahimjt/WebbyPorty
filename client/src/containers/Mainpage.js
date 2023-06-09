import React, { useEffect } from 'react'
import Homepage from './Homepage'
import AboutTease from './AboutTease'
import Projects from './Projects'
import Profile from './Profile'
import Contact from './Contact'
import { useLocation } from 'react-router-dom'
import Skills from './Skills'
import Experience from './Experience'
import Footer from '../components/Footer'

const Mainpage = ({alert, setAlert}) => {
  const location = useLocation()
  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } 
}, [location])
  return (
    <>
    <Homepage />
    <AboutTease />
    <Projects />
    <Profile />
    <Skills />
    <Experience />
    {/* <Contact alert={alert} setAlert={setAlert}/> */}
    <Footer />
    </>
  )
}

export default Mainpage