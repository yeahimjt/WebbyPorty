import React from 'react'
import Homepage from './Homepage'
import AboutTease from './AboutTease'
import Projects from './Projects'
import Profile from './Profile'
import Contact from './Contact'

const Mainpage = ({alert, setAlert}) => {
  return (
    <>
    <Homepage />
    <AboutTease />
    <Projects />
    <Profile />
    <Contact alert={alert} setAlert={setAlert}/>
    </>
  )
}

export default Mainpage