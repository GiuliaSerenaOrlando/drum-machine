import { useEffect, useState } from "react"
import "./App.css"
import DrumPad from "./components/DrumPad"
import audioClips from "./data/audioClips"

function App() {
  const [display, setDisplay] = useState("")

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase()
    const clip = audioClips.find((c) => c.key === key)
    if (clip) {
      const pad = document.getElementById(clip.id)
      if (pad) pad.click()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-container">
        {audioClips.map((clip) => (
          <DrumPad key={clip.key} clip={clip} onClick={setDisplay} />
        ))}
      </div>
    </div>
  )
}

export default App
