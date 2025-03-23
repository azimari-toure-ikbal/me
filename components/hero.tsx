"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    const tl = gsap.timeline();

    tl.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Parallax effect on scroll
    gsap.to(heroRef.current, {
      backgroundPositionY: "30%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Layered background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-screen bg-zinc-600/15"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-zinc-800/15"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ikbal <br />
              <span className="text-zinc-400">AZIMARI TOURE</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-zinc-400">
              Fullstack Web Developer
            </h2>
            <p className="text-zinc-400/80 max-w-md">
              Créer des expériences numériques élégantes avec des technologies
              de pointes et un design réfléchi.
            </p>
            <Button
              onClick={scrollToProjects}
              className="bg-white text-black hover:bg-silver hover:text-black transition-colors rounded-none px-8 py-6"
            >
              Mes réalisations
            </Button>
          </div>

          <div className="hidden md:block relative h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent z-10"></div>
            <div className="absolute top-10 right-10 w-[300px] h-[400px] border border-zinc-600 z-0"></div>
            <div className="absolute top-20 right-20 w-[300px] h-[400px] bg-silver/5 z-0"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[400px] z-20">
              <Image
                src="/how.jpeg"
                alt="Ikbal AZIMARI TOURE"
                width={500}
                height={700}
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-10 w-10 text-silver" />
      </button>
    </section>
  );
}
