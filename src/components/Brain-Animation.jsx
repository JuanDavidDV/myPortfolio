import { Canvas } from "@react-three/fiber";

const brainAnimation = () => {
  return (
    <section id="brain-animation" className="bg-gradient-to-tr to-blue-900 from-emerald-500">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </section>
  )
};

export default brainAnimation;
