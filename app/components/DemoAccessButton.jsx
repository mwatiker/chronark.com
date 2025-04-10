"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UnityPlayer from "./UnityPlayer";

export default function DemoAccessButton() {
    const [expanded, setExpanded] = useState(false);
    const [password, setPassword] = useState("");
    const [showUnity, setShowUnity] = useState(false);

    const resetDemo = () => {
        setExpanded(false);
        setPassword("");
        setShowUnity(false);
    };

    const handleButtonClick = () => {
        if (showUnity) {
            // If Unity is active, treat it as a full "Close Demo"
            resetDemo();
        } else {
            setExpanded((prev) => !prev);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value === "test") {
            setShowUnity(true);
        } else {
            setShowUnity(false);
        }
    };

    const isActive = showUnity;

    return (
        <div className="w-full flex flex-col items-center p-4">



<motion.button
  onClick={handleButtonClick}
  whileTap={{
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
  }}
  className={`px-6 py-3 text-white font-semibold rounded-2xl relative
    transition-all duration-150 transform-gpu select-none
    ${isActive ? "bg--800" : "bg-zinc-800"}
    active:scale-[.99]
  `}
  style={{
    boxShadow: `
      0 6px 12px rgba(0, 0, 0, 0.55),
      0 2px 4px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1), /* top highlight */
      inset 0 -1px 1px rgba(0, 0, 0, 0.2)      /* bottom bevel */
    `
  }}
>
  {isActive ? "Close Demo" : "Access Demo"}
</motion.button>




            <AnimatePresence initial={false}>
                {expanded && !isActive && (
                    <motion.div
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
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-6 overflow-hidden"
                    >
                        <UnityPlayer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
