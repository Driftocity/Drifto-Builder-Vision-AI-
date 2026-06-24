import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useHouseStore } from "../store/useHouseStore"

function Floor() {
  const width = useHouseStore((s) => s.width)
  const length = useHouseStore((s) => s.length)

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[width, 0.2, length]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  )
}

export default function HouseScene() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Canvas camera={{ position: [10, 10, 10] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} />

        <Floor />

        <OrbitControls />
      </Canvas>
    </div>
  )
}
