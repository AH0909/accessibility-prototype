import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className= "justify-center">
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </div>
);

export default YoutubeEmbed;