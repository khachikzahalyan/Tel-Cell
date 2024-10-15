import React from "react";

const VideoPlayer = () => {
  const videoId = "An14pbQ8IRg";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
