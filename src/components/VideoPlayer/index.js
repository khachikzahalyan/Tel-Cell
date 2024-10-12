import React from "react";

const VideoPlayer = () => {
  const videoId = "An14pbQ8IRg"; // ID вашего видео

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", // Чтобы черный фон был за видео
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%"
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
            height: "100%"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
