import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About"; 
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
 
export type SectionProps ={
  id: any;
 };

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection id="hero" />
      <ProjectsSection id="projects"/>
      <TapeSection />
      {/* <TestimonialsSection />  */}
      <AboutSection id="about" />
      <ContactSection id='contact'/>
      <Footer />
    </div>
  );
}
