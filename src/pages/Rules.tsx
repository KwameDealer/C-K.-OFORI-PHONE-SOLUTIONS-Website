import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const rules = [
  {
    title: "1. General Use",
    content: "Welcome to C K. OFORI PHONE SOLUTIONS. By using this website, you agree to follow our rules and use the site respectfully and lawfully.",
  },
  {
    title: "2. Product Info",
    content: [
      "We sell phones, accessories, and offer phone repair services.",
      "Images are for display; actual products may look slightly different.",
      "Prices can change without notice.",
    ],
  },
  {
    title: "3. Orders & Payments",
    content: [
      "All payments must be completed before products are released.",
      "Orders are confirmed after payment verification.",
      "We may cancel orders if false info is given.",
    ],
  },
  {
    title: "4. Repairs & Services",
    content: [
      "Collect repaired devices on time.",
      "We are not responsible for pre-existing issues.",
      "Back up your data; we are not liable for loss.",
    ],
  },
  {
    title: "5. Returns & Warranty",
    content: [
      "Products are checked before sale.",
      "No refunds unless the product is faulty at the time of sale.",
      "Warranty details will be given at purchase.",
    ],
  },
  {
    title: "6. User Conduct",
    content: [
      "Upload false or illegal content.",
      "Try to hack or damage the website.",
      "Use the site for fraud or impersonation.",
    ],
    prefix: "You must not:",
  },
  {
    title: "7. Privacy",
    content: "We only use your contact info for business. We do not sell or share it with others.",
  },
  {
    title: "8. Changes",
    content: "We can update these rules anytime. Using the website means you accept the updates.",
  },
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-hero py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Website Rules</h1>
          <p className="text-white/80 mt-2">Terms and conditions for C K. Ofori Phone Solutions</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h2 className="font-bold text-xl text-primary mb-3">{rule.title}</h2>
              {rule.prefix && <p className="text-muted-foreground mb-2">{rule.prefix}</p>}
              {Array.isArray(rule.content) ? (
                <ul className="space-y-2">
                  {rule.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-secondary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{rule.content}</p>
              )}
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-card rounded-xl p-6 shadow-card">
            <h2 className="font-bold text-xl text-primary mb-4">9. Contact Us</h2>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Business Name:</strong> C K. OFORI PHONE SOLUTIONS</p>
              <p><strong>Location:</strong> Akwamu-Akrade (New Town Junction), Eastern Region</p>
              <p><strong>Phone:</strong> 0249814337</p>
              <p><strong>Email:</strong> CKOfori@gmail.com</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/233249814337" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} C K. OFORI PHONE SOLUTIONS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Rules;
