import React, { useContext, useRef, useState } from 'react'
import { ProjectAnimationContext, ThemeContext } from '../App'
import { SiLinkedin } from 'react-icons/si'
import { BsArrowRight, BsMailbox2 } from 'react-icons/bs'
import {BiMessageError} from 'react-icons/bi'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {TbMailFast} from 'react-icons/tb'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert'
import ProjectUnswipe from '../components/ProjectUnswipe'
const Contact = ({alert, setAlert}) => {
  const {theme} = useContext(ThemeContext)
  const form = useRef()
  const {projectState, setProjectState} = useContext(ProjectAnimationContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.current.name.value || !form.current.email_address.value || !form.current.message.value) {
      setAlert([<BiMessageError  className="alert-icon text-4xl"  />, "Your email was not sent!", "You are missing a necessary field."])
    }
    else {
      emailjs.sendForm('service_pad3i59', 'template_02bil6k', form.current, 'ipCsKrtr9rzkVZBdD')
      .then((result) => {
        setAlert([<IoMdCheckmarkCircleOutline  className="alert-icon text-4xl" />, "Your email was sent!", "A response is headed back your way!"])
      }, (error) => {
        setAlert([<BiMessageError className="alert-icon text-4xl"  />, "Your email was not sent!", "There is an error with the mailing service. Sorry for the inconvinience."])
      })
    }
  }
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView({
    triggerOnce: true
  });
  return (
    <>
      <ProjectUnswipe projectState={projectState} setProjectState={setProjectState}/>
    <div className={theme==="light"?"relative py-64 px-12 h-screen":"bg-[color:var(--black)] relative py-64 px-12 text-white h-screen"} id="profile">
      <div className="px-8 py-2 bg-red-50 w-fit -rotate-12 relative">
        <h1 className="font-heading text-med text-black">Let's Chat</h1>
      </div>
      <div className="flex tablet:flex-row flex-col gap-12">
        <div className="flex flex-col pt-16 flex-[0.5] gap-4">
          <h1 className="font-paragraph text-med">Open to recruitment and project collaborations.</h1>
          <p className="font-paragraph text-sm">Your ideas matter, and I'm here to transform them into reality. Fill out the contact form below, and I promise to reply swiftly.</p>
        </div>
        <div className="flex flex-col pt-16 flex-[0.5] gap-4">
          <form ref={form} className="flex flex-col gap-4 p-4">
            <input name="name" className={theme==="light"?"rounded-3xl px-8 py-4 bg-[color:var(--p-pink)] placeholder-black/70 focus:scale-[1.01] focus:shadow-md":"bg-[color:var(--p-pink)] rounded-3xl placeholder-black/70 px-8 py-4 focus:scale-[1.01] focus:shadow-md"} placeholder="Full Name"></input>
            <input name="email_address" className={theme==="light"?"rounded-3xl px-8 py-4 bg-[color:var(--p-yellow)] placeholder-black/70 focus:scale-[1.01] focus:shadow-md":"bg-[color:var(--p-yellow)] rounded-3xl placeholder-black/70 px-8 py-4 focus:scale-[1.01] focus:shadow-md"} placeholder="Your Email Address"></input>
            <textarea name="message" className={theme==="light"?"rounded-bottomright px-8 py-4 bg-[color:var(--p-green)] placeholder-black/70 focus:scale-[1.01] focus:shadow-md":"bg-[color:var(--p-green)] rounded-bottomright placeholder-black/70 px-8 py-4 focus:scale-[1.01] focus:shadow-md text-black"} placeholder="Your Idea"></textarea>
            <button className="font-paragraph text-sm bg-[color:var(--p-high)] px-6 py-1 mt-2 flex items-center gap-2 hover:gap-4 hover:cursor-pointer transition-all justify-center rounded-2xl group" onClick={(e)=> {handleSubmit(e)}}>About Me <BsArrowRight size={30} className="group-hover:border-2 rounded-full p-1 transition-all"></BsArrowRight></button>
          </form>
        </div>
      </div>
    </div>
    {
      alert ?
      <Alert alert={alert} setAlert={setAlert}/>
      :
      ''
    }
    </>
  )
}

export default Contact