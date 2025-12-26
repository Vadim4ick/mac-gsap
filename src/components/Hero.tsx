import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MackBook Pro</h1>
        <img src="/title.png" alt="MackBook Pro" />
      </div>

      <video ref={ref} src="/videos/hero.mp4" autoPlay muted playsInline />
    </section>
  );
};

export { Hero };
