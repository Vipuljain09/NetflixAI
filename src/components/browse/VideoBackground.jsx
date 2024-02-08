import React, { useEffect, useState } from "react";
import getVideoKey from "../../helper/getVideokey";

const VideoBackground = ({ movieId }) => {
  const [videoKey, setVideoKey] = useState(null);
  console.log(videoKey);
  useEffect(() => {
    getVideoKey(movieId).then((data) => {
      console.log(data);
      setVideoKey(data);
    });
  }, []);

  return (
    <div className="w-screen">
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?si=l4SpLi5Ee1Gd3ifa&autoplay=1&mute=1&controls=0&modestbranding=1`}
        frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-screen max-w-full aspect-video absolute top-0 noHover"
      ></iframe>
      
    </div>
  );
};

export default VideoBackground;
