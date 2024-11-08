import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
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
});

const Skills = () => {
  return (
    <section id="skills" className="pb-5 mx-5">
      <motion.h2
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 text-center text-4xl md:text-5xl text-gray-800 font-bold">
          Technologies
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="w-full h-full object-cover rounded-md">
            <SiRubyonrails className="text-5xl md:text-7xl text-red-500"/>
            <div className="absolute inset-0 flex items-end text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                Ruby on Rails
            </div>
          </motion.div>
        </div>  
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="w-full h-full object-cover rounded-md">
            <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                React JS
            </div>
          </motion.div>
        </div>  
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="w-full h-full object-cover rounded-md">
            <SiJavascript className="text-5xl md:text-7xl text-yellow-400"/>
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                JavaScript
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="w-full h-full object-cover rounded-md">
            <SiMicrosoftsqlserver className="text-5xl md:text-7xl text-red-400" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              MS SQL Server
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="w-full h-full object-cover rounded-md">
            <BiLogoPostgresql className="text-5xl md:text-7xl text-blue-800" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              PostgreSQL
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="w-full h-full object-cover rounded-md">
            <FaNodeJs className="text-5xl md:text-7xl text-green-500" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Node.js
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="w-full h-full object-cover rounded-md">
            <SiExpress className="text-5xl md:text-7xl"/>
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Express.js
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="w-full h-full object-cover rounded-md">
            <IoLogoGithub className="text-5xl md:text-7xl" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              GitHub
            </div>  
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="w-full h-full object-cover rounded-md">
            <FaGitAlt className="text-5xl md:text-7xl text-orange-600" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Git
            </div>  
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="w-full h-full object-cover rounded-md">
            <FaHtml5 className="text-5xl md:text-7xl text-orange-500" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              HTML
            </div>  
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="w-full h-full object-cover rounded-md">
            <IoLogoCss3 className="text-5xl md:text-7xl text-blue-600"/>
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              CSS
            </div>  
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="w-full h-full object-cover rounded-md">
            <FaSass className="text-5xl md:text-7xl text-pink-500"/>
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Sass
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="w-full h-full object-cover rounded-md">
            <RiTailwindCssFill className="text-5xl md:text-7xl text-cyan-700"/>
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Tailwind
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="w-full h-full object-cover rounded-md">
            <SiPostman className="text-5xl md:text-7xl text-orange-500" />
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Postman
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="w-full h-full object-cover rounded-md">
            <GrHeroku className="text-5xl md:text-7xl text-purple-600"/>
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Heroku
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="w-full h-full object-cover rounded-md">
            <BiLogoNetlify className="text-5xl md:text-7xl text-teal-400"/>
            <div className="absolute inset-0 flex items-end justify-center text-center bg-black bg-opacity-50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              Netlify
            </div>
          </motion.div>
        </div>
      </motion.div>  
      <div className="flex justify-center mt-20">
        <Link to="/projects">
          <button className="p-3 rounded-lg bg-blue-600 text-xl text-white hover:brightness-125 transition-all duration-150 text-center">Check my projects</button>
        </Link>
      </div>
    </section>   
  )
};

export default Skills;
