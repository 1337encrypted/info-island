
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data - you can replace with your actual projects
  const projects = [
    {
      title: "Project One",
      description: "A responsive web application built with React and Node.js. This project showcases my ability to create modern, user-friendly interfaces with robust backend functionality.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with integrated payment processing. This project demonstrates my skills in building secure, scalable applications with complex functionality.",
      tags: ["React", "Firebase", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Three",
      description: "A real-time data visualization dashboard. This project showcases my ability to work with complex datasets and create intuitive, informative interfaces.",
      tags: ["Vue.js", "D3.js", "Python", "WebSockets"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-muted-foreground">
            My Work
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mb-16">
          <p className="text-lg text-muted-foreground">
            A selection of my recent work that demonstrates my skills and approach to problem-solving.
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={index} 
              delay={300 + (index * 100)} 
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="rounded-xl overflow-hidden shadow-sm border border-border/40 aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
