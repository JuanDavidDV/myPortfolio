import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  
  return (
    <section id="experience" className="bg-gradient-to-t from-teal-950 to-black">
      <div className="relative z-10 px-10 pt-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-20 text-center text-4xl md:text-5xl text-white font-bold drop-shadow-[0_0_20px_rgba(0,255,243,1)]"
        >
          Experience
        </motion.h2>

        <div>
          {EXPERIENCE.map((experience, index) => (
            <div key={index} className="pb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-slate-300">{experience.year}</p>
                <img
                  width={150}
                  height={100}
                  className="mb-3 rounded bg-white"
                  src={experience.image}
                  alt={experience.company}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold text-white">
                  {experience.role} -{" "}
                  <span className="text-l text-slate-200">
                    {experience.company}
                  </span>
                </h3>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.description.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-base text-white">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
