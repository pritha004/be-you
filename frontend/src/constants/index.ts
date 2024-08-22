import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Product } from "../models/Product";
import { LuTruck } from "react-icons/lu";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LuPackageX } from "react-icons/lu";
import { heroImg, minimalP1, minimalP2, minimalP3, minimalP4, newLaunchP1, newLaunchP2, newLaunchP3, newLaunchP4, prod1, prod10, prod11, prod12, prod13, prod14, prod15, prod16, prod17, prod18, prod19, prod2, prod20, prod21, prod22, prod23, prod24, prod25, prod26, prod27, prod28, prod29, prod3, prod30, prod31, prod32, prod33, prod34, prod35, prod36, prod37, prod38, prod39, prod4, prod40, prod41, prod42, prod43, prod44, prod5, prod6, prod7, prod8, prod9, projNature1, projNature2, reviewer1, reviewer2, shopByConcern1, shopByConcern2, shopByConcern3, shopByConcern4 } from "../assets";

// Local:  'http://localhost:5173';
const YOUR_DOMAIN = 'http://localhost:5173'

export const heroImage = heroImg;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skincare", label: "Skincare" },
  { href: "/makeup", label: "Makeup" },
  { href: "/contact", label: "Contact" },
];

export const newLaunchProducts: Product[] = [
  {
    id: 1,
    imgURL: newLaunchP1,
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
    imgURL: newLaunchP2,
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
    imgURL: newLaunchP3,
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
    imgURL: newLaunchP4,
    name: "Jade Facial Roller",
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
    imgURL: shopByConcern1,
    name: "Ageing",
    concern: "skincare",
  },
  {
    imgURL: shopByConcern2,
    name: "Acne & Oily skin",
    concern: "skincare",
  },
  {
    imgURL: shopByConcern3,
    name: "Hairfall",
    concern: "haircare",
  },
  {
    imgURL: shopByConcern4,
    name: "Pigmentation",
    concern: "skincare",
  },
];

export const projectNature = projNature1;

export const projectNature2 = projNature2;

export const reviews = [
  {
    imgURL: reviewer1,
    customerName: "Morich Brown",
    rating: 3.8,
    feedback:
      "The attention to formula and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: reviewer2,
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
      { name: "About us", link: "/aboutus" },
      { name: "FAQs", link: "/faqs" },
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
    logo: MdOutlinePrivacyTip,
    content:
      "We collect personal information such as name, address, and contact details to process orders. Payment information is handled securely and not stored on our servers. We are committed to protecting your privacy and implement robust security measures to safeguard your data. We do not sell or share your personal information with third parties for marketing purposes without your explicit consent. You have the right to access, correct, or delete your personal information at any time. Please contact our customer service for assistance.",
  },
  {
    id: 3,
    title: "Cancellation ",
    logo: LuPackageX,
    content:
      "Orders can be cancelled within 24 hours of placement without any penalty. If you wish to cancel an order after the 24-hour window, please contact customer service as soon as possible. If the order has not been shipped, we will attempt to process the cancellation. Refunds for cancelled orders will be processed to the original payment method within 7-10 business days. Custom or personalized orders cannot be cancelled once production has begun. For any issues or questions regarding cancellations, please reach out to our customer service team for prompt assistance.",
  },
];

export const minimalMakeupProducts: Product[] = [
  {
    id: 1,
    imgURL: minimalP1,
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
    imgURL: minimalP2,
    name: "4 in 1 Quad Eyeshadow",
    desc: "",
    price: 250,
    rating: 3.4,
    reviewsNum: 1105,
    category: "MAKEUP",
    SubCategory: "Eye",
  },
  {
    id: 3,
    imgURL: minimalP3,
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
    imgURL: minimalP4,
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
    imgURL: `${YOUR_DOMAIN}${prod1}`,
    name: "The Vitamin C Serum",
    desc: "Unleash the power of Vitamin C with this serum designed to combat signs of aging and brighten your complexion. Its antioxidant properties protect against environmental stressors, while promoting collagen production for firmer, more radiant skin.",
    price: 1250,
    rating: 4,
    reviewsNum: 2050,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 2,
    imgURL: `${YOUR_DOMAIN}${prod2}`,
    name: "Salicylic Green Clay Mask",
    desc: "Dive into the detoxifying benefits of green clay combined with salicylic acid. This mask targets acne, controls oil production, and unclogs pores, leaving you with a clear, matte finish. Ideal for oily and acne-prone skin types.",
    price: 550,
    rating: 4.1,
    reviewsNum: 6317,
    category: "SKINCARE",
    SubCategory: "Mask",
  },

  {
    id: 3,
    imgURL: `${YOUR_DOMAIN}${prod3}`,
    name: "Gentle Skin Cleanser",
    desc: "Experience the soothing touch of this gentle cleanser, perfect for sensitive skin. It removes dirt and makeup without irritation, preserving the skin’s natural barrier. Enjoy clean, soft skin without any tightness or dryness.",
    price: 399,
    rating: 4.8,
    reviewsNum: 138501,
    category: "SKINCARE",
    SubCategory: "Cleanser",
  },

  {
    id: 4,
    imgURL: `${YOUR_DOMAIN}${prod4}`,
    name: "Lip Sleeping Mask",
    desc: "Pamper your lips overnight with this nourishing mask. Infused with hydrating ingredients, it repairs and softens lips, erasing the damage of the day. The sweet candy flavor makes it a delightful nightly ritual.",
    price: 199,
    rating: 4.3,
    reviewsNum: 5000,
    category: "SKINCARE",
    SubCategory: "LipCare",
  },

  {
    id: 5,
    imgURL: `${YOUR_DOMAIN}${prod5}`,
    name: "Glycolic Bright Day Cream",
    desc: "Illuminate your day with this glycolic acid-infused cream. It gently exfoliates dead skin cells, revealing a brighter, more even-toned complexion. With daily use, it diminishes fine lines and imparts a youthful glow.",
    price: 699,
    rating: 3.9,
    reviewsNum: 9719,
    category: "SKINCARE",
    SubCategory: "Moisturizer",
  },

  {
    id: 6,
    imgURL: `${YOUR_DOMAIN}${prod6}`,
    name: "Vitamin C Serum Combo",
    desc: "This dynamic serum combo harnesses the strengths of Vitamin C and niacinamide to tackle pigmentation and texture issues. It fades dark spots, reduces redness, and strengthens the skin barrier for a visibly healthier appearance.",
    price: 1299,
    rating: 3.9,
    reviewsNum: 155,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 7,
    imgURL: `${YOUR_DOMAIN}${prod7}`,
    name: "Rice Water Cleanser",
    desc: "Indulge in the purifying properties of rice water with this brightening cleanser. It washes away impurities while nourishing the skin, leaving it soft, luminous, and refreshed. Perfect for starting and ending your day on a fresh note.",
    price: 849,
    rating: 4.3,
    reviewsNum: 15095,
    category: "SKINCARE",
    SubCategory: "Cleanser",
  },

  {
    id: 8,
    imgURL: `${YOUR_DOMAIN}${prod8}`,
    name: "AHA + BHA Face Wash",
    desc: "Reveal smoother, clearer skin with this exfoliating face wash. The combination of AHAs and BHAs works to dissolve dead skin cells and unclog pores, promoting a refined and blemish-free complexion.",
    price: 399,
    rating: 4,
    reviewsNum: 8739,
    category: "SKINCARE",
    SubCategory: "Cleanser",
  },

  {
    id: 9,
    imgURL: `${YOUR_DOMAIN}${prod9}`,
    name: "Coffee Undereye Cream",
    desc: "Awaken your eyes with this caffeine-rich undereye cream. It combats dark circles, reduces puffiness, and smooths fine lines, giving you a refreshed and youthful look. Perfect for those who want to erase the signs of sleepless nights.",
    price: 349,
    rating: 3.2,
    reviewsNum: 14140,
    category: "SKINCARE",
    SubCategory: "EyeCare",
  },

  {
    id: 10,
    imgURL: `${YOUR_DOMAIN}${prod10}`,
    name: "Super Light Moisturizer",
    desc: "Stay hydrated without the heaviness with this oil-free gel moisturizer. Its quick-absorbing formula delivers moisture where it’s needed, balancing the skin and leaving it feeling supple and shine-free.",
    price: 475,
    rating: 4.1,
    reviewsNum: 163169,
    category: "SKINCARE",
    SubCategory: "Moisturizer",
  },

  {
    id: 11,
    imgURL: `${YOUR_DOMAIN}${prod11}`,
    name: "Mugwort Face Mask",
    desc: "This calming face mask is formulated with mugwort extract, known for its soothing properties. It’s designed to alleviate irritated skin, reduce redness, and provide a comforting sensation to stressed skin.",
    price: 499,
    rating: 2.3,
    reviewsNum: 11034,
    category: "SKINCARE",
    SubCategory: "Mask",
  },

  {
    id: 12,
    imgURL: `${YOUR_DOMAIN}${prod12}`,
    name: "Retinol Under Eye Cream",
    desc: "A rejuvenating under-eye cream that combines the power of Vitamin K and retinol to diminish dark circles and fine lines. It’s perfect for nightly use to restore the delicate eye area.",
    price: 499,
    rating: 4.6,
    reviewsNum: 3077,
    category: "SKINCARE",
    SubCategory: "EyeCare",
  },

  {
    id: 13,
    imgURL: `${YOUR_DOMAIN}${prod13}`,
    name: "Kojic Acid Face Serum",
    desc: "Brighten and even out your skin tone with this kojic acid serum. It targets hyperpigmentation and sun damage, leaving your skin with a luminous and more uniform complexion.",
    price: 599,
    rating: 3.7,
    reviewsNum: 128,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 14,
    imgURL:`${YOUR_DOMAIN}${prod14}`,
    name: "Hyaluronic Serum",
    desc: "Hydrate your skin deeply with this hyaluronic acid serum. It attracts moisture to the skin’s surface, plumping fine lines and leaving your skin supple and moisturized.",
    price: 799,
    rating: 4.2,
    reviewsNum: 12399,
    category: "SKINCARE",
    SubCategory: "Serum",
  },

  {
    id: 15,
    imgURL: `${YOUR_DOMAIN}${prod15}`,
    name: "Lip Plumping Gloss",
    desc: "Get fuller-looking lips instantly with this lip plumping gloss. It enhances lip volume and provides a glossy shine while hydrating your lips.",
    price: 650,
    rating: 4,
    reviewsNum: 5461,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 16,
    imgURL: `${YOUR_DOMAIN}${prod16}`,
    name: "Volume Express Mascara",
    desc: "Achieve dramatic volume with this express mascara. Its formula helps to build up lash thickness without clumping, for a bold and beautiful look.",
    price: 499,
    rating: 4.7,
    reviewsNum: 1798667,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 17,
    imgURL: `${YOUR_DOMAIN}${prod17}`,
    name: "Black Magic Pen Liner",
    desc: "Create the perfect winged eyeliner with ease using this pen liner. Its precision tip allows for a smooth application and the intense black pigment ensures lasting impact.",
    price: 399,
    rating: 4.1,
    reviewsNum: 56749,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 18,
    imgURL: `${YOUR_DOMAIN}${prod18}`,
    name: "Artist's Makeup Brush Set",
    desc: "This professional-grade brush set includes all the essential tools you need for a flawless makeup application. Each brush is crafted for specific makeup techniques.    ",
    price: 3790,
    rating: 4.5,
    reviewsNum: 534,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 19,
    imgURL: `${YOUR_DOMAIN}${prod19}`,
    name: "Eye Brush Set",
    desc: "Enhance your eye makeup with this specialized brush set. It includes various brushes designed for precise eyeshadow application, blending, and detailing.",
    price: 599,
    rating: 3.7,
    reviewsNum: 314,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 20,
    imgURL: `${YOUR_DOMAIN}${prod20}`,
    name: "Starshow Shadow Pot",
    desc: "Unleash your creativity with this highly pigmented shadow pot. The formula provides a long-lasting, shimmering finish that can be used to create a variety of eye looks.",
    price: 1050,
    rating: 5,
    reviewsNum: 3,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 21,
    imgURL: `${YOUR_DOMAIN}${prod21}`,
    name: "Beauty Blender",
    desc: "Achieve a flawless makeup application with this professional beauty blender. Its unique shape ensures seamless blending and contouring on all areas of the face.",
    price: 250,
    rating: 4.1,
    reviewsNum: 25523,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 22,
    imgURL: `${YOUR_DOMAIN}${prod22}`,
    name: "Matte Powder Blush",
    desc: "Achieve a flawless makeup application with this professional beauty blender. Its unique shape ensures seamless blending and contouring on all areas of the face.",
    price: 3100,
    rating: 5,
    reviewsNum: 1262,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 23,
    imgURL: `${YOUR_DOMAIN}${prod23}`,
    name: "4 in 1 Quad Eyeshadow",
    desc: "Create endless eye looks with this versatile quad eyeshadow palette. From subtle daytime to dramatic evening looks, these richly pigmented shades blend effortlessly.",
    price: 250,
    rating: 3.4,
    reviewsNum: 1105,
    category: "MAKEUP",
    SubCategory: "Eyes",
  },

  {
    id: 24,
    imgURL: `${YOUR_DOMAIN}${prod24}`,
    name: "Loose Finishing Powder",
    desc: "Set your makeup in place with this lightweight loose finishing powder. It minimizes shine and blurs imperfections for a soft-focus effect.",
    price: 799,
    rating: 4.3,
    reviewsNum: 25098,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 25,
    imgURL: `${YOUR_DOMAIN}${prod25}`,
    name: "Matte Compact Powder",
    desc: "Control shine and achieve a matte finish with this compact powder. Perfect for touch-ups throughout the day, it offers buildable coverage.",
    price: 285,
    rating: 3.8,
    reviewsNum: 28861,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 26,
    imgURL: `${YOUR_DOMAIN}${prod26}`,
    name: "Lip Luminizer Gloss",
    desc: "Illuminate your lips with this universal lip luminizer gloss. Its non-sticky formula glides on smoothly, providing a shimmering glow.",
    price: 2100,
    rating: 5,
    reviewsNum: 190,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 27,
    imgURL: `${YOUR_DOMAIN}${prod27}`,
    name: "Creamy Matte Lipstick",
    desc: "Enjoy full coverage and a modern matte finish with this creamy matte lipstick. Its comfortable formula delivers intense color payoff in a range of stunning shades.",
    price: 329,
    rating: 4.2,
    reviewsNum: 126990,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 28,
    imgURL: `${YOUR_DOMAIN}${prod28}`,
    name: "Face Highlighter Pallete",
    desc: "Highlight your best features with this face highlighter palette. The blendable, luminous powders create a radiant, lit-from-within glow.",
    price: 3500,
    rating: 4.8,
    reviewsNum: 785,
    category: "MAKEUP",
    SubCategory: "Face",
  },

  {
    id: 29,
    imgURL: `${YOUR_DOMAIN}${prod29}`,
    name: "Matte Ink Liquid Lipstick",
    desc: "Make a statement with this matte ink liquid lipstick. The long-wearing formula offers bold color that stays put without drying out your lips.",
    price: 599,
    rating: 4.1,
    reviewsNum: 8791,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 30,
    imgURL: `${YOUR_DOMAIN}${prod30}`,
    name: "Bullet Matte Lipstick",
    desc: "Experience high-impact color with the power bullet matte lipstick. Its ultra-pigmented formula provides a smooth, matte finish that lasts.",
    price: 1150,
    rating: 4,
    reviewsNum: 6481,
    category: "MAKEUP",
    SubCategory: "Lips",
  },

  {
    id: 31,
    imgURL: `${YOUR_DOMAIN}${prod31}`,
    name: "Eyelash Curler",
    desc: "Transform your lashes with this ergonomic eyelash curler. Designed for comfort and precision, it gently lifts and curls lashes, creating a wide-eyed, enchanting look that lasts all day.",
    price: 349,
    rating: 2.4,
    reviewsNum: 12,
    category: "MAKEUP",
    SubCategory: "Tools",
  },

  {
    id: 32,
    imgURL: `${YOUR_DOMAIN}${prod32}`,
    name: "Rosemary Hair Oil",
    desc: "Nourish your scalp and hair with this invigorating rosemary hair oil. Known for stimulating hair growth and adding shine, it’s the perfect treatment for healthier, more vibrant hair.",
    price: 322,
    rating: 3.6,
    reviewsNum: 14603,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 33,
    imgURL: `${YOUR_DOMAIN}${prod33}`,
    name: "Bond Repair Hair Mask",
    desc: "Revive damaged hair with this intensive bond repair hair mask. It works at the molecular level to repair broken bonds, restoring elasticity and strength to your locks.",
    price: 500,
    rating: 5,
    reviewsNum: 59,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 34,
    imgURL: `${YOUR_DOMAIN}${prod34}`,
    name: "Sulphate Free Shampoo",
    desc: "Cleanse your hair without stripping it of natural oils with this sulphate-free hydrating shampoo. It’s gentle on the scalp and perfect for keeping your hair moisturized and shiny.",
    price: 540,
    rating: 4.2,
    reviewsNum: 8466,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 35,
    imgURL: `${YOUR_DOMAIN}${prod35}`,
    name: "Hair Dryer",
    desc: "Achieve salon-quality styling at home with this powerful hair dryer. With multiple heat settings and a cool shot button, it dries hair quickly while minimizing heat damage.",
    price: 1299,
    rating: 4.1,
    reviewsNum: 5999,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 36,
    imgURL: `${YOUR_DOMAIN}${prod36}`,
    name: "Hair Straightner",
    desc: "Get sleek, straight hair with this high-performance hair straightener. Its ceramic plates ensure even heat distribution, reducing frizz and enhancing shine.",
    price: 2300,
    rating: 4.7,
    reviewsNum: 10,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 37,
    imgURL: `${YOUR_DOMAIN}${prod37}`,
    name: "Bond Repair Shampoo",
    desc: "Restore your hair’s vitality with this bond repair shampoo. It targets damaged areas, providing deep nourishment and leaving your hair strong and resilient.",
    price: 699,
    rating: 3.1,
    reviewsNum: 7841,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 38,
    imgURL: `${YOUR_DOMAIN}${prod38}`,
    name: "Anti Frizz Conditioner",
    desc: "Tame unruly hair with this anti-frizz smoothing conditioner. It seals the hair cuticle to lock in moisture and eliminate frizz, giving you smooth, manageable hair.",
    price: 820,
    rating: 4,
    reviewsNum: 4653,
    category: "HAIRCARE",
    SubCategory: "",
  },

  {
    id: 39,
    imgURL: `${YOUR_DOMAIN}${prod39}`,
    name: "Gentle Baby Wipes",
    desc: " Keep your baby clean and comfortable with these gentle baby wipes. Hypoallergenic and alcohol-free, they’re safe for even the most sensitive skin.",
    price: 200,
    rating: 4.4,
    reviewsNum: 949,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 40,
    imgURL: `${YOUR_DOMAIN}${prod40}`,
    name: "Baby Massage Oil",
    desc: "Enhance your baby’s well-being with this soothing massage oil. Rich in nutrients and gentle on the skin, it’s perfect for nurturing and calming your little one.",
    price: 1890,
    rating: 4.5,
    reviewsNum: 342217,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 41,
    imgURL: `${YOUR_DOMAIN}${prod41}`,
    name: "Baby Daily Lotion",
    desc: "Pamper your baby’s skin with this luxurious daily lotion enriched with shea butter. It’s specially formulated to be gentle on delicate skin, providing long-lasting hydration and protection from dryness. The creamy texture absorbs quickly, leaving your baby’s skin soft, supple, and smelling sweet.",
    price: 870,
    rating: 4.4,
    reviewsNum: 4750,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 42,
    imgURL: `${YOUR_DOMAIN}${prod42}`,
    name: "Almond Oil",
    desc: "This pure almond oil is a versatile addition to your baby care routine. Rich in vitamins and antioxidants, it can be used for gentle massages, helping to soothe and nourish your baby’s skin. It’s also great for treating cradle cap and can be used by moms to hydrate their skin.",
    price: 459,
    rating: 3.8,
    reviewsNum: 387,
    category: "BABYCARE",
    SubCategory: "",
  },

  {
    id: 43,
    imgURL: `${YOUR_DOMAIN}${prod43}`,
    name: "Organic Coconut Body Oil",
    desc: "Experience the benefits of organic coconut oil for your whole body. This all-natural oil deeply moisturizes and softens the skin, leaving it with a radiant glow. Its lightweight formula is perfect for daily use and can also be applied to hair for added shine and health.",
    price: 699,
    rating: 3.9,
    reviewsNum: 1009,
    category: "SKINCARE",
    SubCategory: "Body",
  },
  {
    id: 44,
    imgURL: `${YOUR_DOMAIN}${prod44}`,
    name: "Irresistible Eau De Parfum",
    desc: "Elevate your presence with this irresistible eau de parfum. Its captivating fragrance is a blend of floral and musky notes, creating a sophisticated and alluring scent that lingers throughout the day. Perfect for special occasions or whenever you want to make a lasting impression.",
    price: 2150,
    rating: 4.5,
    reviewsNum: 1009,
    category: "SKINCARE",
    SubCategory: "Body",
  },
];
