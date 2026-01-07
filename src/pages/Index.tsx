import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import RepairServices from "@/components/RepairServices";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

// Phone products - Replace images with your own
const phones = [
  {
    image: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-30-1.jpg",
    name: "Tecno Camon 30",
    price: "GH₵ 2,200 – 2,800",
    category: "New",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    name: "iPhone 15",
    price: "GH₵ 9,000+",
    category: "Premium",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a54-5g-1.jpg",
    name: "Samsung Galaxy A54",
    price: "GH₵ 3,500 – 4,200",
    category: "Popular",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-1.jpg",
    name: "Redmi Note 13",
    price: "GH₵ 1,800 – 2,400",
    category: "Budget",
  },
];

// Accessories - Replace images with your own
const accessories = [
  {
    image: "https://m.media-amazon.com/images/I/61zj5x6yZUL._AC_SL1000_.jpg",
    name: "Micro SD Cards",
    price: "GH₵ 50 – 200",
  },
  {
    image: "https://m.media-amazon.com/images/I/61M6+zjv6BL._AC_SL1000_.jpg",
    name: "Power Banks",
    price: "GH₵ 150 – 400",
  },
  {
    image: "https://m.media-amazon.com/images/I/71YkzZz0fFL._AC_SL1000_.jpg",
    name: "Phone Covers",
    price: "GH₵ 40 – 200",
  },
  {
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg",
    name: "Wireless Earbuds",
    price: "GH₵ 100 – 500",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <ProductSection
        id="phones"
        title="Phones for Sale"
        subtitle="Quality smartphones at competitive prices. All phones are tested and verified."
        products={phones}
      />

      <div className="bg-muted">
        <ProductSection
          id="accessories"
          title="Accessories"
          subtitle="Essential accessories to keep your phone protected and powered up."
          products={accessories}
        />
      </div>

      <RepairServices />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
