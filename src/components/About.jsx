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
        <h2 className="mt-20 mb-10 text-center text-5xl font-bold">
          Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4">
            <SiRubyonrails className="text-7xl text-red-500"/>
          </div>
          <div className="p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4">
            <SiJavascript className="text-7xl text-yellow-400"/>
          </div>
          <div className="p-4">
            <SiMicrosoftsqlserver className="text-7xl text-red-400" />
          </div>
          <div className="p-4">
            <BiLogoPostgresql className="text-7xl text-blue-800" />
          </div>
          <div className="p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
          <div className="p-4">
            <SiExpress className="text-7xl"/>
          </div>
          <div className="p-4">
            <IoLogoGithub className="text-7xl" />
          </div>
          <div className="p-4">
            <FaGitAlt className="text-7xl text-orange-600" />
          </div>


        </div>


      </div>
    </section>
  )
}

export default About;