// ============================================
// 📱 PRODUCT DATA - EASY TO EDIT!
// ============================================
// 
// HOW TO ADD YOUR OWN IMAGES:
// 1. Upload phone images to: src/assets/phones/
//    Name them: phone1.jpg, phone2.jpg, phone3.jpg, etc.
//
// 2. Upload accessory images to: src/assets/accessories/
//    Name them: accessory1.jpg, accessory2.jpg, etc.
//
// 3. Update the imports below and product info!
// ============================================

// ----- PHONE IMAGES -----
// Uncomment and use these when you upload your images:
// import phone1 from "@/assets/phones/phone1.jpg";
// import phone2 from "@/assets/phones/phone2.jpg";
// import phone3 from "@/assets/phones/phone3.jpg";
// import phone4 from "@/assets/phones/phone4.jpg";
// import phone5 from "@/assets/phones/phone5.jpg";
// import phone6 from "@/assets/phones/phone6.jpg";

// ----- ACCESSORY IMAGES -----
// Uncomment and use these when you upload your images:
// import accessory1 from "@/assets/accessories/accessory1.jpg";
import accessory2 from "@/assets/accessories/accessory2.jpg";
// import accessory3 from "@/assets/accessories/accessory3.jpg";
// import accessory4 from "@/assets/accessories/accessory4.jpg";
// import accessory5 from "@/assets/accessories/accessory5.jpg";
// import accessory6 from "@/assets/accessories/accessory6.jpg";

// ============================================
// 📱 PHONES LIST
// ============================================
// Change the image to your import (e.g., phone1) after uploading
// Change name, price, and category as needed

export const phones = [
  {
    image: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-30-1.jpg", // Replace with: phone1
    name: "Tecno Camon 30",
    price: "GH₵ 2,200 – 2,800",
    category: "Tecno",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg", // Replace with: phone2
    name: "iPhone 15",
    price: "GH₵ 9,000+",
    category: "Apple",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a54-5g-1.jpg", // Replace with: phone3
    name: "Samsung Galaxy A54",
    price: "GH₵ 3,500 – 4,200",
    category: "Samsung",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-1.jpg", // Replace with: phone4
    name: "Redmi Note 13",
    price: "GH₵ 1,800 – 2,200",
    category: "Xiaomi",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot-40-pro-1.jpg", // Replace with: phone5
    name: "Infinix Hot 40 Pro",
    price: "GH₵ 1,500 – 1,900",
    category: "Infinix",
  },
  {
    image: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-20-pro-1.jpg", // Replace with: phone6
    name: "Tecno Spark 20 Pro",
    price: "GH₵ 1,600 – 2,000",
    category: "Tecno",
  },
];

// ============================================
// 🎧 ACCESSORIES LIST
// ============================================

export const accessories = [
  {
    image: "https://m.media-amazon.com/images/I/61zj5x6yZUL._AC_SL1000_.jpg", // Replace with: accessory1
    name: "Micro SD Cards",
    price: "GH₵ 50 – 200",
  },
  {
    image: accessory2,
    name: "Power Banks",
    price: "GH₵ 150 – 400",
  },
  {
    image: "https://m.media-amazon.com/images/I/71YkzZz0fFL._AC_SL1000_.jpg", // Replace with: accessory3
    name: "Phone Covers",
    price: "GH₵ 40 – 200",
  },
  {
    image: "https://m.media-amazon.com/images/I/71bJHOF-fkL._AC_SL1500_.jpg", // Replace with: accessory4
    name: "USB Cables",
    price: "GH₵ 20 – 80",
  },
  {
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg", // Replace with: accessory5
    name: "Wireless Earbuds",
    price: "GH₵ 100 – 500",
  },
  {
    image: "https://m.media-amazon.com/images/I/71o8Qw5-JjL._AC_SL1500_.jpg", // Replace with: accessory6
    name: "Screen Protectors",
    price: "GH₵ 30 – 100",
  },
];
