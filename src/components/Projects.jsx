import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Projects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);  

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 1.0,
        vy: (Math.random() - 0.5) * 1.0,
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > width) s.vx *= -1;
        if (s.y < 0 || s.y > height) s.vy *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      drawLines();
    }

    const drawLines = () => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="px-10 relative bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />
      <div className="relative z-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="py-20 text-center text-4xl md:text-5xl text-white font-bold drop-shadow-[0_0_20px_rgba(0,255,243,1)]">Projects</motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="pb-12 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
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
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 lg:ml-10">
                <h3 className="mb-2 font-semibold text-2xl text-white">{project.title}</h3>
                <p className="mb-4 text-slate-300">{project.description}</p>
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
      </div>
    </section>
  )
};

export default Projects;
