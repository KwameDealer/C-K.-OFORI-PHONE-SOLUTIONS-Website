import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Visit Our Shop</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Come see us in person at Akwamu-Akrade, Eastern Region, Ghana
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=Akwamu-Akrade,Ghana&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shop Location"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="font-bold text-2xl mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-muted-foreground">
                    Akwamu-Akrade (New Town Junction)<br />
                    Eastern Region, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:+233249814337" className="text-muted-foreground hover:text-primary transition-colors">
                    0249814337
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:CKOfori@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    CKOfori@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 8:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
