import { Button } from "@/components/ui/button";
import { Code, ShoppingCart, TrendingUp, Globe, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background elements for modern look */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 mt-0 md:mt-0 pt-8 md:pt-0">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image - Larger and modern */}
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-6 md:mb-8 overflow-hidden rounded-full shadow-[0_0_30px_rgba(0,255,0,0.2)]">
            <img 
              src="/src/images/4.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Muhmmad Bilal Tanveer
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-4 text-foreground">
            Shopify Expert & E-commerce Developer
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Transforming businesses with powerful e-commerce solutions, strategic Meta ads, 
            and cutting-edge web development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-elegant hover:shadow-md transition-all duration-300">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <span className="font-medium">Shopify Expert</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-elegant hover:shadow-md transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-medium">Meta Ads</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-elegant hover:shadow-md transition-all duration-300">
              <Code className="w-5 h-5 text-primary" />
              <span className="font-medium">Web Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-elegant hover:shadow-md transition-all duration-300">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-medium">E-commerce</span>
            </div>
          </div>
          
          <div className="flex flex-row gap-3 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              View Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
          </div>
          
          {/* Discover More button moved below the action buttons */}
          <div className="mb-8 mt-6 flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="group"
            >
              <div className="flex flex-col items-center">
                <span className="text-xs text-primary/70 mb-1 group-hover:text-primary transition-colors">Discover More</span>
                <div className="p-2 rounded-full bg-white/30 backdrop-blur-sm shadow-sm group-hover:shadow-md group-hover:bg-white/50 transition-all duration-300">
                  <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;