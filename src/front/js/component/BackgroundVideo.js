import React from "react";


export const BackgroundVideo = ({ video }) => {
  const handlePlay = (e) => {
    e.preventDefault();
  };

  return <div className="video-container">
    <video className="background-video"
           autoPlay
           loop
           muted
           onClick={handlePlay}
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay">
      {/* cualquier contenido adicional
        que quieras mostrar sobre el video */}
    </div>
  </div>;
};





