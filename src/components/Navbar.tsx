
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Youtube, Github, Instagram } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
  ];

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight relative z-10 transition-colors hover:text-primary"
        >
          Portfolio
        </Link>
        
        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 px-4">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  location.pathname === item.path 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md transition-colors hover:bg-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "px-4 py-2 text-xl font-medium transition-all duration-200",
                location.pathname === item.path 
                  ? "text-primary" 
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Social Media Icons in Mobile Menu */}
          <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-border">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
