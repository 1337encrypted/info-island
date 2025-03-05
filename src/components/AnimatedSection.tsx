
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0 
}: AnimatedSectionProps) => {
  return (
    <div 
      className={cn(
        "opacity-0 animate-slide-up",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards" 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
