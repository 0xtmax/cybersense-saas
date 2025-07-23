import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search, TrendingUp, Users, Bell, FileText, Database, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Intelligent Crawling",
      description: "Advanced web crawling algorithms that monitor thousands of sources for threat intelligence related to your products and services.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Threat Scoring",
      description: "AI-powered threat assessment that provides accurate criticality scores and risk analysis for each detected threat.",
      color: "text-accent"
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Instant notifications when critical threats are detected, ensuring your security team can respond immediately.",
      color: "text-destructive"
    },
    {
      icon: FileText,
      title: "Case Management",
      description: "Comprehensive case creation and tracking system for managing threat responses and security incidents.",
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Product Monitoring",
      description: "Easy-to-use interface for adding and removing products from your monitoring portfolio with granular control.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Security Dashboard",
      description: "Centralized dashboard providing complete visibility into your threat landscape with actionable insights.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to stay ahead of cyber threats with advanced monitoring,
            intelligent analysis, and streamlined incident response.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-cyber">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Trusted by Security Teams Worldwide
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold">Enterprise Corp</div>
            <div className="text-2xl font-bold">TechGuard Inc</div>
            <div className="text-2xl font-bold">SecureNet Ltd</div>
            <div className="text-2xl font-bold">CyberSafe Pro</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;