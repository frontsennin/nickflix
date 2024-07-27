import React, { useEffect, useRef, useState } from "react";

export function Video({closeVideo}) {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.requestFullscreen();
      
      video.addEventListener("fullscreenchange", () => {
          setIsFullScreen(document.fullscreenElement === video);
        });
        
        document.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement !== video) {
            setIsFullScreen(false);
            video.pause();
            closeVideo()
        }
    });

      return () => {
        video.removeEventListener("fullscreenchange", () => {});
        document.removeEventListener("fullscreenchange", () => {});
      };
    }
  });

  return (
    <video ref={videoRef} width="100%" height="100%" controls onDoubleClick={() => videoRef.current.requestFullscreen()}>
      <source src="/videos/big_buck_bunny.mp4" type="video/mp4" />
    </video>
  );
}
