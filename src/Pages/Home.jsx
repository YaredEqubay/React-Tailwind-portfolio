import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection.jsx";
import { AboutSection } from "@/components/AboutSection.jsx";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";


const Home = () => {
  return (
    <div>
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>

      <Footer />
    </div>
  );
};
export default Home;
