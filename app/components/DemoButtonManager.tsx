"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UnityPlayer from "./UnityPlayer";
import VideoPlayer from "./VideoPlayer";

export default function DemoButtonManager() {
  const [activeDemo, setActiveDemo] = useState<"unity" | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [password, setPassword] = useState("");
  const [showUnity, setShowUnity] = useState(false);

  const handleToggle = (type: "unity") => {
    if (activeDemo === type) {
      setActiveDemo(null);
      setExpanded(false);
      setPassword("");
      setShowUnity(false);
    } else {
      setActiveDemo(type);
      setExpanded(true); // Only Unity needs to expand
      setPassword("");
      setShowUnity(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value === "test") {
      setShowUnity(true);
    } else {
      setShowUnity(false);
    }
  };

  const isUnityActive = activeDemo === "unity" && showUnity;

  return (
    <div className="w-full flex flex-col items-center p-0">
      {/* Buttons */}
      <div className="flex flex-row gap-4 justify-center mb-6">
        <motion.button
          onClick={() => handleToggle("unity")}
          whileTap={{
            boxShadow:
              "inset 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
          className="px-6 py-3 text-white font-semibold rounded-2xl relative transition-all duration-150 transform-gpu select-none bg-zinc-800 active:scale-[.99]"
          style={{
            boxShadow: `
              0 6px 12px rgba(0, 0, 0, 0.55),
              0 2px 4px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 1px rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          {isUnityActive ? "Close Demo" : "Access Demo"}
        </motion.button>
      </div>

      {/* Unity Demo Password Input */}
      <AnimatePresence initial={false}>
        {activeDemo === "unity" && !isUnityActive && expanded && (
          <motion.div
            key="password-input"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-sm mt-4 overflow-hidden"
          >
            <input
              type="password"
              placeholder="Demo access password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shared Content Area */}
      <AnimatePresence mode="wait">
        {isUnityActive && (
          <motion.div
            key="unity-player"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-6 overflow-hidden w-full"
          >
            <UnityPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
