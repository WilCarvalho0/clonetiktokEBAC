import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter"
import "./Video.css";

const Video = () => {
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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      ></video>

      <VideoFooter />
    </div>
  );
};

export default Video;