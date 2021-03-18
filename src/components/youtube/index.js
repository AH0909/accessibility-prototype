import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className= "justify-center">
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, cc_load_policy=1&cc_lang_pref=en"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;