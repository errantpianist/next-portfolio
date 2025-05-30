import AboutMe from "@/components/about-me";
import { ContactMe } from "@/components/contact-me";
import { HeroSection } from "@/components/hero-section";
import { Projects } from "@/components/projects";

export default function Home() {
  return (<>
    <HeroSection />
    <AboutMe />
    <Projects />
    <ContactMe />
  </>);
}
