import { useEffect, useRef } from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(0);

    const drawMatrixRain = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = "rgba(31, 129, 1, 0.56)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.5) continue;

        const character = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(character, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] = drops[i] + 0.5;
      }
    };

    const animate = () => {
      drawMatrixRain();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="experience" className="relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />
      <div className="relative z-10 px-10 pt-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
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
                className="w-full max-w-xl lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold text-white">
                  {experience.role} -{" "}
                  <span className="text-sm text-slate-200">
                    {experience.company}
                  </span>
                </h3>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.description.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-sm text-white">
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
