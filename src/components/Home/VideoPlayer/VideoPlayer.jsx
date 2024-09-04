import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { VideoContext } from "../../../context/VideoContext";
import "./VideoPlayer.css";

function VideoPlayer() {
  const { videoUrl, loading, setVideoUrl } = useContext(VideoContext);
  const [showVideo, setShowVideo] = useState(false);
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        videoPlayerRef.current &&
        !videoPlayerRef.current.contains(event.target)
      ) {
        setShowVideo(false);
        setVideoUrl("");
      }
    }

    if (videoUrl) {
      setShowVideo(true);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [videoUrl, setVideoUrl]);

  const autoplayUrl = videoUrl ? `${videoUrl}?autoplay=1&controls=0` : "";

  return (
    <>
      {videoUrl && (
        <div
          className={`video-container z-10 w-screen h-screen fixed flex items-center justify-center ${
            showVideo ? "show" : ""
          }`}
        >
          {loading && <p className="text-white">Loading...</p>}
          <div
            className="video-player fixed overflow-hidden rounded-xl"
            ref={videoPlayerRef}
          >
            <iframe
              width="854"
              height="480"
              src={autoplayUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoPlayer;
