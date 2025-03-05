
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, BookOpen, Coffee, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-muted-foreground">
            About Me
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg text-muted-foreground mb-12">
            A passionate developer dedicated to crafting beautiful digital experiences 
            that solve real problems. With a blend of technical expertise and creative thinking, 
            I transform complex challenges into elegant, user-centered solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <AnimatedSection delay={300}>
            <div className="rounded-xl bg-card p-8 shadow-sm border border-border/40">
              <h2 className="text-2xl font-bold mb-4">My Background</h2>
              <p className="text-muted-foreground">
                With X years of experience in web development, I've worked on a diverse range of projects 
                from e-commerce platforms to interactive web applications. I hold a degree in Computer Science 
                from University Name and continuously expand my skills through ongoing learning.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="rounded-xl bg-card p-8 shadow-sm border border-border/40">
              <h2 className="text-2xl font-bold mb-4">My Approach</h2>
              <p className="text-muted-foreground">
                I believe that great design is both beautiful and functional. Every project begins with deep research 
                and understanding of user needs, followed by thoughtful planning and meticulous implementation. 
                I'm passionate about clean code, accessibility, and creating experiences that delight users.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={500}>
          <h2 className="text-3xl font-bold mb-8 text-center">What I Value</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: <Coffee className="h-8 w-8 text-primary mb-4" />, 
              title: "Quality", 
              description: "Crafting solutions with care and attention to detail." 
            },
            { 
              icon: <BookOpen className="h-8 w-8 text-primary mb-4" />, 
              title: "Learning", 
              description: "Continuously expanding my knowledge and skills." 
            },
            { 
              icon: <Heart className="h-8 w-8 text-primary mb-4" />, 
              title: "Passion", 
              description: "Bringing enthusiasm to every project I undertake." 
            },
            { 
              icon: <Award className="h-8 w-8 text-primary mb-4" />, 
              title: "Excellence", 
              description: "Striving for the highest standards in my work." 
            },
          ].map((item, index) => (
            <AnimatedSection key={index} delay={600 + (index * 100)} className="text-center">
              <div className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 h-full">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1000} className="text-center">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
