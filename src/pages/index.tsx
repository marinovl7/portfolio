import Hero from "@/components/Hero";
import ResponsiveAppBar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Hero />
      <Skills />
    </>
  );
}
