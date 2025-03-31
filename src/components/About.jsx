import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { data } from "../assets/data";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react"

const PATHS = data.economics[0].paths[0];

const curves = [];
// Curves look
for (let i = 0; i < 100; i++) {
  let points = [];
  // Points look
  for(let j = 0; j < 100; j++) {  
  points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        (i / 100) * Math.PI,
        (j / 100) * Math.PI *2
      )
    );
  }
  let tempCurve = new THREE.CatmullRomCurve3(points);
  curves.push(tempCurve);
};

console.log(curves)

const Tube = ({curve}) => {
 /*  const points = [];
  for (let i = 0; i < 10; i++) {
    points.push(new THREE.Vector3((i - 5) * 0.5, Math.sin(i * 2) * 10 + 5, 0));
  }
  const curve = new THREE.CatmullRomCurve3(points) */
  return <>
    <mesh>
      <tubeGeometry args={[curve, 64, 0.1, 8, false]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </>
};

const Tubes = () => {
  return (
    <>
      {curves.map((curve, index) => (
        <Tube curve={curve} key={index} />
      ))}
    </>
  )
};

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
    const canvasContainerRef = useRef(null);
    const [canvasHeight, setCanvasHeight] = useState("50vh");
  
    useEffect(() => { // useEffect created to force canvas size. Tailwind was affecting default size
      const updateCanvasSize = () => {
        if (canvasContainerRef.current) {
          const parentHeight = canvasContainerRef.current.clientHeight;
          setCanvasHeight(`${parentHeight}px`);
        }
      };
  
      updateCanvasSize();
      window.addEventListener("resize", updateCanvasSize);
  
      return () => window.removeEventListener("resize", updateCanvasSize);
    }, []);
  
    return (
      <section
        id="about"
        className="relative flex flex-col gap-5 lg:mb-24 w-dvh bg-gradient-to-tr to-blue-900 from-emerald-500 px-5 md:px-12 min-h-screen">  
        <div id="about" className="relative z-10 flex flex-col pt-20">
          <div>
            <h1 className="type-name text-4xl text-white md:text-5xl font-bold"></h1>
          </div>
          <br />
          <div>
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <p className="text-white text-lg md:text-lg w-[100%] md:w-[70%]">
                Based in <span className="font-bold">Canada</span> 🍁. I am a passionate <span className="font-bold">Software Developer</span>, specialized in <span className="font-bold">Full-stack Development</span> through hands-on learning, and building real-world applications.   
              </p>
            </motion.div>
          </div>
          <div className="w-[40%]">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <div className="pt-2 flex gap-7">
                <a href="https://github.com/JuanDavidDV" target="_blank">
                  <BsGithub className="w-10 pt-3 text-5xl opacity-60 hover:opacity-100 rounded-xl" />
                </a>
                <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
                  <IoLogoLinkedin className="w-10 pt-3 text-5xl opacity-60 hover:opacity-100 rounded-xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div ref={canvasContainerRef} className="absolute top-32 left-0 w-full h-full z-0">
          <Canvas style={{ width: "100%", height: canvasHeight }} className="absolute top-0 left-0">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Tubes />
            <OrbitControls />
          </Canvas>
        </div>
      </section>
  )
};

export default About;
