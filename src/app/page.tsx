import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/layout/page-loader";
import { AmbientBackground } from "@/components/effects/ambient-background";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <PageLoader />
      <AmbientBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
