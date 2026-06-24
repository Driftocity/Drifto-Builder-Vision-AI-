import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useHouseStore } from "../store/useHouseStore"
import RoofGenerator from "./RoofGenerator"

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

  const t = 0.2

  return (
    <group>
      <mesh position={[0, height / 2, length / 2]}>
        <boxGeometry args={[width, height, t]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      <mesh position={[0, height / 2, -length / 2]}>
        <boxGeometry args={[width, height, t]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      <mesh position={[-width / 2, height / 2, 0]}>
        <boxGeometry args={[t, height, length]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      <mesh position={[width / 2, height / 2, 0]}>
        <boxGeometry args={[t, height, length]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
    </group>
  )
}

export default function HouseScene() {
  const width = useHouseStore((s) => s.width)
  const length = useHouseStore((s) => s.length)
  const height = useHouseStore((s) => s.height)

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas camera={{ position: [15, 10, 15] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1} />

        <Floor />
        <Walls />

        <RoofGenerator width={width} length={length} height={height} />

        <OrbitControls />
      </Canvas>
    </div>
  )
}
