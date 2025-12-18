export default function Home() {
  return (
    <div className="video-bg-container">
      <iframe
        className="video-bg"
        src="https://www.youtube.com/embed/zmM1IBDojBs?autoplay=1&mute=1&controls=0&loop=1&playlist=zmM1IBDojBs"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
      <div className="overlay"></div>
    </div>
  );
}
