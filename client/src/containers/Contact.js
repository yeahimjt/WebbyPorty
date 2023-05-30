import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import { SiLinkedin } from 'react-icons/si'
import { BsMailbox2 } from 'react-icons/bs'
import {BiMessageError} from 'react-icons/bi'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
const Contact = ({alert, setAlert}) => {
  const {theme, setTheme} = useContext(ThemeContext)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [body, setBody] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !body) {
      setAlert([<BiMessageError size={60}/>, "Your email was not sent!", "You are missing a necessary field."])
      return
    }
    console.log(name, email,body)
    const response = await fetch("http://localhost:5000/send", {
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
            setAlert([<IoMdCheckmarkCircleOutline size={60}/>, "Your email was sent!", "A response is headed back your way!"])
          } else if (resData.status === "fail") {
            console.log('out')
            setAlert([<BiMessageError size={60}/>, "Your email was not sent!", "There is an error with the mailing service. Sorry for the inconvinience."])
          }
        })
      .then(() => {
        setName(null)
        setEmail(null)
        setBody(null)
      });
  }
  return (
    <div className={theme==="light"?"pb-32":"pb-32 bg-[color:var(--black)]"}>
      <h1 className={theme==="light"? "mx-auto w-max pt-16 font-heading text-big leading-snug px-4 text-black  max-w-[714px]" : "mx-auto w-max pt-16 font-head ing text-big leading-snug px-4 text-white max-w-[714px]"}>Contact</h1>
      <p className={theme==="light"? "mx-auto w-max pt-16 font-paragraph text-med leading-snug px-4 text-black  max-w-[714px] relative -top-12" : "mx-auto w-max pt-16 font-paragraph text-med leading-snug px-4 text-white max-w-[714px] relative -top-12"}><i className="text-[color:var(--light-blue)] text-med">Lets Connect</i> - Reach out to discuss potential projects, collaborations, or simply to say hello.</p>
      <div className="flex gap-6 justify-center py-16">
        <a href="https://linkedin.com/in/jonathanandrewtrevino" target="_blank" rel="noreferrer" className="flex gap-2 items-center justify-center bg-[color:#0077B5] rounded-lg px-8 py-2 text-white hover:scale-105 hover:shadow-lg hover:cursor-pointer font-paragraph"><SiLinkedin size={32}/><p className="text-base">LinkedIn</p></a>
        <a href="mailto:yeahimjt@gmail.com" className={theme==="light"?"flex gap-2 items-center justify-center border-2 border-[color:var(--light-blue)] px-8 py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:cursor-pointer font-paragraph":"flex gap-2 items-center justify-center border-2 border-[color:var(--light-blue)] px-8 py-2 text-white font-paragraph rounded-lg hover:scale-105 hover:shadow-lg hover:cursor-pointer"}><BsMailbox2 size={32} /><p className="text-base">yeahimjt@gmail.com</p></a>
      </div>
      <form className="flex flex-col justify-center items-center max-w-[914px] gap-6  mx-auto p-8">
        <input className="w-full resize-y px-4 py-4 rounded-lg bg-[color:#E8E8E8] focus:scale-105 transition-all" type="text" placeholder="Full Name" value={name || ''} onChange={(e)=> setName(e.target.value)}/>
        <input  className="w-full resize-y px-4 py-4 rounded-lg bg-[color:#E8E8E8] focus:scale-105 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all" type="email" value={email || ''} placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)}/>
        <textarea className="w-full resize-y px-4 py-4 rounded-lg bg-[color:#E8E8E8] focus:scale-105 transition-all" type="text" placeholder="Your Message" value={body || ''} onChange={(e)=> setBody(e.target.value)}/>
        <button className="bg-test w-full py-4 rounded-lg mt-4 text-white hover:scale-105  transition-all" onClick={(e)=> {handleSubmit(e)}}>Start a Conversation</button>
      </form>
    </div>
  )
}

export default Contact