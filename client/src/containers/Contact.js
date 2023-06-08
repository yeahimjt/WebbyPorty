import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import { SiLinkedin } from 'react-icons/si'
import { BsMailbox2 } from 'react-icons/bs'
import {BiMessageError} from 'react-icons/bi'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {TbMailFast} from 'react-icons/tb'
import { useInView } from 'react-intersection-observer'
const Contact = ({alert, setAlert}) => {
  const {theme} = useContext(ThemeContext)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [body, setBody] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !body) {
      setAlert([<BiMessageError  className="alert-icon text-4xl"  />, "Your email was not sent!", "You are missing a necessary field."])
      return
    }
    setAlert([
      <TbMailFast className="alert-icon text-4xl"/>,
      "Your email is sending!",
      "Update Pending..."
      ])
     await fetch("https://web-portfolio-l9jd.onrender.com/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ 
        name,
        email,
        body
       }),
    })
      .then((res) => res.json())
      .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success") {
            console.log('here')
            setAlert([<IoMdCheckmarkCircleOutline  className="alert-icon text-4xl" />, "Your email was sent!", "A response is headed back your way!"])
          } else if (resData.status === "fail") {
            console.log('out')
            setAlert([<BiMessageError className="alert-icon text-4xl"  />, "Your email was not sent!", "There is an error with the mailing service. Sorry for the inconvinience."])
          }
        })
      .then(() => {
        setName(null)
        setEmail(null)
        setBody(null)
      });
  }
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView({
    triggerOnce: true
  });
  return (
    <div className={theme==="light"?"pb-32":"pb-32 bg-[color:var(--black)]"} id="contact">
      <h1 className={theme==="light"? "mx-auto w-max pt-16 font-heading text-med title:text-big leading-snug px-4 text-black  max-w-[714px text-left]" : "mx-auto w-max pt-16 font-heading text-med title:text-big leading-snug px-4 text-white max-w-[714px]"}>Contact</h1>
      <p className={theme==="light"? " mx-auto pt-16 font-paragraph text-sm title:text-med leading-snug px-4 text-black  max-w-[714px] relative -top-12" : "mx-auto pt-16 font-paragraph text-sm title:text-med leading-snug px-4 text-white max-w-[714px] relative -top-12"}><i className="text-[color:var(--light-blue)] text-sm title:text-med">Lets Connect</i> - Reach out to discuss potential projects, collaborations, or simply to say hello!</p>
      <div ref={myRef4} className="flex gap-6 mobile:flex-row flex-col justify-center py-16 flex-wrap">
        <a href="https://linkedin.com/in/jonathanandrewtrevino" target="_blank" rel="noreferrer" className="flex gap-2 w-[80%] mobile:w-max mx-auto mobile:m-0 items-center justify-center bg-[color:#0077B5] rounded-lg px-8 py-2 text-white hover:scale-105 hover:shadow-lg hover:cursor-pointer font-paragraph transition-all"><SiLinkedin size={32}/><p className="text-base">LinkedIn</p></a>
        <a href="mailto:yeahimjt@gmail.com" className={theme==="light"?"flex gap-2 items-center justify-center border-2 w-[80%]  mobile:w-max mx-auto mobile:m-0 border-[color:var(--light-blue)] px-8 py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:cursor-pointer font-paragraph transition-all":"flex w-[80%]  mobile:w-max mx-auto mobile:m-0 gap-2 items-center justify-center border-2 border-[color:var(--light-blue)] px-8 py-2 text-white font-paragraph rounded-lg hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-all"}><BsMailbox2 size={32} /><p className="text-base">yeahimjt@gmail.com</p></a>
      </div>
      <form className="flex flex-col justify-center items-center max-w-[914px] gap-6  mx-auto p-8">
        <input className={`${theme==="light"? "w-full resize-y px-4 py-4 rounded-lg bg-[color:#E8E8E8] focus:scale-105 transition-all" : "w-full resize-y px-4 py-4 rounded-lg bg-[color:#777777] text-white focus:scale-105 transition-all placeholder-white"} ${myElementIsVisible4 ? 'animate-fade-right animate-once animation-delay-100 animate-duration-1000  animate-ease-in-out animate-normal animate-fill-backwards' : ''}`} type="text" placeholder="Full Name" value={name || ''} onChange={(e)=> setName(e.target.value)}/>
        <input  className={`${theme==="light"? " w-full resize-y px-4 py-4 rounded-lg bg-[color:#E8E8E8] focus:scale-105 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all" : "w-full resize-y px-4 py-4 rounded-lg bg-[color:#777777] text-white focus:scale-105 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-red-300 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all placeholder-white"} ${myElementIsVisible4 ? 'animate-fade-left animation-delay-200 animate-fill-backwards animate-once animate-duration-1000 animate-ease-in-out animate-normal' : ''}`} type="email" value={email || ''} placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)}/>
        <textarea className={`${theme==="light"? " w-full resize-y px-4 py-4 rounded-lg bg-[color:#E8E8E8] focus:scale-105 transition-all" : "w-full resize-y px-4 py-4 rounded-lg bg-[color:#777777] text-white focus:scale-105 transition-all placeholder-white"} ${myElementIsVisible4 ? 'animate-fade-right animate-once animate-duration-1000 animate-fill-backwards animation-delay-300 animate-ease-in-out animate-normal' : ''}`} type="text" placeholder="Your Message" value={body || ''} onChange={(e)=> setBody(e.target.value)}/>
        <button className={`${"bg-test w-full py-4 rounded-lg mt-4 text-white hover:scale-105  transition-all" } ${myElementIsVisible4 ? 'animate-fade-left animate-once animate-duration-1000 animation-delay-400 animate-fill-backwards animate-ease-in-out animate-normal ' : ''}`} onClick={(e)=> {handleSubmit(e)}}>Start a Conversation</button>
      </form>
    </div>
  )
}

export default Contact