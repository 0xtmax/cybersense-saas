import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for small teams getting started with threat monitoring",
      features: [
        "Monitor up to 3 products",
        "Basic threat detection",
        "Email notifications",
        "Community support",
        "7-day data retention"
      ],
      limitations: [
        "Advanced threat scoring",
        "Real-time alerts",
        "Case management",
        "API access",
        "Custom integrations"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "$89",
      period: "per month",
      description: "Enhanced monitoring and intelligence for growing security teams",
      features: [
        "Monitor up to 25 products",
        "Advanced AI threat scoring",
        "Real-time alerts & notifications",
        "Complete case management",
        "30-day data retention",
        "Priority support",
        "Basic API access",
        "Custom threat feeds"
      ],
      limitations: [
        "White-label options",
        "Advanced integrations"
      ],
      buttonText: "Start Premium Trial",
      buttonVariant: "cyber" as const,
      popular: true
    },
    {
      name: "Business",
      price: "$299",
      period: "per month",
      description: "Enterprise-grade security intelligence for large organizations",
      features: [
        "Unlimited product monitoring",
        "Advanced AI threat scoring",
        "Real-time alerts & notifications",
        "Complete case management",
        "365-day data retention",
        "24/7 dedicated support",
        "Full API access",
        "Custom threat feeds",
        "White-label options",
        "Advanced integrations",
        "Custom reporting",
        "SSO integration",
        "Dedicated security analyst"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "hero" as const,
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your security needs. Start free and scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary/20 shadow-cyber scale-105' : 'hover:shadow-cyber'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-cyber text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center gap-3 opacity-50">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground line-through">{limitation}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full mt-8"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            All plans include 14-day free trial
          </div>
          <p className="text-muted-foreground">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;