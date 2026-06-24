import { useHouseStore } from "../store/useHouseStore"

export default function RoofGenerator() {
  const width = useHouseStore((s) => s.width)
  const length = useHouseStore((s) => s.length)
  const height = useHouseStore((s) => s.height)

  const roofPeak = height + 2.5
  const wallTop = height

  const halfWidth = width / 2

  return (
    <group>
      {/* LEFT ROOF PLANE */}
      <mesh
        position={[0, roofPeak, 0]}
        rotation={[0, 0, Math.PI / 6]}
      >
        <boxGeometry args={[width * 1.2, 0.2, length * 1.1]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      {/* RIGHT ROOF PLANE */}
      <mesh
        position={[0, roofPeak, 0]}
        rotation={[0, 0, -Math.PI / 6]}
      >
        <boxGeometry args={[width * 1.2, 0.2, length * 1.1]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      {/* RIDGE LINE (visual debug so you SEE it) */}
      <mesh position={[0, roofPeak + 0.2, 0]}>
        <boxGeometry args={[width, 0.1, 0.2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  )
}
