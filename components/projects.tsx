"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Project = {
  title: string;
  thumbnail: string;
  category: string;
  primaryTech: string;
  description: string;
  images: string[];
  startDate: string;
  endDate: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Samaweekend",
    thumbnail: "/samaweekend/pic1.jpeg",
    category: "Applications Web",
    primaryTech: "Next.js v15",
    description:
      "Une plateforme de réservation d'activités et de logement au Sénégal à l'instar de Airbnb. Des fonctionnalités avancées telles qu'un système de parainage, des points de fidélité ou encore un module de réservation complet avec blocage de dates et synchronisation des calendriers Booking et Airbnb.",
    images: [
      "/samaweekend/pic1.jpeg",
      "/samaweekend/pic2.jpeg",
      "/samaweekend/pic3.jpeg",
    ],
    startDate: "03/2025",
    endDate: "En développement",
    technologies: [
      "Next.js v15",
      "TypeScript",
      "Tailwind CSS v4",
      "ShadcnUI",
      "PostgreSQL",
      "Zod",
      "Hono",
      "TRPC x React Query",
      "Drizzle",
      "Jotai",
      "Paytech",
    ],
  },
  {
    title: "Samaxew",
    thumbnail: "/samaxew/smx1.png",
    category: "Applications Web",
    primaryTech: "Next.js v14",
    description:
      "Samaxew est une plateforme qui permet de mettre en relations les particuliers avec des professionnels de l'événementiel. La plateforme contient un module de réservation de place ainsi qu'un chat en ligne pour dialoguer avec les prestataires. Pour les prestataires un système d'abonnement récurrent également a été mis en place.",
    images: ["/samaxew/smx1.png", "/samaxew/smx2.png", "/samaxew/smx3.png"],
    startDate: "01/2024",
    endDate: "08/2024",
    technologies: [
      "Next.js v14",
      "TypeScript",
      "Tailwind CSS v3",
      "ShadcnUI",
      "Supabase",
      "Zod",
      "Hono",
      "TRPC x React Query",
      "Jotai",
      "Paydunya",
    ],
  },
  {
    title: "Rap's",
    thumbnail: "/raps/raps1.png",
    category: "Landing Pages",
    primaryTech: "Next.js v14",
    description:
      "Rap's est une application mobile qui permet de faciliter les déplacements inter-régionaux en offrant la possibilité de faire du covoiturage. Il s'agit ici de la landing page qui contient divers pages telles que: investisseurs, entreprise, sécurité, aide, etc.",
    images: ["/raps/raps1.png", "/raps/raps2.png", "/raps/raps3.png"],
    startDate: "11/2024",
    endDate: "En développement",
    technologies: ["Next.js v14", "TypeScript", "Tailwind CSS v3", "ShadcnUI"],
  },
  {
    title: "Danaus",
    thumbnail: "/danaus/danaus1.png",
    category: "E-commerce",
    primaryTech: "Next.js v14",
    description:
      "Un site de E-commerce pour vêtements pour femmes qui a été conçu avec une approche esthétique et un design élégant pour refléter les valeurs de la marque. Un système de choix entre dark mode et light mode également a été mis en place pour offrir une nouvelle expérience visuelle.",
    images: [
      "/danaus/danaus1.png",
      "/danaus/danaus2.png",
      "/danaus/danaus3.png",
      "/danaus/danaus4.png",
    ],
    startDate: "08/2024",
    endDate: "09/2024",
    technologies: [
      "Next.js v14",
      "TypeScript",
      "Tailwind CSS v3",
      "ShadcnUI",
      "Zod",
      "PostgreSQL",
      "TRPC x React Query",
      "Drizzle",
      "Jotai",
      "Wave",
    ],
  },
  {
    title: "Store221",
    thumbnail: "/store221/store221-1.jpeg",
    category: "E-commerce",
    primaryTech: "Next.js v15",
    description:
      "Un site de E-commerce pour la marque Kayshopping et ses produits. Choix de la devise ainsi que paiement par Paypal ont été mis en place pour offrir une expérience de paiement fluide et internationale.",
    images: [
      "/store221/store221-1.jpeg",
      "/store221/store221-2.jpeg",
      "/store221/store221-3.jpeg",
    ],
    startDate: "01/2025",
    endDate: "04/2025",
    technologies: [
      "Next.js v15",
      "TypeScript",
      "Tailwind CSS v3",
      "ShadcnUI",
      "Zod",
      "PostgreSQL",
      "Resend",
      "TRPC x React Query",
      "Drizzle",
      "Jotai",
      "Wave",
      "Orange Money",
      "Paypal",
    ],
  },
  {
    title: "Minebar Déco",
    thumbnail: "/deco/deco1.png",
    category: "Applications Web",
    primaryTech: "Next.js v15 & Expo React Native",
    description:
      "Minebar Déco est une suite composée d'une application web avec tableau de bord intégré avec statistiques avancés et génération de rapports, ainsi que de deux applications mobiles (clients et livreurs).",
    images: ["/deco/deco1.png", "/deco/deco2.png", "/deco/deco3.png"],
    startDate: "01/2025",
    endDate: "12/2025",
    technologies: [
      "Next.js v15",
      "React Native",
      "TypeScript",
      "Expo",
      "Tailwind CSS v3",
      "ShadcnUI",
      "Zod",
      "PostgreSQL",
      "TRPC x React Query",
      "Jotai",
      "Wave",
      "Orange Money",
    ],
  },
  {
    title: "Minebar Probat",
    thumbnail: "/probat/probat1.png",
    category: "Applications Web",
    primaryTech: "Next.js v15",
    description:
      "Plateforme commerciale de Minebar Probat. Elle met en avant les produits de la marque et une suite avec création d'un CRM est prévue.",
    images: [
      "/probat/probat1.png",
      "/probat/probat2.png",
      "/probat/probat3.png",
    ],
    startDate: "08/2025",
    endDate: "09/2025",
    technologies: [
      "Next.js v15",
      "TypeScript",
      "Tailwind CSS v4",
      "ShadcnUI",
      "Resend",
    ],
  },
  {
    title: "AfterPro",
    thumbnail: "/afterpro/afterpro.png",
    category: "Applications Web",
    primaryTech: "Next.js v15",
    description:
      "AfterPro est un portail vers la société After'Pro qui présente leurs services, partenaires et filliales.",
    images: ["/afterpro/afterpro.png"],
    startDate: "07/2024",
    endDate: "08/2024",
    technologies: [
      "Next.js v15",
      "TypeScript",
      "Tailwind CSS v4",
      "ShadcnUI",
      "Resend",
    ],
  },
  {
    title: "Oryon",
    thumbnail: "/oryon/oryon-1.png",
    category: "Applications Web",
    primaryTech: "Next.js v15",
    description:
      "Oryon est une application basée sur l'IA pour offrir aux chercheurs d'emplois des outils pour se préparer aux entretiens avec comme fonctionnalité : l'entretien en ligne avec une IA et un rapport d'entretien personnalisé, entre autres.",
    images: [
      "/oryon/oryon-1.png",
      "/oryon/oryon-2.png",
      "/oryon/oryon-3.png",
      "/oryon/oryon-4.png",
    ],
    startDate: "09/2025",
    endDate: "11/2025",
    technologies: [
      "Next.js v15",
      "TypeScript",
      "Tailwind CSS v4",
      "ShadcnUI",
      "AI SDK",
      "Gemini 2.5 flash",
      "PostgreSQL",
      "Zod",
      "TRPC x React Query",
      "Posthog",
    ],
  },
  {
    title: "Minebar Déco Mobile",
    thumbnail: "/deco/mobile/md-mobile-1.png",
    category: "Applications Mobiles",
    primaryTech: "Expo React Native",
    description: "Application cliente de la suite Minebar Déco.",
    images: [
      "/deco/mobile/md-mobile-1.png",
      "/deco/mobile/md-mobile-2.png",
      "/deco/mobile/md-mobile-3.png",
      "/deco/mobile/md-mobile-4.png",
    ],
    startDate: "05/2025",
    endDate: "12/2025",
    technologies: [
      "Expo",
      "React Native",
      "TypeScript",
      "Nativewind",
      "PostgreSQL",
      "React Query",
      "Jotai",
      "Wave",
      "Orange Money",
    ],
  },
];

const categories = [
  "All",
  "Landing Pages",
  "E-commerce",
  "Applications Web",
  "Applications Mobiles",
];
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isSelectedMobileCategory =
    selectedProject?.category === "Applications Mobiles";

  useEffect(() => {
    if (!projectsRef.current) return;

    const projectItems = projectsRef.current.querySelectorAll(".project-item");

    gsap.from(projectItems, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 70%",
      },
    });
  }, [selectedCategory]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleNextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Réalisations</h2>
          <p className="text-silver max-w-2xl mx-auto mb-10">
            Une sélection de mes travaux récents sur diverses technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-none border-silver/30 ${
                  selectedCategory === category
                    ? "bg-white text-black hover:bg-silver hover:text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const isMobileCategory =
              project.category === "Applications Mobiles";
            return (
              <div
                key={project.title}
                className="project-item group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div
                  className={`relative ${
                    isMobileCategory
                      ? "overflow-visible flex items-center justify-center bg-white/5 py-6"
                      : "overflow-hidden"
                  }`}
                >
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-silver rounded-none">
                      Détails
                    </Button>
                  </div>
                  <div
                    className={
                      isMobileCategory
                        ? "relative aspect-[9/20] w-[220px] sm:w-[240px] border border-white/15 rounded-[32px] bg-black shadow-[0_0_40px_rgba(0,0,0,0.35)]"
                        : "relative w-full h-[300px]"
                    }
                  >
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isMobileCategory
                          ? "rounded-[28px]"
                          : "group-hover:scale-105"
                      }`}
                    />
                  </div>
                </div>
                <div className="p-4 border border-t-0 border-silver/20">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-silver">
                      {project.category}
                    </span>
                    <span className="text-sm px-2 py-1 bg-silver/10">
                      {project.primaryTech}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="!max-w-6xl w-full p-0 bg-black border border-silver/20 rounded-none">
          {selectedProject && (
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className={`relative h-[300px] md:h-[700px] lg:h-[800px] ${
                  isSelectedMobileCategory
                    ? "flex items-center justify-center bg-white/5"
                    : ""
                }`}
              >
                {isSelectedMobileCategory ? (
                  <div className="relative h-full md:aspect-[9/20] w-[220px] sm:w-[260px] md:w-[320px] border border-white/20 rounded-[36px] bg-black shadow-[0_0_45px_rgba(0,0,0,0.45)]">
                    <Image
                      src={
                        selectedProject.images[currentImageIndex] ||
                        "/placeholder.svg"
                      }
                      alt={selectedProject.title}
                      fill
                      sizes="(min-width: 1024px) 320px, 60vw"
                      className="object-cover rounded-[30px]"
                    />
                  </div>
                ) : (
                  <Image
                    src={
                      selectedProject.images[currentImageIndex] ||
                      "/placeholder.svg"
                    }
                    alt={selectedProject.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}

                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage();
                      }}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}

                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-2 bg-black/70">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-none ${currentImageIndex === index ? "bg-white" : "bg-white/30"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6 flex flex-col h-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <DialogClose asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <X className="h-6 w-6" />
                    </Button>
                  </DialogClose>
                </div>

                <div className="flex items-center text-sm text-silver">
                  <span>
                    {selectedProject.startDate} - {selectedProject.endDate}
                  </span>
                </div>

                <p className="text-white/80 md:text-lg">
                  {selectedProject.description}
                </p>

                <div className="space-y-3 mt-auto">
                  <h4 className="text-sm md:text-base font-medium text-silver">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs md:text-sm bg-silver/10 border border-silver/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
