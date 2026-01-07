import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

// Placeholder images - replace with your own
const slides = [
  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=600&fit=crop",
    title: "Latest Smartphones",
    subtitle: "Get the best deals on phones",
  },
  {
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=600&fit=crop",
    title: "Premium Accessories",
    subtitle: "Cases, chargers & more",
  },
  {
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&h=600&fit=crop",
    title: "Expert Repairs",
    subtitle: "Fast & reliable service",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-[500px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xl animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" asChild>
                      <a href="#phones">Shop Now</a>
                    </Button>
                    <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
                      <a href="https://wa.me/233249814337" target="_blank" rel="noopener noreferrer">
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Business Info Bar */}
      <div className="gradient-hero py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span className="font-medium">Phones</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              <span className="font-medium">Repairs</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎧</span>
              <span className="font-medium">Accessories</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="font-medium">Akwamu-Akrade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
