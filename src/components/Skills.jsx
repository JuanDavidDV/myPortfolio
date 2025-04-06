import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
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
import { SiThreedotjs } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa6";

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
});

const Skills = () => {
  return (
    <section id="skills" className="py-7 px-5 mt-12 md:mt-0">
      <motion.h2
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl md:text-5xl text-white font-bold drop-shadow-[0_0_20px_rgba(0,255,243,1)]">
          Technologies
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 w-[90%] md:w-[80%] m-auto">
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-2 md:p-2 md:p-4">
          <DiRuby className="text-5xl md:text-7xl text-red-500 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-2 md:p-4">
          <SiRubyonrails className="text-5xl md:text-7xl text-red-500 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-2 md:p-4">
          <SiJavascript className="text-5xl md:text-7xl text-yellow-400 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-2 md:p-4">
          <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-2 md:p-4">
          <FaNodeJs className="text-5xl md:text-7xl text-green-500 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-2 md:p-4">
          <SiExpress className="text-5xl md:text-7xl text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-2 md:p-4">
          <SiThreedotjs className="text-5xl md:text-7xl text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-2 md:p-4">
          <BiLogoPostgresql className="text-5xl md:text-7xl text-blue-800 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-2 md:p-4">
          <SiMicrosoftsqlserver className="text-5xl md:text-7xl text-red-400 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-2 md:p-4">
          <FaHtml5 className="text-5xl md:text-7xl text-orange-500 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-2 md:p-4">
          <IoLogoCss3 className="text-5xl md:text-7xl text-blue-600 drop-shadow-[0_0_7px_rgba(255,255,255,0.3)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-2 md:p-4">
          <RiTailwindCssFill className="text-5xl md:text-7xl text-cyan-700 drop-shadow-[0_0_7px_rgba(255,255,255,0.3)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-2 md:p-4">
          <FaSass className="text-5xl md:text-7xl text-pink-500 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-2 md:p-4">
          <GrHeroku className="text-5xl md:text-7xl text-purple-600 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]"/>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-2 md:p-4">
          <FaUbuntu className="text-5xl md:text-7xl text-orange-600 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-2 md:p-4">
          <IoLogoGithub className="text-5xl md:text-7xl drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-2 md:p-4">
          <FaGitAlt className="text-5xl md:text-7xl text-orange-600 drop-shadow-[0_0_7px_rgba(255,255,255,0.3)]" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-2 md:p-4">
          <SiPostman className="text-5xl md:text-7xl text-orange-500 drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]" />
        </motion.div>
      </motion.div>
    </section>   
  )
};

export default Skills;
