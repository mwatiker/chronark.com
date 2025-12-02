"use client";

import React from "react";
import Particles from "../components/particles";
import FullScreenUnityPlayer from "../components/FullScreenUnityPlayer";

export default function DemoPage() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800/30 to-black">
      <Particles className="fixed inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* Unity Player Section */}
      <div className="flex-1 w-full flex items-center justify-center py-12 px-6">
        <FullScreenUnityPlayer 
          mobilePath="/unity/dec1webGL01/index.html"
          standardPath="/unity/dec1webGL01/index.html"
        />
      </div>

      {/* Footer */}
      <footer className="w-full bg-black/1 backdrop-blur-md border-t border-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="text-xl font-bold text-white font-display tracking-wider text-center">
                2CUBE
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-zinc-900 my-6" />
          <div className="text-center text-zinc-600 text-sm">
            © {new Date().getFullYear()} 2CUBE
          </div>
        </div>
      </footer>
    </div>
  );
}


