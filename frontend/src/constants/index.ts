import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Product } from "../models/Product";
import { LuTruck } from "react-icons/lu";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LuPackageX } from "react-icons/lu";

export const heroImage =
  "https://images.unsplash.com/photo-1495707800306-e240c5a0d65f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skincare", label: "Skincare" },
  { href: "/makeup", label: "Makeup" },
  { href: "/contact", label: "Contact" },
];

export const newLaunchProducts: Product[] = [
  {
    id: 1,
    imgURL:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbmNhcmUlMjBhbmQlMjBtYWtldXAlMjBwcm9kdWN0c3xlbnwwfDB8MHx8fDI%3D",
    name: "Organic Coconut Body Oil",
    desc: "",
    price: 699,
    rating: 3.9,
    reviewsNum: 1009,
    category: "SKINCARE",
    SubCategory: "Body",
  },
  {
    id: 2,
    imgURL:
      "https://images.unsplash.com/photo-1591375372226-3531cf2eb6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW5jYXJlJTIwYW5kJTIwbWFrZXVwJTIwcHJvZHVjdHN8ZW58MHwwfDB8fHwy",
    name: "Irresistible Eau De Parfum",
    desc: "",
    price: 2150,
    rating: 4.5,
    reviewsNum: 1009,
    category: "SKINCARE",
    SubCategory: "Body",
  },
  {
    id: 3,
    imgURL:
      "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNraW5jYXJlJTIwYW5kJTIwbWFrZXVwJTIwcHJvZHVjdHN8ZW58MHwwfDB8fHwy",
    name: "Lip Sleeping Mask - Sweet Candy",
    desc: "",
    price: 190,
    rating: 4.3,
    reviewsNum: 5000,
    category: "SKINCARE",
    SubCategory: "Lips",
  },
  {
    id: 4,
    imgURL:
      "https://images.unsplash.com/photo-1564512480295-86e479d9b87c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNraW5jYXJlJTIwYW5kJTIwbWFrZXVwJTIwcHJvZHVjdHN8ZW58MHwwfDB8fHwy",
    name: "Jade Facial Roller for Face, Neck and Body Muscle",
    desc: "",
    price: 3100,
    rating: 4.1,
    reviewsNum: 2109,
    category: "SKINCARE",
    SubCategory: "Tools",
  },
];

export const shopByConcernCategories = [
  {
    imgURL:
      "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxwb3J0cmFpdHxlbnwwfDB8MHx8fDI%3D",
    name: "Ageing",
    concern: "skincare",
  },
  {
    imgURL:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlJTIwaW1hZ2VzfGVufDB8MHwwfHx8Mg%3D%3D",
    name: "Acne & Oily skin",
    concern: "skincare",
  },
  {
    imgURL:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWFufGVufDB8MHwwfHx8Mg%3D%3D",
    name: "Hairfall",
    concern: "haircare",
  },
  {
    imgURL:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0fGVufDB8MHwwfHx8MA%3D%3D",
    name: "Pigmentation",
    concern: "skincare",
  },
];

export const projectNature =
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyZWV8ZW58MHwwfDB8fHwy";

export const projectNature2 =
  "https://images.unsplash.com/photo-1618225622203-f2f969d5d42c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const reviews = [
  {
    imgURL:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHwwfDB8fHwy",
    customerName: "Morich Brown",
    rating: 3.8,
    feedback:
      "The attention to formula and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL:
      "https://images.unsplash.com/photo-1513673054901-2b5f51551112?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    customerName: "Emily Monges",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "Skincare", link: "/skincare" },
      { name: "Makeup", link: "/makeup" },
      { name: "Haircare", link: "/haircare" },
      { name: "Babycare", link: "/babycare" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/faqs" },
      { name: "How it works", link: "/" },
      { name: "Policies", link: "/policies" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@beU.com", link: "mailto:customer@beU.com" },
      { name: "+92554869994", link: "tel:+92554869994" },
    ],
  },
];

export const socialMedia = [
  { logo: FaSquareFacebook, alt: "facebook logo" },
  { logo: FaXTwitter, alt: "twitter logo" },
  { logo: AiFillInstagram, alt: "instagram logo" },
];

export const faqs = [
  {
    id: 1,
    title: "What are the core values of your skincare brand?",
    content:
      "Our brand is built on the principles of simplicity, purity, and effectiveness. We believe in providing skincare products that are free from unnecessary additives, are gentle on the skin, and deliver visible results.",
  },
  {
    id: 2,
    title: "Are your products suitable for all skin types?",
    content:
      "Yes, our products are formulated to be suitable for all skin types, including sensitive skin. We use high-quality, non-irritating ingredients to ensure compatibility and comfort.",
  },
  {
    id: 3,
    title: "Do you test on animals?",
    content:
      "No, we are committed to cruelty-free practices. Our products are not tested on animals at any stage of product development.",
  },
  {
    id: 4,
    title: "How can I find out which product is right for me?",
    content:
      "We recommend starting with our skincare quiz on our website, which will help you identify the products that best suit your skin's needs. Additionally, our customer service team is always available to provide personalized recommendations.",
  },
  {
    id: 5,
    title: "What is the shelf life of your skincare products?",
    content:
      "Our products typically have a shelf life of 12 months after opening. We use natural preservatives to maintain product integrity and efficacy over time.",
  },
  {
    id: 6,
    title: "Can I use your products if I have acne-prone skin?",
    content:
      "Our products are designed to be gentle and non-comedogenic, making them suitable for acne-prone skin. However, we always recommend patch testing new products if you have concerns.",
  },
  {
    id: 7,
    title: "Are your skincare products vegan?",
    content:
      "Yes, our entire skincare line is vegan. We do not use any animal-derived ingredients in our products.",
  },
  {
    id: 8,
    title: "How sustainable is your packaging?",
    content:
      "Sustainability is important to us. Our packaging is made from recycled materials and is fully recyclable. We encourage our customers to recycle the packaging after use.",
  },
  {
    id: 9,
    title: "Where are your products manufactured?",
    content:
      "All of our products are proudly manufactured in facilities that adhere to the highest standards of quality and ethical practices, right here in our home country.",
  },
  {
    id: 10,
    title: "Do you offer international shipping?",
    content:
      "Yes, we ship internationally so that everyone can enjoy our clean, minimal skincare products. Please check our shipping policy for more details.",
  },
];

export const policies = [
  {
    id: 1,
    title: "Shipping",
    logo: LuTruck,
    content:
      "Orders are processed within 1-2 business days and shipped via standard ground shipping. Expected delivery is within 3-5 business days after processing. We offer expedited shipping options at an additional cost. Please select your preferred shipping method at checkout. Currently, we ship to select international destinations. Shipping costs and delivery time  vary based on location. Once your order is shipped, you will receive a tracking number via email to monitor your package’s progress. We provide free standard shipping on orders over a certain value. This threshold may change due to promotional events.",
  },
  {
    id: 2,
    title: "Privacy",
    logo: MdOutlinePrivacyTip ,
    content:
      "We collect personal information such as name, address, and contact details to process orders. Payment information is handled securely and not stored on our servers. We are committed to protecting your privacy and implement robust security measures to safeguard your data. We do not sell or share your personal information with third parties for marketing purposes without your explicit consent. You have the right to access, correct, or delete your personal information at any time. Please contact our customer service for assistance.",
  },
  {
    id: 3,
    title: "Cancellation ",
    logo: LuPackageX ,
    content:
      "Orders can be cancelled within 24 hours of placement without any penalty. If you wish to cancel an order after the 24-hour window, please contact customer service as soon as possible. If the order has not been shipped, we will attempt to process the cancellation. Refunds for cancelled orders will be processed to the original payment method within 7-10 business days. Custom or personalized orders cannot be cancelled once production has begun. For any issues or questions regarding cancellations, please reach out to our customer service team for prompt assistance.",
  },
];

export const minimalMakeupProducts: Product[] = [
  {
    id: 1,
    imgURL:
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Creamy Matte Lipstick",
    desc: "",
    price: 34.99,
    rating: 4.3,
    reviewsNum: 5000,
    category: "MAKEUP",
    SubCategory: "Lips",
  },
  {
    id: 2,
    imgURL:
      "https://images.unsplash.com/photo-1625093525885-282384697917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1ha2V1cHxlbnwwfDB8MHx8fDI%3D",
    name: "Eyes On Me ! 4 in 1 Quad Eyeshadow Pallete",
    desc: "",
    price: 250,
    rating: 3.4,
    reviewsNum: 1105,
    category: "MAKEUP",
    SubCategory: "Eye",
  },
  {
    id: 3,
    imgURL:
      "https://images.unsplash.com/photo-1631120234265-83988f58b8af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Beauty Blender Sponge",
    desc: "",
    price: 6.0,
    rating: 4.3,
    reviewsNum: 300,
    category: "MAKEUP",
    SubCategory: "Tools",
  },
  {
    id: 4,
    imgURL:
      "https://images.unsplash.com/photo-1625094640367-05f84293fe42?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bling it on Glitter Pallete",
    desc: "",
    price: 30.2,
    rating: 3.9,
    reviewsNum: 7109,
    category: "MAKEUP",
    SubCategory: "Eye",
  },
];

export const subCategoriesMapping = {
  SKINCARE: [
    "Cleanser",
    "Mask",
    "Moisturizer",
    "LipCare",
    "Serum",
    "EyeCare",
    "Body",
  ],
  MAKEUP: ["Eyes", "Lips", "Tools", "Face"],
  HAIRCARE: [],
  BABYCARE: [],
};

export const sortByCategories = [
  { id: "name", label: "Name" },
  { id: "custrating", label: "Customer Rating" },
  { id: "pricehightolow", label: "Price: High To Low" },
  { id: "pricelowtohigh", label: "Price: Low To High" },
];

export const allProducts: Product[] = [
  {
    id: 1,
    imgURL:
      "https://images.unsplash.com/photo-1575249142951-35b95b9bb5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Vitamin C Serum",
    desc: "",
    price: 1250,
    rating: 4,
    reviewsNum: 2050,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 2,
    imgURL:
      "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anti-Acne Salicylic Green Clay Mask",
    desc: "",
    price: 550,
    rating: 4.1,
    reviewsNum: 6317,
    category: "SKINCARE",
    SubCategory: "Mask",
  },

  {
    id: 3,
    imgURL:
      "https://images.unsplash.com/photo-1556228721-e65f06ab45c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHwwfDB8fHwy",
    name: "Gentle Skin Cleanser",
    desc: "",
    price: 399,
    rating: 4.8,
    reviewsNum: 138501,
    category: "SKINCARE",
    SubCategory: "Cleanser",
  },

  {
    id: 4,
    imgURL:
      "https://images.unsplash.com/photo-1611080541626-4ecc5ead618d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lip Sleeping Mask - Sweet Candy",
    desc: "",
    price: 199,
    rating: 4.3,
    reviewsNum: 5000,
    category: "SKINCARE",
    SubCategory: "LipCare",
  },

  {
    id: 5,
    imgURL:
      "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Glycolic Bright Day Cream",
    desc: "",
    price: 699,
    rating: 3.9,
    reviewsNum: 9719,
    category: "SKINCARE",
    SubCategory: "Moisturizer",
  },

  {
    id: 6,
    imgURL:
      "https://images.unsplash.com/photo-1612817288765-6d2b644c762e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vitamin C + Niacinamide Serum Combo",
    desc: "",
    price: 1299,
    rating: 3.9,
    reviewsNum: 155,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 7,
    imgURL:
      "https://images.unsplash.com/photo-1643836361449-90d35fd14f1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rice Water Bright Cleanser",
    desc: "",
    price: 849,
    rating: 4.3,
    reviewsNum: 15095,
    category: "SKINCARE",
    SubCategory: "Cleanser",
  },

  {
    id: 8,
    imgURL:
      "https://images.unsplash.com/photo-1561383615-1f7c3646eedf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "AHA + BHA Face Wash",
    desc: "",
    price: 399,
    rating: 4,
    reviewsNum: 8739,
    category: "SKINCARE",
    SubCategory: "Cleanser",
  },

  {
    id: 9,
    imgURL:
      "https://images.unsplash.com/photo-1629732047822-21d2237fe63b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Coffee Undereye Cream for Dark Circles",
    desc: "",
    price: 349,
    rating: 3.2,
    reviewsNum: 14140,
    category: "SKINCARE",
    SubCategory: "EyeCare",
  },

  {
    id: 10,
    imgURL:
      "https://images.unsplash.com/photo-1667242003558-e42942d2b911?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Super light Gel Oil Free Moisturizer",
    desc: "",
    price: 475,
    rating: 4.1,
    reviewsNum: 163169,
    category: "SKINCARE",
    SubCategory: "Moisturizer",
  },

  {
    id: 11,
    imgURL:
      "https://images.unsplash.com/photo-1569600187472-a0d8b8cf606a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mugwort Face Mask",
    desc: "",
    price: 499,
    rating: 2.3,
    reviewsNum: 11034,
    category: "SKINCARE",
    SubCategory: "Mask",
  },

  {
    id: 12,
    imgURL:
      "https://images.unsplash.com/photo-1562158438-16cec9c3c002?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vitamin K and Retinol Under Eye Cream",
    desc: "",
    price: 499,
    rating: 4.6,
    reviewsNum: 3077,
    category: "SKINCARE",
    SubCategory: "EyeCare",
  },

  {
    id: 13,
    imgURL:
      "https://images.unsplash.com/photo-1631390573012-21806f8ff5bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kojic Acid Face Serum",
    desc: "",
    price: 599,
    rating: 3.7,
    reviewsNum: 128,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 14,
    imgURL:
      "https://images.unsplash.com/photo-1586212653598-40f9046fe5e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VydW18ZW58MHwwfDB8fHwy",
    name: "Hyaluronic Serum",
    desc: "",
    price: 799,
    rating: 4.2,
    reviewsNum: 12399,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 15,
    imgURL:
      "https://images.unsplash.com/photo-1631214524115-9942bf927d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lip Plumping Gloss",
    desc: "",
    price: 650,
    rating: 4,
    reviewsNum: 5461,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 16,
    imgURL:
      "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Volume Express Mascara",
    desc: "",
    price: 499,
    rating: 4.7,
    reviewsNum: 1798667,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 17,
    imgURL:
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Black Magic Pen Liner",
    desc: "",
    price: 399,
    rating: 4.1,
    reviewsNum: 56749,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 18,
    imgURL:
      "https://images.unsplash.com/photo-1631214504157-ee93581cefde?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Artist's Makeup Brush Set",
    desc: "",
    price: 3790,
    rating: 4.5,
    reviewsNum: 534,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 19,
    imgURL:
      "https://images.unsplash.com/photo-1631214498986-c4187a007fd5?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Eye Brush Set",
    desc: "",
    price: 599,
    rating: 3.7,
    reviewsNum: 314,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 20,
    imgURL:
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Starshow Shadow Pot",
    desc: "",
    price: 1050,
    rating: 5,
    reviewsNum: 3,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 21,
    imgURL:
      "https://images.unsplash.com/photo-1631120234265-83988f58b8af?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Professional Beauty Blender",
    desc: "",
    price: 250,
    rating: 4.1,
    reviewsNum: 25523,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 22,
    imgURL:
      "https://images.unsplash.com/photo-1575686717697-f43bd36e74c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Matte Powder Blush",
    desc: "",
    price: 3100,
    rating: 5,
    reviewsNum: 1262,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 23,
    imgURL:
      "https://images.unsplash.com/photo-1625093525885-282384697917?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Eyes On Me ! 4 in 1 Quad Eyeshadow Pallete",
    desc: "",
    price: 250,
    rating: 3.4,
    reviewsNum: 1105,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 24,
    imgURL:
      "https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Loose Finishing Powder",
    desc: "",
    price: 799,
    rating: 4.3,
    reviewsNum: 25098,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 25,
    imgURL:
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Matte Compact Powder",
    desc: "",
    price: 285,
    rating: 3.8,
    reviewsNum: 28861,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 26,
    imgURL:
      "https://images.unsplash.com/photo-1631214524049-0ebbbe6d81aa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Universal Lip Luminizer Gloss",
    desc: "",
    price: 2100,
    rating: 5,
    reviewsNum: 190,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 27,
    imgURL:
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Creamy Matte Lipstick",
    desc: "",
    price: 329,
    rating: 4.2,
    reviewsNum: 126990,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 28,
    imgURL:
      "https://images.unsplash.com/photo-1590156423742-3c58d6b9d605?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Face Highlighter Pallete",
    desc: "",
    price: 3500,
    rating: 4.8,
    reviewsNum: 785,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 29,
    imgURL:
      "https://images.unsplash.com/photo-1599733589296-1a181e38769b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Matte Ink Liquid Lipstick",
    desc: "",
    price: 599,
    rating: 4.1,
    reviewsNum: 8791,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 30,
    imgURL:
      "https://images.unsplash.com/photo-1521837670401-2bd439d49e6d?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Power Bullet Matte Lipstick",
    desc: "",
    price: 1150,
    rating: 4,
    reviewsNum: 6481,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 31,
    imgURL:
      "https://images.unsplash.com/photo-1534875833255-a18d5467e893?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Eyelash Curler",
    desc: "",
    price: 349,
    rating: 2.4,
    reviewsNum: 12,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 32,
    imgURL:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rosemary Hair Oil",
    desc: "",
    price: 322,
    rating: 3.6,
    reviewsNum: 14603,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 33,
    imgURL:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bond Repair Hair Mask",
    desc: "",
    price: 500,
    rating: 5,
    reviewsNum: 59,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 34,
    imgURL:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sulphate Free Hydrating Shampoo",
    desc: "",
    price: 540,
    rating: 4.2,
    reviewsNum: 8466,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 35,
    imgURL:
      "https://images.unsplash.com/photo-1620331309205-b5a4669ac526?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hair Dryer",
    desc: "",
    price: 1299,
    rating: 4.1,
    reviewsNum: 5999,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 36,
    imgURL:
      "https://images.unsplash.com/photo-1620331310411-6c0819176107?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hair Straightner",
    desc: "",
    price: 2300,
    rating: 4.7,
    reviewsNum: 10,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 37,
    imgURL:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bond Repair Hair Shampoo",
    desc: "",
    price: 699,
    rating: 3.1,
    reviewsNum: 7841,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 38,
    imgURL:
      "https://images.unsplash.com/photo-1621277906553-047eaaef4400?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anti Frizz Smoothing Conditioner",
    desc: "",
    price: 820,
    rating: 4,
    reviewsNum: 4653,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 39,
    imgURL:
      "https://images.unsplash.com/photo-1613731587985-ea81ea4b3bdc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Gentle Baby Wipes",
    desc: "",
    price: 200,
    rating: 4.4,
    reviewsNum: 949,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 40,
    imgURL:
      "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Baby Massage Oil",
    desc: "",
    price: 1890,
    rating: 4.5,
    reviewsNum: 342217,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 41,
    imgURL:
      "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Baby Daily Lotion with Shea Butter",
    desc: "",
    price: 870,
    rating: 4.4,
    reviewsNum: 4750,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 42,
    imgURL:
      "https://images.unsplash.com/photo-1605040056130-38d9faad3534?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Almond Oil",
    desc: "",
    price: 459,
    rating: 3.8,
    reviewsNum: 387,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 43,
    imgURL:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbmNhcmUlMjBhbmQlMjBtYWtldXAlMjBwcm9kdWN0c3xlbnwwfDB8MHx8fDI%3D",
    name: "Organic Coconut Body Oil",
    desc: "",
    price: 699,
    rating: 3.9,
    reviewsNum: 1009,
    category: "SKINCARE",
    SubCategory: "Body",
  },
  {
    id: 44,
    imgURL:
      "https://images.unsplash.com/photo-1591375372226-3531cf2eb6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW5jYXJlJTIwYW5kJTIwbWFrZXVwJTIwcHJvZHVjdHN8ZW58MHwwfDB8fHwy",
    name: "Irresistible Eau De Parfum",
    desc: "",
    price: 2150,
    rating: 4.5,
    reviewsNum: 1009,
    category: "SKINCARE",
    SubCategory: "Body",
  },
];
