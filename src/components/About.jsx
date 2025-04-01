import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { data } from "../assets/data";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react"

const PATHS = data.economics[0].paths[0];

const randomRange = (min, max) => Math.random() * (max - min) + min;
const curves = [];
// Curves look
for (let i = 0; i < 100; i++) {
  let points = [];
  let lenght = randomRange(0.1, 1)
  // Points look
  for(let j = 0; j < 100; j++) {  
  points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        Math.PI - (j / 100) * Math.PI * lenght,
        (i / 100) * Math.PI * 2
      )
    );
  }
  let tempCurve = new THREE.CatmullRomCurve3(points);
  curves.push(tempCurve);
};

const Tube = ({curve}) => {
  const brainMat = useRef();

  const BrainMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.4, 0.1) },
    // vertex shader
    /*glsl*/`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    // fragment shader
    /*glsl*/`
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      void main() {
        gl_FragColor.rgba = vec4(color,1.);
      }
    `
  )

  extend({ BrainMaterial });

  return (
    <>
      <mesh>
        <tubeGeometry args={[curve, 64, 0.01, 8, false]} />
        <brainMaterial ref={brainMat} />
      </mesh>
  </>
  )
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
        className="relative flex flex-col gap-5 lg:mb-24 w-dvh bg-black px-5 md:px-12 min-h-screen">  
        <div id="about" className="relative z-10 flex flex-col pt-24">
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
                  <BsGithub className="w-10 bg-white mt-3 text-5xl opacity-60 hover:opacity-100 rounded-xl" />
                </a>
                <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
                  <IoLogoLinkedin className="w-10 bg-white mt-3 text-5xl opacity-60 hover:opacity-100 rounded-xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div ref={canvasContainerRef} className="absolute left-0 w-full h-full z-0 mt-24">
          <Canvas camera={{position:[0,0,2.5]}} style={{ width: "100%", height: canvasHeight }} className="absolute top-0 left-0">
            <color attach="background" args={["black"]}/>
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
