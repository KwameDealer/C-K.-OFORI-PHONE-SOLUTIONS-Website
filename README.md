# C K. OFORI PHONE SOLUTIONS Website

Welcome to the official website for **C K. OFORI PHONE SOLUTIONS**, a business based in Akwamu-Akrade, Eastern Region, Ghana. We sell **mobile phones**, **phone accessories**, and offer **expert phone repair services**.

---
## 📌 Website Features
https://gear-gems.lovable.app/
---
## 📌 Website Features

- **Homepage**: Showcases phones, accessories, and repair services
- **Products & Services**: Display of available products with WhatsApp integration
- **Rules Page**: Clear website rules and policies to guide customers
- **Contact Options**: Phone number, email, and WhatsApp for direct messaging
- **Mobile-Friendly Design**: Fully responsive for desktop and mobile devices
- **Easy Navigation**: Smooth scrolling menu links

---

## 🛠️ Technology Used

- React + TypeScript
- Tailwind CSS
- Vite

---

## 📸 HOW TO ADD YOUR OWN IMAGES

### Image Folders

Upload your images to these folders with the specified names:

---

### 🎠 CAROUSEL/SLIDER IMAGES
**Folder:** `src/assets/slides/`

| File Name | Description |
|-----------|-------------|
| `slide1.jpg` | Hero slide 1 - "Latest Smartphones" |
| `slide2.jpg` | Hero slide 2 - "Premium Accessories" |
| `slide3.jpg` | Hero slide 3 - "Expert Repairs" |

---

### 📱 PHONE IMAGES
**Folder:** `src/assets/phones/`

| File Name | Product |
|-----------|---------|
| `phone1.jpg` | Tecno Camon 30 |
| `phone2.jpg` | iPhone 15 |
| `phone3.jpg` | Samsung Galaxy A54 |
| `phone4.jpg` | Redmi Note 13 |
| `phone5.jpg` | Infinix Hot 40 Pro |
| `phone6.jpg` | Tecno Spark 20 Pro |

---

### 🎧 ACCESSORY IMAGES
**Folder:** `src/assets/accessories/`

| File Name | Product |
|-----------|---------|
| `accessory1.jpg` | Micro SD Cards |
| `accessory2.jpg` | Power Banks |
| `accessory3.jpg` | Phone Covers |
| `accessory4.jpg` | USB Cables |
| `accessory5.jpg` | Wireless Earbuds |
| `accessory6.jpg` | Screen Protectors |

---

### 🏪 LOGO
**File:** `src/assets/logo.png`

---

## 📝 HOW TO UPDATE PRODUCTS

Edit the file `src/data/products.ts` to:
- Change product names
- Update prices
- Add or remove products
- Switch between URL images and local images

### Example: Adding a new phone

```typescript
// In src/data/products.ts

// 1. Import your image at the top
import phone7 from "@/assets/phones/phone7.jpg";

// 2. Add to the phones array
export const phones = [
  // ... existing phones
  {
    image: phone7,  // Use the import name
    name: "Your Phone Name",
    price: "GH₵ X,XXX",
    category: "Brand",
  },
];
```

---

## 🖼️ Supported Image Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

---

## 📞 Contact

- **Business Name:** C K. OFORI PHONE SOLUTIONS
- **Phone:** 0249814337
- **Location:** Akwamu-Akrade (New Town Junction), Eastern Region
- **Email:** CKOfori@gmail.com
- **WhatsApp:** [Chat Now](https://wa.me/233249814337)
