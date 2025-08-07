import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString(); // ✅ Time added here

    try {
      await emailjs.send(
        'service_7ug84qc',
        'template_h23bbgo',
        {
          from_name: formData.name,
          to_name: 'Tamween Mart',
          from_email: formData.email,
          to_email: 'tamweermart@gmail.com',
          project_type: formData.project,
          message: formData.message,
          time: timestamp // ✅ Sent to EmailJS template
        },
        'ZGDE3MpWct7Dbb-5S'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", project: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "muhamadbilaltanvir@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+923705978907",
      description: "Call for urgent projects"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Rawalpindi, Pakistan",
      description: "Available for global projects"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            Ready to transform your e-commerce business? Let's discuss your project and goals.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type</Label>
                      <Input
                        id="project"
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        placeholder="e.g., Shopify Store, Meta Ads Campaign, Web Development"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-glow">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-primary text-white shadow-glow">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Quick Response Time</h3>
                  <p className="text-sm opacity-90">
                    I typically respond within 24 hours and offer free consultation calls for serious projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
