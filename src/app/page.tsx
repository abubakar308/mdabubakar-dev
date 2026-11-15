import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education"; // 👈 নতুন ইমপোর্ট
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sections Wrapper */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education /> {/* 👈 নতুন সেকশন */}
        <Contact />
      </div>

      <Footer />
    </main>
  );
}