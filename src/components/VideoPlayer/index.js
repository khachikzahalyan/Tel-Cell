import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => (ref.current.muted = false), 1000);
  }, [ref]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      src="./TELLCELL_FULL.mp4"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default VideoPlayer;
