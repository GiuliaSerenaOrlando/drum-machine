const DrumPad = ({ clip, onClick }) => {
  const { key: triggerKey, id, src } = clip

  const handleClick = () => {
    const audio = document.getElementById(triggerKey)
    if (audio) {
      audio.currentTime = 0
      audio.play().catch((e) => console.warn("Playback error", e))
      onClick(id)
    }
  }

  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      {triggerKey}
      <audio className="clip" id={triggerKey} src={src} preload="auto"></audio>
    </div>
  )
}

export default DrumPad
