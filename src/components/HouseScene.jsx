import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function HouseScene() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />

        <Box />

        {/* THIS IS WHAT YOU WERE MISSING */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}
