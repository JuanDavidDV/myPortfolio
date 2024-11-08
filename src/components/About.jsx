import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 }}
};

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }

  }
})

const About = () => {
  return (
    <section className="pg-4 lg:mb-24">
      <div id="about" className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-tr to-blue-900 from-emerald-500 px-10">
        <div className="w-max md:py-10">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-5xl text-white font-bold">
            Hello World
          </h1>
        </div>
        <br/>
        <div>
          <div className="w-max md:py-10">
            <h1 className=" animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl md:text-5xl text-white font-bold md:mb-10">
                I am Juan David Daza Velosa
            </h1>
          </div>
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <p className="mt-3 text-white md:text-xl ">
              Based in <span className="font-bold">Canada</span> 🍁. I am a passionate <span className="font-bold">Software Developer</span>, specialized in <span className="font-bold">Full-stack Development</span> through hands-on learning, and building real-world applications.   
            </p>
          </motion.div>
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
    </section>
  )
}

export default About;