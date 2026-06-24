import HouseScene from "../components/HouseScene"
import ControlsPanel from "../components/ControlsPanel"

export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <h1 style={{ color: "white", padding: 20 }}>
        Drifto Builder Vision AI
      </h1>

      <ControlsPanel />

      <HouseScene />
    </div>
  )
}
