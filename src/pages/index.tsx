import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ResponsiveAppBar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lachezar Marinov - &mdash; Portfolio</title>
        <meta name="description" content="Lachezar Marinov portflio website" />
      </Head>
      <ResponsiveAppBar />
      <Hero />
      <Skills />
      <Experience />
      <ProjectsGrid />
      <Footer />
    </>
  );
}
