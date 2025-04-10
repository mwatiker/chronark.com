"use client";
import React, { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren & { className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div
      className={`overflow-hidden relative duration-300 border rounded-xl 
      bg-zinc-900 hover:bg-zinc-800/90 
      border-zinc-700 hover:border-zinc-600
      shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};