import React from "react";

export default function VideoPlayer() {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <video className="w-full h-full" controls autoPlay>
        <source src="/demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
