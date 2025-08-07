import { SidebarProvider } from "@/components/ui/sidebar";
import { PortfolioSidebar, MobileMenuTrigger } from "./PortfolioSidebar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import { Phone } from "lucide-react";

const Portfolio = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full relative">
        {/* Mobile Floating Menu */}
        <MobileMenuTrigger />
        
        {/* Sidebar */}
        <PortfolioSidebar />
        
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="bg-foreground text-background py-8">
            <div className="container mx-auto px-6 text-center">
              <p className="text-sm opacity-80">
                © 2024 Muhmmad Bilal Tanveer Portfolio. 
              </p>
            </div>
          </footer>
        </main>

        {/* Floating WhatsApp Icon */}
        <a 
          href="https://wa.me/+92370 5978907" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed md:bottom-6 bottom-[56px] right-6 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 z-50"
          aria-label="Contact on WhatsApp"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </SidebarProvider>
  );
};

export default Portfolio;
