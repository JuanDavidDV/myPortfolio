import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";


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

const About = () => {
  return (
    <section id="about" className="pg-4 lg:mb-24 w-dvh">
      <div id="about" className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-tr to-blue-900 from-emerald-500 px-5 md:px-10">
        <div className="mb-4">
          <h1 className="type-name text-center text-4xl text-white md:text-5xl font-bold">              
          </h1>
        </div>
        <br/>
        <div>
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex justify-center">
            <p className="text-center text-white text-lg md:text-lg w-[100%] md:w-[70%]">
              Based in <span className="font-bold">Canada</span> 🍁. I am a passionate <span className="font-bold">Software Developer</span>, specialized in <span className="font-bold">Full-stack Development</span> through hands-on learning, and building real-world applications.   
            </p>
          </motion.div>
        </div>
        <div className="pt-10 flex gap-7">
          <a href="https://github.com/JuanDavidDV" target="_blank">
            <BsGithub className="w-10 pt-3 text-5xl opacity-60 hover:opacity-100 rounded-xl" />
          </a>
          <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
            <IoLogoLinkedin className="w-10 pt-3 text-5xl opacity-60 hover:opacity-100 rounded-xl" />
          </a>
        </div>
      </div>
    </section>
  )
};

export default About;