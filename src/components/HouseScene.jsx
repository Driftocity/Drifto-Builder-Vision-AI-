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

function Walls() {
  const width = useHouseStore((s) => s.width)
  const length = useHouseStore((s) => s.length)
  const height = useHouseStore((s) => s.height)

  const wallThickness = 0.3

  return (
    <group>
      {/* Front Wall */}
      <mesh position={[0, height / 2, length / 2]}>
        <boxGeometry args={[width, height, wallThickness]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, height / 2, -length / 2]}>
        <boxGeometry args={[width, height, wallThickness]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-width / 2, height / 2, 0]}>
        <boxGeometry args={[wallThickness, height, length]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[width / 2, height / 2, 0]}>
        <boxGeometry args={[wallThickness, height, length]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
    </group>
  )
}

export default function HouseScene() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas camera={{ position: [12, 12, 12] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1} />

        <Floor />
        <Walls />

        <OrbitControls />
      </Canvas>
    </div>
  )
}
