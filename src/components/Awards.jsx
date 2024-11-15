import { motion } from "framer-motion";
import AmazonAward from "../assets/images/IndustryProjectAward.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Awards = () => {
  return (
    <section id="awards">
      <div className="pb-20 px-10 mt-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="pb-20 text-center text-4xl md:text-5xl text-gray-800 font-bold">Awards
        </motion.h2>
        <div className="flex flex-wrap lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}  
            className="w-full lg:w-[36%]">
            <div className="max-w-[400px] w-full lg:max-w-[none]">
              <a href="https://github.com/JuanDavidDV/amazon-industry-project" target="_blank">
                <img  src={AmazonAward} className="w-full h-auto mb-6 rounded cursor-pointer hover:brightness-150 transition-all duration-150" alt={"Industry Project Hackathon"} />
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-[46%] lg:ml-10">
            <h3 className="mb-2 font-semibold text-2xl">Hackathon Amazon and BrainStation</h3>
            <p className="mb-4 text-slate-700">Won 1st place in a collaborative hackathon Industry Project featuring Amazon and BrainStation. The main goal was to come up with an innovative solution to the problem statement: "How might we...improve the quality of Amazon reviews while
               ensuring user's privacy preferences?"    
            </p>
            <div className="mt-4 flex gap-2 items-center">
            <a href="https://github.com/JuanDavidDV/amazon-industry-project" target="_blank" className="flex gap-2 items-center rounded bg-stone-800 p-2 text-sm font-medium text-neutral-50 hover:text-black hover:bg-sky-300">
              GitHub
              <FaExternalLinkAlt className="mb-1" />
            </a>
            <a href="https://github.com/JuanDavidDV/amazon-industry-project/blob/main/BrainStation%20Industry%20Project.pdf" target="_blank" className="flex gap-2 items-center rounded bg-stone-800 p-2 text-sm font-medium text-neutral-50 hover:text-black hover:bg-sky-300">
                More Details
              <FaExternalLinkAlt className="mb-1" />
            </a>
          </div>
          </motion.div>   
        </div>             
      </div>
    </section>
  )
}

export default Awards;