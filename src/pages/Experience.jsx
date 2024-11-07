import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <main>
      <div className="pb-4 mx-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl md:text-5xl text-gray-800 font-bold">Experience</motion.h2>
        <div>
          {EXPERIENCE.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-slate-700">
                  {experience.year}
                </p>
                <img width={150} height={100} className="mb-3 rounded" src={experience.image}/>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold">{experience.role} -{" "} 
                  <span className="text-sm text-slate-600">
                    {experience.company}  
                  </span>    
                </h3>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.description.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>    
            </div>
          ))}
        </div>
        <Link to="/contact">
          <button className="p-3 rounded-lg bg-blue-600 text-xl text-white hover:brightness-125 transition-all duration-150 text-center">Let's connect! Contact me</button>
        </Link>
      </div>
    </main>
  )
}

export default Experience;