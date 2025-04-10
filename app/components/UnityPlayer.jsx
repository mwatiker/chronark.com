"use client";

import React, { useEffect, useState } from "react";

export default function UnityPlayer() {
    const [src, setSrc] = useState("");

    useEffect(() => {
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        setSrc(isMobile ? "/unity/mobile/index.html" : "/unity/standard/index.html");
    }, []);

    if (!src) return null; // Avoid rendering iframe before src is set

    return (
        <div className="w-[418px] h-[600px] mx-auto bg-[#231F20]">
            <iframe
                src={src}
                title="Unity WebGL Player"
                className="w-[418px] h-[600px] border-none rounded-xl shadow-lg overflow-hidden"
                allowFullScreen
            />
        </div>
    );
}
