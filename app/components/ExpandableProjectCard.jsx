"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import { Card } from "./card";

const ExpandableProjectCard = ({ project, views }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault(); // Prevent the Link from navigating
    setIsExpanded(!isExpanded);
  };

  return (
    <Card>
      <motion.div
        layout
        transition={{
          layout: { duration: 0.3, ease: "easeOut" }
        }}
        className="w-full"
      >
        <article className="relative w-full h-full p-4 md:p-8">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-100">
              {project.date ? (
                <time dateTime={new Date(project.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(project.date))}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Eye className="w-4 h-4" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views ?? 0,
              )}
            </span>
          </div>

          <motion.h2
            layout="position"
            id="featured-post"
            className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
          >
            {project.title}
          </motion.h2>
          
          <motion.p
            layout="position"
            className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300"
          >
            {project.description}
          </motion.p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 text-zinc-400"
              >
                <h3 className="mb-2 text-xl font-semibold text-zinc-200">Project Details</h3>
                <p className="mb-4">
                  {project.body?.raw || "This project showcases our innovative approach to solving complex problems in the industry. Using cutting-edge technology, we've created a solution that addresses the specific needs of our clients while maintaining high standards of quality and usability."}
                </p>
                
                <h3 className="mb-2 text-xl font-semibold text-zinc-200">Technologies Used</h3>
                <ul className="mb-4 ml-5 list-disc">
                  <li>React & Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>Contentlayer</li>
                </ul>
                
                <div className="flex justify-between">
                  <motion.div>
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-block px-4 py-2 mt-2 text-sm font-medium text-zinc-800 bg-zinc-200 rounded hover:bg-zinc-300 transition-colors"
                      onClick={(e) => e.stopPropagation()} // Allow actual link navigation
                    >
                      View Full Project
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            layout="position"
            className={`${isExpanded ? "" : "absolute"} bottom-4 md:bottom-8`}
          >
            <motion.button
              onClick={toggleExpand}
              className="text-zinc-200 hover:text-zinc-50 cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more"} <span aria-hidden="true">{isExpanded ? "↑" : "→"}</span>
            </motion.button>
          </motion.div>
        </article>
      </motion.div>
    </Card>
  );
};

export default ExpandableProjectCard;