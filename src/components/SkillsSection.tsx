import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ShoppingCart, 
  TrendingUp, 
  Code, 
  Globe,
  Palette,
  Database,
  Smartphone,
  BarChart3
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "E-commerce Development",
      icon: ShoppingCart,
      skills: [
        { name: "Shopify & Shopify Plus", level: 95 },
        { name: "Custom Theme Development", level: 90 },
        { name: "App Integration", level: 88 },
        { name: "Payment Gateway Setup", level: 92 }
      ]
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      skills: [
        { name: "Meta Ads (Facebook/Instagram)", level: 93 },
        { name: "TikTokAds", level: 85 },
        { name: "Conversion Rate Optimization", level: 88 },
        { name: "Email Marketing", level: 82 }
      ]
    },
    {
      title: "Web Development",
      icon: Code,
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React & Next.js", level: 88 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Node.js", level: 80 }
      ]
    },
    {
      title: "Design & Analytics",
      icon: BarChart3,
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Google Analytics", level: 88 },
        { name: "A/B Testing", level: 90 },
        { name: "Performance Optimization", level: 87 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            Comprehensive expertise across the full e-commerce development and marketing stack
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, label: "Global Reach", desc: "Worldwide clients" },
              { icon: Smartphone, label: "Mobile First", desc: "Responsive design" },
              { icon: Database, label: "Data Driven", desc: "Analytics focused" },
              { icon: Palette, label: "Creative Design", desc: "Modern aesthetics" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.label}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;