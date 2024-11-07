import { PROJECTS } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-10 mx-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5  }}
        className="mb-10 text-center text-4xl md:text-5xl text-gray-800 font-bold">Projects</motion.h2>
          <div>
            {PROJECTS.map((project, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                  whileInView={{ opacity: 1, x: 0}}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}  
                  className="w-full lg:w-1/4">
                  <a href={project.link} target="_blank">
                    <img src={project.image}
                      width={400}
                      height={400}
                      alt={project.title}
                      className="mb-6 rounded cursor-pointer hover:brightness-75 transition-all duration-150"
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100}}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4 lg:ml-10">
                  <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                  <p className="mb-4 text-slate-700">{project.description}</p>
                  {project.technologies.map((tech, index) => (
                    <span className="mr-2 rounded bg-teal-400 p-2 text-sm font-medium text-neutral-50" key={index}>
                      {tech}
                    </span>
                  ))}
                  <div className="mt-4">
                    <a href={project.githubLink} target="_blank" className="rounded bg-stone-800 p-2 text-sm font-medium text-neutral-50 hover:text-black hover:bg-sky-300">
                      GitHub Repository
                    </a>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
          <div className="flex justify-center my-10">
          <Link to="/experience">
            <button className="p-3 rounded-lg bg-blue-600 text-xl text-white hover:brightness-125 transition-all duration-150 text-center">Check my experience</button>
          </Link>
        </div>
    </section>
  )
}

export default Projects;