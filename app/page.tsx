import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
