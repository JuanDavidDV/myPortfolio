import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="px-10 bg-slate-50">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5  }}
        className="py-20 text-center text-4xl md:text-5xl text-gray-800 font-bold">Projects</motion.h2>
          <div>
            {PROJECTS.map((project, index) => (
              <div key={index} className="pb-12 flex flex-wrap lg:justify-center">
                <motion.div
                  whileInView={{ opacity: 1, x: 0}}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}  
                  className="w-full lg:w-1/4">
                    <div className="max-w-[400px] w-full lg:max-w-[none]">
                      <a href={project.link} target="_blank" >
                        <img src={project.image}
                          width={400}
                          height={400}
                          alt={project.title}
                          className="mb-6 rounded cursor-pointer hover:brightness-75 transition-all duration-150"
                        />
                      </a>
                    </div>  
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100}}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4 lg:ml-10">
                  <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                  <p className="mb-4 text-slate-700">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <span className="mr-2 mb-2 rounded bg-teal-500 p-2 text-sm font-medium text-neutral-50" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2 items-center">
                    <a href={project.githubLink} target="_blank" className="flex gap-2 items-center rounded bg-stone-800 p-2 text-sm font-medium text-neutral-50 hover:text-black hover:bg-sky-300">
                      GitHub
                      <FaExternalLinkAlt className="mb-1" />
                    </a>
                    <a href={project.link} target="_blank" className="flex gap-2 items-center rounded bg-stone-800 p-2 text-sm font-medium text-neutral-50 hover:text-black hover:bg-sky-300">
                      Website
                      <FaExternalLinkAlt className="mb-1" />
                    </a>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
    </section>
  )
}

export default Projects;