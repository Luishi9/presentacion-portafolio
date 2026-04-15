import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSkills from "@/components/ExperienceSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

