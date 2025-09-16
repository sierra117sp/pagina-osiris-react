const AudioVisualizer = () => (
  <div className="audio-visualizer">
    {Array.from({ length: 10 }).map((_, i) => (
      <div className="audio-bar" key={i}></div>
    ))}
  </div>
);

export default AudioVisualizer;
