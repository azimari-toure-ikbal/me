"use client";

import React from "react";
import { Badge } from "./ui/badge";

type TechnologiesProps = {};

// Tech stacks data
const firstRowTech = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Hono",
  "Vercel",
  "Tailwind CSS",
  "Java",
  "PostgreSQL",
  "Trpc",
  "Docker",
  "Git",
  "React-query",
  "React-tables",
  "Zod",
  "React-hook-form",
];

const Technologies: React.FC<TechnologiesProps> = ({}) => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technologies</h2>
          <p className="text-silver max-w-2xl mx-auto mb-10">
            Je suis un passionné de développement attiré par les nouvelles
            technologies et techniques.
          </p>

          <div className="space-y-2">
            <div className="w-full space-x-2 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ul className="flex items-center gap-2 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {firstRowTech.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </ul>
              <ul
                className="flex items-center gap-2 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={true}
              >
                {firstRowTech.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </ul>
            </div>

            <div className="w-full space-x-2 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ul className="flex items-center gap-2 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none delay-1000 animate-infinite-scroll">
                {firstRowTech.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </ul>
              <ul
                className="flex items-center gap-2 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none delay-1000 animate-infinite-scroll"
                aria-hidden={true}
              >
                {firstRowTech.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
