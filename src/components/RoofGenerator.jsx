import * as THREE from "three"

export default function RoofGenerator({ width, length, height }) {
  const peak = height + 3

  // Create triangle geometry for BOTH sides of gable roof
  const leftShape = new THREE.BufferGeometry()
  leftShape.setAttribute(
    "position",
    new THREE.BufferAttribute(
      new Float32Array([
        -width / 2, height, length / 2,
         0, peak, length / 2,
        -width / 2, height, -length / 2,
      ]),
      3
    )
  )
  leftShape.computeVertexNormals()

  const rightShape = new THREE.BufferGeometry()
  rightShape.setAttribute(
    "position",
    new THREE.BufferAttribute(
      new Float32Array([
        width / 2, height, length / 2,
        0, peak, length / 2,
        width / 2, height, -length / 2,
      ]),
      3
    )
  )
  rightShape.computeVertexNormals()

  return (
    <group>
      {/* LEFT ROOF */}
      <mesh geometry={leftShape}>
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      {/* RIGHT ROOF */}
      <mesh geometry={rightShape}>
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
    </group>
  )
}
