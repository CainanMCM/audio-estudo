import React from "react";

import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";

function Player() {
  return (
    <div>
      <AudioPlayer src={process.env.PUBLIC_URL + "./audio/01.mp3"} layout="stacked-reverse" />
    </div>
  );
}

export default Player;
