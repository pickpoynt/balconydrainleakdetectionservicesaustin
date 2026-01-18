import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">OW</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
                Overland Well Pros
              </h1>
              <p className="text-xs text-muted-foreground">Well Water Specialists</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-copper transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-copper transition-colors font-medium">
              Why Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-copper transition-colors font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-copper transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="copper" size="lg" asChild>
              <a href="tel:+18777921410" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-foreground hover:text-copper transition-colors font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-copper transition-colors font-medium py-2">
                Why Us
              </a>
              <a href="#testimonials" className="text-foreground hover:text-copper transition-colors font-medium py-2">
                Reviews
              </a>
              <a href="#contact" className="text-foreground hover:text-copper transition-colors font-medium py-2">
                Contact
              </a>
              <Button variant="copper" size="lg" className="w-full" asChild>
                <a href="tel:+18777921410" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
