import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ResponsiveAppBar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Hero />
      <Skills />
      <Experience />
      <ProjectsGrid />
      <Footer />
    </>
  );
}
