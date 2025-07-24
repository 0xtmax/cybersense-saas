import { Button } from "@/components/ui/button";
import { Shield, Eye, AlertTriangle, Zap } from "lucide-react";
import heroImage from "@/assets/cyber-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-blur hero-bg-glow"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20 float-animation">
        <Shield size={64} />
      </div>
      <div className="absolute top-40 right-20 text-accent/30 float-animation" style={{animationDelay: '2s'}}>
        <Eye size={48} />
      </div>
      <div className="absolute bottom-32 left-20 text-destructive/20 float-animation" style={{animationDelay: '4s'}}>
        <AlertTriangle size={56} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Next-Gen Threat Intelligence
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="gradient-text">Cyber Sense</span>
          <br />
          <span className="text-foreground">Intelligence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Advanced threat detection and monitoring platform that crawls the web for security threats,
          analyzes criticality levels, and empowers your security team with actionable intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-14">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 border-primary/30 hover:bg-primary/10">
            Watch Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Threat Detection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Real-time Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">&lt; 5min</div>
            <div className="text-muted-foreground">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;