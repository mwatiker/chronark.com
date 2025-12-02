"use client";

import React, { useEffect, useState, useRef } from "react";

export default function FullScreenUnityPlayer({ 
    mobilePath = "/unity/mobile/index.html",
    standardPath = "/unity/standard/index.html"
}) {
    const [src, setSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const iframeRef = useRef(null);

    useEffect(() => {
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        setSrc(isMobile ? mobilePath : standardPath);
    }, [mobilePath, standardPath]);

    useEffect(() => {
        // Listen for Unity loading progress and ready message from iframe
        const handleMessage = (event) => {
            if (!event.data || typeof event.data !== "object") return;

            if (event.data.type === "UNITY_PROGRESS") {
                const value = typeof event.data.value === "number" ? event.data.value : 0;
                setProgress(Math.max(0, Math.min(1, value)));
            }

            if (event.data.type === "UNITY_READY") {
                setProgress(1);
                setIsLoading(false);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    if (!src) return null;

    return (
        <div className="w-full h-full flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
            <div 
                className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#231F20] p-4 flex items-center justify-center"
                style={{ 
                    width: "309px",
                    height: "632px",
                    borderRadius: "2.5rem",
                    WebkitBorderRadius: "2.5rem",
                    MozBorderRadius: "2.5rem",
                    transform: "scale(min(calc((100vw - 4rem) / 309), calc((100vh - 4rem) / 632), 1))",
                    transformOrigin: "center center"
                }}
            >
                <div
                    className="relative"
                    style={{ 
                        width: "277px",
                        height: "600px",
                        borderRadius: "2rem",
                        overflow: "hidden"
                    }}
                >
                    {/* Loading overlay */}
                    {isLoading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black">
                            <div className="h-6 w-6 border-2 border-zinc-600 border-t-white rounded-full animate-spin" />
                            <div className="w-40 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                                <div
                                    className="h-full bg-white transition-[width] duration-150 ease-out"
                                    style={{ width: `${Math.round(progress * 100)}%` }}
                                />
                            </div>
                        </div>
                    )}

                    <iframe
                        ref={iframeRef}
                        src={src}
                        title="Unity WebGL Player"
                        className="border-none block"
                        style={{ 
                            display: "block",
                            borderRadius: "2rem",
                            width: "277px",
                            height: "600px",
                            border: "none"
                        }}
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}


