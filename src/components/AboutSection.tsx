import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Award, label: "Projects Completed", value: "200+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: TrendingUp, label: "ROI Increase", value: "300%" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            Passionate e-commerce specialist with expertise in Shopify development,
            Meta advertising, and modern web technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              {/* Profile Image for About Section */}
              <div className="w-48 h-48 mx-auto md:mx-0 mb-8 rounded-xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <div className="w-44 h-44 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                    <img
                      src="/src/images/4.jpg" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6">My Expertise</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in creating high-converting e-commerce experiences that drive results.
                With deep knowledge of Shopify's ecosystem and proven Meta advertising strategies,
                I help businesses scale their online presence and maximize revenue.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="border-primary text-primary">Shopify Plus</Badge>
                <Badge variant="outline" className="border-primary text-primary">Liquid Templates</Badge>
                <Badge variant="outline" className="border-primary text-primary">Meta Ads Manager</Badge>
                <Badge variant="outline" className="border-primary text-primary">React</Badge>
                <Badge variant="outline" className="border-primary text-primary">TypeScript</Badge>
                <Badge variant="outline" className="border-primary text-primary">Node.js</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-subtle shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help you achieve your e-commerce goals with proven strategies
                and cutting-edge technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;