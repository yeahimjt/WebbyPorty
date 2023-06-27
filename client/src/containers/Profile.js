import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { BsArrowRight, BsLinkedin, BsMailbox, BsMailbox2 } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import Memoji from '../assets/ezgif.com-video-to-gif.gif'
import { useInView } from 'react-intersection-observer';
import { TbMailbox } from 'react-icons/tb';


const Profile = () => {
  const {theme} = useContext(ThemeContext)
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView({
    triggerOnce: true
  });
  return (
   
    <div className={theme==="light"?"relative py-64 px-12 h-full":"bg-[color:var(--black)] relative py-64 px-12 text-white h-full"} id="profile">
        <div className="px-8 py-2 bg-red-50 w-fit -rotate-12 relative">
            <h1 className="font-heading text-med text-black">Who I am</h1>
        </div>
        <div className="flex tablet:flex-row flex-col gap-12">
            <div className="flex flex-col pt-16 flex-[0.5] gap-4">
                <h1 className="font-paragraph text-med">Passionate Developer with agile expertise and a profound technological palette.</h1>
                <p className="font-paragraph text-sm">A summary of who I am.</p>
            </div>
            <hr className=" border-[1px] bg-black  tablet:h-[520px] hidden tablet:block"/>
            <div className="flex flex-col pt-16 flex-[0.5] gap-4">
                <div className="flex mobile:flex-row flex-col gap-6">
                  <img src={Memoji} className="w-[120px] h-[140px] object-cover tablet:m-0" />
                  <div className="flex flex-col">
                    <h1 className="font-heading text-med">Jonathan Andrew Trevino</h1>
                    <p>📍 Edinburg, Texas | Software Engineer</p>
                    <div className="flex gap-4 p-4 pl-0">
                      <a className="bg-[color:var(--p-high)] tablet:px-12 px-6 py-2 flex w-fit text-sm text-white gap-4 items-center hover:cursor-pointer hover:scale-[1.01]" href="https://linkedin.com/in/jonathan-trevino" target="_blank" rel="noreferrer"><BsLinkedin size={30}>Connect</BsLinkedin>Connect</a>
                      <a className="bg-[color:var(--p-high)] tablet:px-12 px-6 py-2 flex w-fit text-sm text-white gap-4 items-center hover:cursor-pointer hover:scale-[1.01]" href="/contact"><TbMailbox size={30}>Message</TbMailbox>Message</a>
                    </div>
                  </div>
                </div>
                <h2 className="font-heading text-med">About Me</h2>
                <p className="font-paragraph text-sm">Having an extensive background in computer science, I possess a broad foundation of various programming languages, enabling me to rapidly adapt to new technologies by leveraging my grasp of fundamental programming principles. I enjoy pushing my knowledge beyond just making things work, I go a step further to understand why it works to strengthen my knowledge. I take great pride in the work I do.</p>
            </div>
        </div>
    </div>

  )
}

export default Profile