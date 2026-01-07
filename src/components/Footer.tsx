import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">C K. Ofori Phone Solutions</h3>
            <p className="text-background/70 mb-4">
              Your trusted partner for quality phones, accessories, and expert repair services in Akwamu-Akrade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#phones" className="text-background/70 hover:text-primary transition-colors">
                  Phones
                </a>
              </li>
              <li>
                <a href="#accessories" className="text-background/70 hover:text-primary transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                  Repair Services
                </a>
              </li>
              <li>
                <a href="/rules" className="text-background/70 hover:text-primary transition-colors">
                  Terms & Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+233249814337" className="text-background/70 hover:text-primary transition-colors">
                  0249814337
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:CKOfori@gmail.com" className="text-background/70 hover:text-primary transition-colors">
                  CKOfori@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Akwamu-Akrade (New Town Junction),<br />
                  Eastern Region, Ghana
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-background/50 text-sm">
            © {currentYear} C K. Ofori Phone Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
