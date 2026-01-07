import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(`Hello! I'm interested in the ${name}`);
  const whatsappLink = `https://wa.me/233249814337?text=${whatsappMessage}`;

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-product transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        {category && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-primary font-bold text-xl mb-4">{price}</p>
        <Button variant="whatsapp" className="w-full" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Buy on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
