
import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  
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

  const handleDownload = () => {
    // In a real implementation, you would generate a PDF here
    // For now, we'll just show a toast notification
    toast.success("Resume download started");
    
    // Example of how you might implement actual PDF printing
    // window.print();
    
    console.log("Download resume");
  };

  return (
    <div className="pt-28 pb-16 px-6 flex flex-col items-center min-h-screen">
      <div className="container max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-start mb-8 flex-col sm:flex-row gap-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Resume</h1>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <button 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={handleDownload}
            >
              <Download size={16} />
              Download PDF
            </button>
          </AnimatedSection>
        </div>
      </div>

      {/* A4 Resume Sheet */}
      <AnimatedSection delay={200} className="w-full max-w-[210mm] mx-auto">
        <div 
          ref={resumeRef}
          className="bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-200"
          style={{
            width: "210mm",
            minHeight: "297mm",
            maxWidth: "100%",
            boxSizing: "border-box"
          }}
        >
          {/* Resume Content */}
          <div className="p-8 md:p-12">
            {/* Header / Personal Info */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{personalInfo.name}</h2>
              <h3 className="text-xl text-primary mb-4">{personalInfo.title}</h3>
              
              <p className="text-gray-700 mb-6">{personalInfo.bio}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
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

            {/* Work Experience */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 pb-1 border-b border-gray-200 text-gray-900">
                Work Experience
              </h2>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="pl-0">
                    <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-primary mb-2">
                      <span className="text-gray-800">{job.company}</span>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <span className="text-gray-500">{job.period}</span>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-gray-700 text-sm">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 pb-1 border-b border-gray-200 text-gray-900">
                Education
              </h2>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="pl-0">
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-gray-800 mb-2">
                      <span>{edu.institution}</span>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <span className="text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold mb-4 pb-1 border-b border-gray-200 text-gray-900">
                Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-base font-semibold mb-2 text-gray-900">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Resume;
