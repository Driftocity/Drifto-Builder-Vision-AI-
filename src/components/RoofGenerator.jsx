import { useHouseStore } from "../store/useHouseStore"

export default function RoofGenerator() {
  const width = useHouseStore((s) => s.width)
  const length = useHouseStore((s) => s.length)
  const height = useHouseStore((s) => s.height)

  const roofHeight = height + 3

  return (
    <group>
      {/* Left roof plane */}
      <mesh
        position={[0, roofHeight, 0]}
        rotation={[0, 0, 0.6]}
      >
        <boxGeometry args={[width, 0.2, length]} />
        <meshStandardMaterial color="#7c2d12" />
      </mesh>

      {/* Right roof plane */}
      <mesh
        position={[0, roofHeight, 0]}
        rotation={[0, 0, -0.6]}
      >
        <boxGeometry args={[width, 0.2, length]} />
        <meshStandardMaterial color="#7c2d12" />
      </mesh>
    </group>
  )
}
