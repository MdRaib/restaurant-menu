/*
  DIGITAL MENU — সহজে পরিবর্তনযোগ্য তথ্য
  ------------------------------------------------
  BRAND_NAME, LOGO, WHATSAPP এবং PRODUCTS এখানে বদলাতে পারবেন।
  WHATSAPP নম্বর অবশ্যই +880 দিয়ে লিখবেন, যেমন: +8801XXXXXXXXX
*/
const SITE_CONFIG = {
  BRAND_NAME: "কাচ্চি ভাই",
  TAGLINE: "Taste of Traditional Kacchi",
  LOGO: "assets/logo.webp",

  PHONE: "+880 1700-000000",
  EMAIL: "hello@example.com",
  ADDRESS: "ঢাকা, বাংলাদেশ",

  // ম্যানেজারের WhatsApp নম্বর
  WHATSAPP: "+8801700000000",

  CATEGORIES: ["সব", "কাচ্চি", "বিরিয়ানি", "চিকেন", "ড্রিংকস"],

  PRODUCTS: [
    {
      name: "মাটন কাচ্চি",
      category: "কাচ্চি",
      price: 320,
      image: "https://i.postimg.cc/R0Kx7CMF/1788936979616.jpg",
      description: "সুগন্ধি বাসমতি চাল ও নরম মাটনের ঐতিহ্যবাহী কাচ্চি।",
      available: true,
      badge: "Best Seller",
      offerPrice: ""
    },
    {
      name: "চিকেন কাচ্চি",
      category: "কাচ্চি",
      price: 260,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=80",
      description: "মসলাদার চিকেন ও সুগন্ধি চালের দারুণ সমন্বয়।",
      available: true,
      badge: "",
      offerPrice: ""
    },
    {
      name: "চিকেন বিরিয়ানি",
      category: "বিরিয়ানি",
      price: 240,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
      description: "দেশি মসলায় রান্না করা ঘ্রাণযুক্ত চিকেন বিরিয়ানি।",
      available: true,
      badge: "",
      offerPrice: ""
    },
    {
      name: "চিকেন রোস্ট",
      category: "চিকেন",
      price: 180,
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80",
      description: "নরম ও রসালো চিকেন রোস্ট।",
      available: true,
      badge: "",
      offerPrice: ""
    },
    {
      name: "বোরহানি",
      category: "ড্রিংকস",
      price: 80,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
      description: "মসলাদার ঠান্ডা বোরহানি।",
      available: true,
      badge: "",
      offerPrice: ""
    }
  ]
};
