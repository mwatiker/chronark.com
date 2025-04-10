"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { allProjects } from "contentlayer/generated";
import NativeExpandableCard from "./components/NativeExpandableCard";

import UnityPlayer from "./components/UnityPlayer";
import DemoButtonManager from "./components/DemoButtonManager";
import { ReactNode, MouseEvent } from "react";


const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "Founders", href: "#cofounders" },
];


interface SmoothScrollLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

function SmoothScrollLink({ href, className, children }: SmoothScrollLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -window.innerHeight / 2 + element.getBoundingClientRect().height / 2;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}


export default async function Home() {
  const featured = allProjects.find((project) => project.slug === "unkey")!;

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800/30 to-black">
      <Particles className="fixed inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 px-6 py-4 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold text-white font-display tracking-wider">
            2CUBE
          </Link>
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium duration-300 text-zinc-400 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav> */}

      {/* Hero Section with cool cut-in text */}
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">





        <nav className="my-4 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <SmoothScrollLink
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </SmoothScrollLink>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 className="py-3.5 px-0.5 z-10 text-8xl text-transparent duration-1000 bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          2CUBE
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="my-4 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            Revolutionizing Training Through Gamification
          </h2>
        </div>


      </div>



      {/* Projects Section */}
      <nav id="projects" className="my-24 animate-fade-in">
        <h2 className="text-4xl font-bold text-white text-center pb-12 ">Flagship Project</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 px-10 backdrop-blur-md shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center gap-6 text-center">
              <h3 className="text-3xl font-semibold text-white pt-4">{featured.title}</h3>
              <p className="text-zinc-400 text-base leading-relaxed">{featured.description}</p>
              <DemoButtonManager />
            </div>
          </div>
        </div>
      </nav>







      {/* Co-Founders Section */}
      {/* Co-Founders Section */}
      <nav className="my-16 animate-fade-in">
        <div id="cofounders" className="w-full mx-auto px-6 py-20 max-w-7xl bg-gradient-to-b from-transparent to-transparent">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 ">Co-Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 backdrop-blur-sm shadow-xl transition-all duration-300 relative">
              <div className="h-64 bg-gray-900 relative animate-[move-bg_3s_linear_infinite]" style={{
                backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
                animation: "move-bg-grid 3s linear infinite",
                backgroundSize: "20px 20px"
              }}>
                <style>
                  {`
      @keyframes move-bg-grid {
          0% { background-position: 0 0; }
          100% { background-position: -20px -20px; }
        }
    `}
                </style>
                <img
                  src="/evan_cut.png"
                  alt="Evan Wu"
                  className="mx-auto scale-[.75] transform translate-y-[+3px]"
                // transform translate-y-[-40px]


                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Evan Wu</h3>
                <span className="inline-block px-4 py-1 text-sm font-medium text-red-400 bg-red-900/30 rounded-full mb-4">
                  CEO
                </span>

                <a href="https://www.linkedin.com/in/evan-wu-/" className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-all duration-200 px-4 py-0 rounded-md hover:bg-blue-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.17 0-2.1-.9-2.1-2.03 0-1.13.94-2.03 2.1-2.03 1.15 0 2.09.9 2.09 2.03 0 1.14-.94 2.03-2.1 2.03zm14.66 12.34h-3.62v-5.3c0-1.33-.47-2.23-1.67-2.23-1.2 0-1.9.8-1.9 2.23v5.3h-3.62V9.24h3.62v1.66c.5-.8 1.7-1.66 3.5-1.66 2.66 0 3.7 1.66 3.7 4.6v6.26z" />
                  </svg>

                </a>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 backdrop-blur-sm shadow-xl transition-all duration-300 relative">
              <div className="h-64 bg-gray-900 relative animate-[move-bg_3s_linear_infinite]" style={{
                backgroundImage: `
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
                animation: "move-bg-grid 3s linear infinite",
                backgroundSize: "20px 20px"
              }}>
                <style>
                  {`
        @keyframes move-bg-grid {
          0% { background-position: 0 0; }
          100% { background-position: -20px -20px; }
        }
      `}
                </style>
                <img
                  src="/matt_cut.png"
                  alt="Matthew Watiker"
                  className="mx-auto scale-[.6] transform translate-y-[-40px] filter brightness-75"
                />
              </div>

              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Matthew Watiker</h3>
                <span className="inline-block px-4 py-1 text-sm font-medium text-blue-400 bg-blue-900/30 rounded-full mb-4">
                  CTO
                </span>

                <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-all duration-200 px-4 py-0 rounded-md hover:bg-blue-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.17 0-2.1-.9-2.1-2.03 0-1.13.94-2.03 2.1-2.03 1.15 0 2.09.9 2.09 2.03 0 1.14-.94 2.03-2.1 2.03zm14.66 12.34h-3.62v-5.3c0-1.33-.47-2.23-1.67-2.23-1.2 0-1.9.8-1.9 2.23v5.3h-3.62V9.24h3.62v1.66c.5-.8 1.7-1.66 3.5-1.66 2.66 0 3.7 1.66 3.7 4.6v6.26z" />
                  </svg>

                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>



      {/* Footer */}
      <footer className="w-full bg-black/1 backdrop-blur-md border-t border-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-white font-display tracking-wider">
                2CUBE
              </div>
            </div>
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <SmoothScrollLink
                  key={item.href}
                  href={item.href}
                  className="text-sm duration-300 text-zinc-500 hover:text-white"
                >
                  {item.name}
                </SmoothScrollLink>
              ))}
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