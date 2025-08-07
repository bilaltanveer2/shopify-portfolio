import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, User, FolderOpen, Award, Mail, Menu, Instagram, Facebook, Linkedin } from "lucide-react";

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="0">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const navigationItems = [
  { title: "Home", url: "hero", icon: Home },
  { title: "About", url: "about", icon: User },
  { title: "Projects", url: "projects", icon: FolderOpen },
  { title: "Skills", url: "skills", icon: Award },
  { title: "Contact", url: "contact", icon: Mail },
];

export function PortfolioSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.url);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300 bg-white border-r border-border shadow-elegant`}
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          {/* Logo/Brand */}
          <div className={`p-6 border-b border-border ${collapsed ? "px-4" : ""}`}>
            {!collapsed ? (
              <h1 className="text-2xl font-bold text-green-500">
                Portfolio
              </h1>
            ) : (
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
            )}
          </div>

          <SidebarGroupContent className="px-3 py-5 mb-20">
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.url)}
                    className={`w-full justify-start gap-4 mb-5 py-5 text-xl transition-all duration-300 rounded-xl ${
                      activeSection === item.url
                        ? "bg-green-500 text-white shadow-lg"
                        : "hover:bg-green-100 text-foreground"
                    }`}
                  >
                    <item.icon className="w-8 h-8" />
                    {!collapsed && <span className="font-medium text-xl">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            
            {/* Social Media Icons */}
            <div className="mt-auto pt-6 border-t border-border fixed bottom-0 left-0 right-0 bg-white pb-4" style={{ width: collapsed ? '4rem' : '16rem' }}>
              <h3 className={`${collapsed ? "hidden" : "block"} text-base text-black mb-4 font-medium text-center`}>Connect With Me</h3>
              <div className="flex flex-row flex-wrap gap-3 justify-center">
                <a href="https://www.instagram.com/code._with_bilal/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: "#000000" }}> 
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://web.facebook.com/profile.php?id=100080977412881" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: "#000000" }}>
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-bilal-tanveer-826984345/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: "#000000" }}>
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@code_with_bilal?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: "#000000" }}>
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// Mobile Floating Hamburger
export function MobileMenuTrigger() {
  return (
    <div className="fixed top-6 left-6 z-50 md:hidden">
      <SidebarTrigger className="bg-white shadow-elegant rounded-full p-4 hover:shadow-glow transition-all duration-300">
        <Menu className="w-7 h-7 text-green-500" />
      </SidebarTrigger>
    </div>
  );
}