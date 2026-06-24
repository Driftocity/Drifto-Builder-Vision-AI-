import { useHouseStore } from "../store/useHouseStore"

export default function ControlsPanel() {
  const width = useHouseStore((s) => s.width)
  const length = useHouseStore((s) => s.length)

  const setWidth = useHouseStore((s) => s.setWidth)
  const setLength = useHouseStore((s) => s.setLength)

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h2>House Controls</h2>

      <label>Width: {width}</label>
      <input
        type="range"
        min="5"
        max="50"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
      />

      <label>Length: {length}</label>
      <input
        type="range"
        min="5"
        max="50"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
    </div>
  )
}
