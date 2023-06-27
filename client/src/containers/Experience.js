import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { Tooltip } from 'react-tooltip'
import { BsArrowRight } from 'react-icons/bs'
const Experience = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme==="light"?"relative py-64 px-12":"bg-[color:var(--black)] relative py-64 px-12 text-white"}>
        <div className="px-8 py-2 bg-red-50 w-fit -rotate-12 relative">
            <h1 className="font-heading text-med text-black">What I Do</h1>
        </div>
        <div className="flex tablet:flex-row flex-col gap-12">
            <div className="flex flex-col pt-16 flex-[0.5] gap-4">
                <h1 className="font-paragraph text-med">Transform abstract ideas into tangible solutions that shape the future of technology.</h1>
                <p className="font-paragraph text-sm">I enjoy developing meaningful experiences for brands & businesses to help them serve their target users.</p>
            </div>
            <hr className=" border-[1px] bg-black  tablet:h-[800px] hidden tablet:block"/>
            <div className="flex flex-col pt-16 flex-[0.5] gap-4">

          <div className={theme==="light"?"flex justify-center gap-6 mobile:gap-32 items-center flex-[0.5] relative h-[400px] hover:bg-[color:var(--skill-tease)] rounded-full select-none my-tool":"flex justify-center gap-6 mobile:gap-32  items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease-dark)] rounded-full select-none my-tool"} data-tooltip-id='my-tool' data-tooltip-place='bottom' data-data-tooltip-offset={10} data-tooltip-content="Designed & Developed a realtor web application end-to-end for Glass Realty, aimed at fostering mutual benefits between consumers and realtors through the utilization of shared data. This platform enables them to generate keys from the data they post, offering opportunities for financial gains and self-promotion on the website. The application was developed using React, HTML, Tailwind, and SQL as key technologies.">
            <p className="text-sm text-center w-[100px]">2023</p>
            <div className="w-[287px]">
              <p className="text-sm text-[color:var(--light-blue)]">Full Stack Developer</p>
              <p className="text-xs italic">at Glass Realty working on myLlave</p>
            </div>
          </div>
          <hr/>
          <div className={theme==="light"?"flex justify-center gap-6 mobile:gap-32 items-center flex-[0.5] relative h-[400px] hover:bg-[color:var(--skill-tease)] rounded-full select-none my-tool":"flex justify-center gap-6 mobile:gap-32  items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease-dark)] rounded-full select-none my-tool"} data-tooltip-id='my-tool' data-tooltip-place='bottom' data-data-tooltip-offset={10} data-tooltip-content="Through this comprehensive course, I have acquired the necessary skills and knowledge to thrive in the dynamic field of front-end web development. The program provided me with hands-on experience and a deep understanding of essential concepts such as HTML, CSS, JavaScript, responsive design, user interface (UI) development, and web accessibility. The curriculum was thoughtfully designed to offer a well-rounded education that combines theoretical foundations with practical application. Led by industry experts, the certificate program ensured that I stayed up-to-date with the latest industry standards and best practices in web development">
            <p className="text-sm text-center w-[100px]">2023</p>
            <div className="w-[287px]">
              <p className="text-sm text-[color:var(--light-blue)]">Front End Developer Certificate</p>
              <p className="text-xs italic">provided by Meta through Coursera</p>
            </div>
          </div>
          <hr/>
          <div className={theme==="light"?"flex justify-center gap-6 mobile:gap-32 items-center flex-[0.5] relative h-[400px] hover:bg-[color:var(--skill-tease)] rounded-full select-none my-tool":"flex justify-center gap-6 mobile:gap-32  items-center flex-[0.5] relative h-[300px] hover:bg-[color:var(--skill-tease-dark)] rounded-full select-none my-tool"} data-tooltip-id='my-tool' data-tooltip-place='bottom' data-data-tooltip-offset={10} data-tooltip-content="Through collaborative projects and practical experiences with a wide range of programming languages, I honed my problem-solving and communication skills, preparing me for diverse roles in the technology industry and fostering continuous learning and growth.">
            <p className="text-sm text-center w-[100px]">2019-2022</p>
            <div className="w-[287px]">
              <p className="text-sm text-[color:var(--light-blue)]">University of Texas at San Antonio</p>
              <p className="text-xs italic">completed Bachelor of Computer Science<br/> with minor in Cyber Security</p>
            </div>
          </div>
          <Tooltip anchorSelect='.my-tool'  style={{width: '300px', backgroundColor: theme === 'light' ? 'black' : 'white', color: theme==='light' ? 'white' : 'black', overflow: 'visible'}}/>
        <Tooltip anchorSelect='.tool'  style={{width: '200px', backgroundColor: theme === 'light' ? 'black' : 'white', color: theme==='light' ? 'white' : 'black', overflow: 'visible', textAlign: 'center'}}/>
        </div>
            </div>
        </div>

    
        

  )
}

export default Experience