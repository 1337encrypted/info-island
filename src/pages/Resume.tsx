
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Download, Mail, MapPin, Phone } from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Resume data - replace with your information
  const personalInfo = {
    name: "Your Name",
    title: "Software Developer",
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
    location: "City, State",
    bio: "Dedicated and results-driven software developer with a passion for creating elegant, efficient solutions. Experienced in full-stack development with a focus on creating responsive, user-friendly applications."
  };

  const experience = [
    {
      position: "Senior Developer",
      company: "Company Name",
      period: "2020 - Present",
      responsibilities: [
        "Led the development of a high-traffic web application, improving performance by 40%",
        "Collaborated with cross-functional teams to define and implement new features",
        "Mentored junior developers and conducted code reviews to ensure quality standards",
        "Implemented CI/CD pipelines that reduced deployment time by 60%"
      ]
    },
    {
      position: "Web Developer",
      company: "Previous Company",
      period: "2017 - 2020",
      responsibilities: [
        "Developed and maintained multiple client websites and applications",
        "Optimized database queries resulting in 30% faster load times",
        "Implemented responsive designs that improved mobile user engagement by 25%",
        "Participated in agile development processes and sprint planning"
      ]
    },
    {
      position: "Junior Developer",
      company: "First Company",
      period: "2015 - 2017",
      responsibilities: [
        "Assisted in the development of web applications using JavaScript frameworks",
        "Performed bug fixes and implemented minor features",
        "Participated in code reviews and improved coding skills under senior guidance",
        "Helped maintain documentation and technical specifications"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2011 - 2015",
      details: "Graduated with honors. Specialized in software engineering with minor in mathematics."
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "HTML5/CSS3"] },
    { category: "Frameworks & Libraries", items: ["React", "Node.js", "Express", "Next.js", "Django", "TailwindCSS"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Project Management", "Communication", "Agile Methodologies"] }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-start mb-12 flex-col sm:flex-row gap-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Resume</h1>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Logic for downloading resume PDF would go here
                console.log("Download resume");
              }}
            >
              <Download size={16} />
              Download PDF
            </a>
          </AnimatedSection>
        </div>

        {/* Personal Information */}
        <AnimatedSection delay={200} className="mb-12">
          <div className="glass rounded-xl p-8 shadow-sm border border-border/40">
            <h2 className="text-3xl font-bold mb-4">{personalInfo.name}</h2>
            <h3 className="text-xl text-primary mb-4">{personalInfo.title}</h3>
            
            <p className="text-muted-foreground mb-6">{personalInfo.bio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Work Experience */}
        <AnimatedSection delay={300} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Work Experience</h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="ml-2 pl-6 border-l-2 border-muted">
                <h3 className="text-xl font-semibold">{job.position}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-primary mb-2">
                  <span>{job.company}</span>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{job.period}</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-muted-foreground">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={400} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="ml-2 pl-6 border-l-2 border-muted">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-primary mb-2">
                  <span>{edu.institution}</span>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.details}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={500}>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-full bg-secondary/80 text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Resume;
