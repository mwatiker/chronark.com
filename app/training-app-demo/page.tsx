"use client";

import React from "react";
import FullScreenUnityPlayer from "../components/FullScreenUnityPlayer";

export default function DemoPage() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen overflow-hidden bg-black">
      {/* Unity Player Section */}
      <div className="flex-1 w-full flex items-center justify-center py-12 px-6">
        <FullScreenUnityPlayer 
          mobilePath="/unity/dec1webGL019/index.html"
          standardPath="/unity/dec1webGL019/index.html"
        />
      </div>

    </div>
  );
}


