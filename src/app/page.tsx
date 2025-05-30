import AboutMe from "@/components/about-me";
import { ContactMe } from "@/components/contact-me";
import { HeroSection } from "@/components/hero-section";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (<>
    <HeroSection />
    <AboutMe />
    <Projects />
    <Skills />
    <ContactMe />
  </>);
}
