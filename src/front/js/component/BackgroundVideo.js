import React from "react";


export const BackgroundVideo = ({ video }) => (

  <div className="video-container">
    <video className="background-video" autoPlay loop muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay">
      {/* Aquí puedes poner cualquier contenido adicional
        que quieras mostrar sobre el video */}
    </div>
  </div>);



