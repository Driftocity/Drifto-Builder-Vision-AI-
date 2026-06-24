import { Canvas } from "@react-three/fiber"

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
    <div style={{ height: "400px" }}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Box />
      </Canvas>
    </div>
  )
}
