"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

export default function WatchDemoButton() {
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const resetDemo = () => {
    setExpanded(false);
    setShowVideo(false);
  };

  const handleButtonClick = () => {
    if (showVideo) {
      resetDemo();
    } else {
      setExpanded((prev) => !prev);
      setShowVideo(true);
    }
  };

  const isActive = showVideo;

  return (
    <div className="w-full flex flex-col items-center">
      <motion.button
        onClick={handleButtonClick}
        whileTap={{
          boxShadow:
            "inset 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
        className={`px-6 py-3 text-white font-semibold rounded-2xl relative
          transition-all duration-150 transform-gpu select-none
          ${isActive ? "bg-zinc-800" : "bg-zinc-800"}
          active:scale-[.99]
        `}
        style={{
          boxShadow: `
            0 6px 12px rgba(0, 0, 0, 0.55),
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {isActive ? "Close Video" : "Watch Demo"}
      </motion.button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-6 overflow-hidden w-full"
          >
            <VideoPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
