import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#phones", label: "Phones" },
  { href: "#accessories", label: "Accessories" },
  { href: "#services", label: "Repairs" },
  { href: "#location", label: "Location" },
  { href: "/rules", label: "Rules" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="C K. Ofori Phone Solutions" className="w-12 h-12 object-contain" />
            <span className="font-bold text-lg hidden sm:block">C K. Ofori</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="whatsapp" asChild>
              <a href="https://wa.me/233249814337" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-foreground/70 hover:text-primary hover:bg-muted rounded-lg font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href="https://wa.me/233249814337" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
