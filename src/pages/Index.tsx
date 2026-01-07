import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import RepairServices from "@/components/RepairServices";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

// Import products from the data file - EDIT src/data/products.ts to add your products!
import { phones, accessories } from "@/data/products";

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
