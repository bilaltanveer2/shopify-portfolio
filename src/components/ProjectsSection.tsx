import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, Smartphone } from "lucide-react";

// ✅ Image imports
import pro1 from "@/images/pro1.png";
import pro2 from "@/images/pro2.png";
import pro3 from "@/images/pro3.png";
import pro4 from "@/images/pro4.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tamween Mart - Grocery E-commerce Store",
      description:
        "Complete Shopify store for grocery and daily essentials with custom theme, user-friendly navigation, and optimized checkout process.",
      tech: ["Shopify", "Liquid", "JavaScript", "Meta Pixel"],
      category: "E-commerce",
      icon: ShoppingCart,
      metrics: { conversion: "+40%", revenue: "+150%", traffic: "+200%" },
      liveUrl: "https://tamweenmart.store/",
      caseStudyUrl: "https://github.com/bilaltanveer2/tamween-mart",
      image: pro1,
    },
    {
      title: "Shopping Center - Multi-vendor Marketplace",
      description:
        "Complete Shopify store for grocery and daily essentials with custom theme, user-friendly navigation, and optimized checkout process.",
      tech: ["Shopify", "Liquid", "JavaScript", "Meta Pixel"],
      category: "E-commerce",
      icon: ShoppingCart,
      metrics: { conversion: "+40%", revenue: "+150%", traffic: "+200%" },
      liveUrl: "https://fatyx.pk/",
      image: pro4,
    },
    {
      title: "The Shopping Centr",
      description:
        "The Shopping Centr is a fully responsive Shopify store developed as part of an eCommerce project. It features a sleek product catalog, optimized user experience, and seamless payment integration.",
      tech: ["Shopify", "Liquid", "JavaScript", "Meta Pixel"],
      category: "E-commerce",
      icon: ShoppingCart,
      metrics: { conversion: "+40%", revenue: "+150%", traffic: "+200%" },
      liveUrl: "https://theshoppingcentr.myshopify.com/",
      password: "abcd",
      image: pro2,
    },
    {
      title: "Mobile App E-commerce Solution",
      description:
        "Cross-platform mobile e-commerce app with real-time inventory, push notifications, and social commerce features.",
      tech: ["React Native", "Node.js", "MongoDB", "Shopify API"],
      category: "Mobile Development",
      icon: Smartphone,
      metrics: { downloads: "50K+", rating: "4.8★", retention: "+65%" },
      liveUrl: "https://advance-port-rmhx.vercel.app/",
      caseStudyUrl: "https://github.com/bilaltanveer2/advance-port.git",
      image: pro3,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            Showcasing successful e-commerce solutions and marketing campaigns that drive real results
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge variant="outline" className="border-primary text-primary mt-1">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace("_", " ")}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 flex-col">
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      {project.caseStudyUrl && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Case Study
                          </a>
                        </Button>
                      )}
                    </div>

                    {project.password && (
                      <div className="flex gap-3 items-center">
                        <Badge variant="secondary" className="text-sm">
                          pwd: {project.password}
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
