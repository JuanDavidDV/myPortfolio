import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { Tubes } from "../assets/Animations/Brain-Animation/BrainTubes";
import * as THREE from "three";
import { data } from "../assets/Animations/Brain-Animation/data";
import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { Link } from "react-scroll";

const randomRange = (min, max) => Math.random() * (max - min) + min;
const curves = [];
// Curves look
for (let i = 0; i < 100; i++) {
  let points = [];
  let length = randomRange(0.1, 1)
  // Points look
  for(let j = 0; j < 100; j++) {  
  points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        Math.PI - (j / 100) * Math.PI * length,
        (i / 100) * Math.PI * 2
      )
    );
  }
  let tempCurve = new THREE.CatmullRomCurve3(points);
  curves.push(tempCurve);
};


const PATHS = data.economics[0].paths;

const brainCurves = [];
PATHS.forEach((path) => {
  let points = [];
  
  for (let i = 0; i < path.length; i+=3 ) {
    points.push(new THREE.Vector3(path[i],path[i + 1],path[i + 2]));
  }
  
  let tempcurve = new THREE.CatmullRomCurve3(points);
  brainCurves.push(tempcurve);
});

const BrainParticles = ({ allthecurves }) => {

  const density = 10;
  let numberOfPoints = density * allthecurves.length;
  const myPoints = useRef([]);
  const brainGeo = useRef();

  let positions = useMemo(() => {
    let positions = [];
  
    for(let i = 0; i < numberOfPoints; i++) {
      positions.push(
        randomRange(-1, 1),
        randomRange(-1, 1),
        randomRange(-1, 1)
      )

    }
    return new Float32Array(positions)
  },[])

  let randomSize = useMemo(() => {
    let randomSize = [];
  
    for(let i = 0; i < numberOfPoints; i++) {
      randomSize.push(
        randomRange(0.3,1.0)
      )
    }
    return new Float32Array(randomSize)
  },[])

  useEffect(() => {
    for (let i = 0; i < allthecurves.length; i++) {
      for(let j = 0; j < density; j++) {
        myPoints.current.push({
          currentOffset: Math.random(),
          speed: Math.random() * 0.01,
          curve: allthecurves[i],
          curPosition: Math.random()
        });
      }
    }
  });

  useFrame(({clock}) => {
    let curpositions = brainGeo.current.attributes.position.array;

    for (let i = 0; i < myPoints.current.length; i++) {
      myPoints.current[i].curPosition += myPoints.current[i].speed;
      myPoints.current[i].curPosition = myPoints.current[i].curPosition % 1;

      let curPoint = myPoints.current[i].curve.getPointAt(myPoints.current[i].curPosition)
      curpositions[i * 3] = curPoint.x;
      curpositions[i * 3 + 1] = curPoint.y;
      curpositions[i * 3 + 2] = curPoint.z;

    }

    brainGeo.current.attributes.position.needsUpdate = true;
  });

  const BrainParticleMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    // vertex shader
    /*glsl*/`
      varying vec2 vUv;
      uniform float time;
      varying float vProgress;
      attribute float randomSize;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = randomSize * 2.0 * (1. / -mvPosition.z);
        // gl_PointSize = 50.0;
      }
    `,
    // fragment shader
    /*glsl*/`
      uniform float time;
      void main() {
        float disc = length(gl_PointCoord.xy - vec2(0.5));
        float opacity = 0.5 * smoothstep(0.5,0.4,disc);
        gl_FragColor = vec4(vec3(opacity),1.);
      }
    `
  )
    
  extend({ BrainParticleMaterial });

  return <>
  <points>
    <bufferGeometry attach="geometry" ref={brainGeo} >
      <bufferAttribute
        attach="attributes-position"
        count={positions.length / 3}
        array={positions}
        itemSize={3}
      />
      <bufferAttribute
        attach="attributes-randomSize"
        count={randomSize.length}
        array={randomSize}
        itemSize={1}
      />
    </bufferGeometry>
    <brainParticleMaterial 
      attach="material"
      depthTest={false}
      transparent={true}
      depthWrite={false}
      blending={THREE.AdditiveBlending} 
    />
  </points>
  </>
}

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
        className="relative flex flex-col gap-5 lg:pb-24 w-dvh bg-black px-5 md:px-20 min-h-screen">  
        <div id="about" className="relative z-10 flex flex-col pt-24">
          <div>
            <h1 className="type-name text-4xl text-white md:text-5xl font-bold"></h1>
          </div>
          <br />
          <div>
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <p className="text-white text-lg md:text-lg w-[100%] md:w-[70%]">
                Based in <span className="font-bold">Canada</span> 🍁. I am a passionate <span className="font-bold">Software Developer</span>, specialized in <span className="font-bold">Full-Stack and Data Development</span> through professional work experience, hands-on learning, and building real-world applications.   
              </p>
            </motion.div>
          </div>
          <div className="w-[70%] md:w-[40%]">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <div className="pt-2 flex items-center gap-3 md:gap-7 w-full">
                <a href="https://github.com/JuanDavidDV" target="_blank">
                  <BsGithub className="w-10 p-1 bg-white text-5xl opacity-60 hover:opacity-100 rounded-xl" />
                </a>
                <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
                  <IoLogoLinkedin className="w-10 p-0.5 bg-white text-5xl opacity-60 hover:opacity-100 rounded-xl" />
                </a>
                <Link to="contact" className="h-10 text-sm md:text-base text-white opacity-95 hover:opacity-100 bg-teal-500 hover:bg-indigo-500 rounded-lg transition-all duration-150 p-2 font-bold cursor-pointer flex items-center">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div ref={canvasContainerRef} className="absolute left-0 w-full h-full z-0 mt-36 md:mt-16">
          <Canvas camera={{position:[0.03,0,0.23], near: 0.01, far: 5}} style={{ width: "100%", height: canvasHeight }} className="absolute top-0 left-0">
            <color attach="background" args={["black"]}/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Tubes allthecurves={brainCurves} />
            <BrainParticles allthecurves={brainCurves} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </section>
  )
};

export default About;
