import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, MessageCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI-Powered Haircare Assistant
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Your Personal
            <span className="block text-primary">Haircare Expert</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized haircare routines, product recommendations, and expert advice tailored to your unique hair needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft" asChild>
              <Link to="/chat">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chat
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/chat">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Everything You Need for Healthy Hair
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-soft hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI Chat Assistant</CardTitle>
                <CardDescription>
                  Get instant answers to your haircare questions from our intelligent chatbot
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Personalized Routines</CardTitle>
                <CardDescription>
                  Custom haircare routines based on your hair type, porosity, and goals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Track Progress</CardTitle>
                <CardDescription>
                  Monitor your hair health journey with insights and progress tracking
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-primary text-primary-foreground border-0 shadow-soft">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Haircare?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Start chatting with our AI assistant and discover personalized haircare solutions today.
            </p>
            <Button size="lg" variant="secondary" className="shadow-md" asChild>
              <Link to="/chat">
                Get Started Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
