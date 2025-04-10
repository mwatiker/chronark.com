"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./card";

const NativeExpandableCard = ({ project, views }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card>
      <article className="relative w-full h-full p-5 md:p-6">
        {/* Header section */}
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 font-display">
              {project.title}
            </h2>
            <div className="flex items-center text-xs text-zinc-500">
              <Eye size={14} className="mr-1" />
              <span>{views} views</span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed italic border-l-2 border-zinc-700 pl-3">
          {project.description}
        </p>
        
        {/* Read more button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-5 px-4 py-2 text-sm font-medium bg-zinc-800 text-zinc-200 rounded-md hover:bg-zinc-700 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50"
        >
          {isOpen ? "Show less" : "Read more"}{" "}
          <span
            aria-hidden="true"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            →
          </span>
        </button>
        
        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-5 pt-5 border-t border-zinc-800 overflow-hidden"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zinc-200">
                  Project Details
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {project.body?.raw || "Project details text goes here..."}
                </p>
                
                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center px-4 py-2 mt-3 text-sm font-medium text-zinc-100 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
                >
                  View Full Project <ExternalLink size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Card>
  );
};

export default NativeExpandableCard;