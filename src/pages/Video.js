import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./Video.css";

const Video = ({likes, messages, shares, name, description, music, url}) => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play === false) {
      videoRef.current.play();
      setPlay(true);
    }

    if (play === true) {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar
      likes={likes}
      messages={messages}
      shares={shares}
      />
      <VideoFooter
      name={name}
      description={description}
      music={music}
      />
    </div>
  );
};

export default Video;
