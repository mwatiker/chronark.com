"use client";

import React, { useEffect, useState } from "react";

export default function FullScreenUnityPlayer({ 
    mobilePath = "/unity/mobile/index.html",
    standardPath = "/unity/standard/index.html"
}) {
    const [src, setSrc] = useState("");

    useEffect(() => {
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        setSrc(isMobile ? mobilePath : standardPath);
    }, [mobilePath, standardPath]);

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
                    <iframe
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


