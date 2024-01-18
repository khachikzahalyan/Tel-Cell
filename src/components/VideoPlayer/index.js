import { useRef } from "react";

const VideoPlayer = () => {
  const ref = useRef();

  return (
    <video
      ref={ref}
      autoPlay
      muted
      controls
      src="./TELLCELL_FULL.mp4"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default VideoPlayer;
