
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)]" />

      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-muted-foreground">
            Welcome to my portfolio
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Building beautiful digital experiences with precision and care
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            I'm a passionate developer focused on creating elegant, user-centered solutions 
            that blend form and function into seamless experiences.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View My Work
            <ArrowRight size={16} />
          </Link>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            Learn More About Me
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
