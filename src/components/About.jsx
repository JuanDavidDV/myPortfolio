import { Link } from "react-router-dom"
import { RiReactjsLine } from "react-icons/ri";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedIn.png";
import { SiRubyonrails } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { BiLogoNetlify } from "react-icons/bi";

const About = () => {
  return (
    <section className="pg-4 lg:mb-36">
      <div class="flex flex-col min-h-screen items-center justify-center bg-gradient-to-tr to-blue-900 from-emerald-500 px-10">
        <div class="w-max md:py-10">
          <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-7xl text-white font-bold">
            Hello World
          </h1>
        </div>
        <br/>
        <div>
          <div className="w-max md:py-10">
            <h1 className=" animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl md:text-6xl text-white font-bold md:mb-10">
                I am Juan David Daza Velosa
            </h1>
          </div>
          <p className="mt-3 text-white md:text-xl ">
            Based in <span className="font-bold">Canada</span> 🍁. I am a passionate <span className="font-bold">Software Developer</span>, specialized in <span className="font-bold">Full-stack Development</span> through hands-on learning, and building real-world applications.   
          </p>
        </div>
        <div className="pt-10 flex gap-10 ">
          <a href="https://github.com/JuanDavidDV" target="_blank">
            <img src={github} className="w-14 pt-3 opacity-60 hover:opacity-100 rounded-xl"/>
          </a>
          <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
            <img src={linkedin} className="w-20 opacity-60 hover:opacity-100 rounded-xl"/>
          </a>
        </div>
      </div>
      <div className="pb-24">
        <h2 className="mt-20 mb-10 text-center text-4xl md:text-5xl text-gray-800 font-bold">
          Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-2 md:p-2 md:p-4">
            <SiRubyonrails className="text-5xl md:text-7xl text-red-500"/>
          </div>
          <div className="p-2 md:p-4">
            <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400" />
          </div>
          <div className="p-2 md:p-4">
            <SiJavascript className="text-5xl md:text-7xl text-yellow-400"/>
          </div>
          <div className="p-2 md:p-4">
            <SiMicrosoftsqlserver className="text-5xl md:text-7xl text-red-400" />
          </div>
          <div className="p-2 md:p-4">
            <BiLogoPostgresql className="text-5xl md:text-7xl text-blue-800" />
          </div>
          <div className="p-2 md:p-4">
            <FaNodeJs className="text-5xl md:text-7xl text-green-500" />
          </div>
          <div className="p-2 md:p-4">
            <SiExpress className="text-5xl md:text-7xl"/>
          </div>
          <div className="p-2 md:p-4">
            <IoLogoGithub className="text-5xl md:text-7xl" />
          </div>
          <div className="p-2 md:p-4">
            <FaGitAlt className="text-5xl md:text-7xl text-orange-600" />
          </div>
          <div className="p-2 md:p-4">
            <FaHtml5 className="text-5xl md:text-7xl text-orange-500" />
          </div>
          <div className="p-2 md:p-4">
            <IoLogoCss3 className="text-5xl md:text-7xl text-blue-600"/>
          </div>
          <div className="p-2 md:p-4">
            <FaSass className="text-5xl md:text-7xl text-pink-500"/>
          </div>
          <div className="p-2 md:p-4">
            <RiTailwindCssFill className="text-5xl md:text-7xl text-cyan-700"/>
          </div>
          <div className="p-2 md:p-4">
            <SiPostman className="text-5xl md:text-7xl text-orange-500" />
          </div>
          <div className="p-2 md:p-4">
            <GrHeroku className="text-5xl md:text-7xl text-purple-600"/>
          </div>
          <div className="p-2 md:p-4">
            <BiLogoNetlify className="text-5xl md:text-7xl text-teal-400"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Link>
          <button class="p-3 rounded-lg bg-blue-600 text-xl text-white hover:brightness-125 transition-all duration-150 text-center">Check my projects</button>
        </Link>
      </div>
        
    </section>
  )
}

export default About;