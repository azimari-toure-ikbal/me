import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
