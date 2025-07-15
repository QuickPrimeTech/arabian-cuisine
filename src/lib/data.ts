import { placeholderImg } from "@/sections/about/hero";
import { MenuItem } from "@/types/menu";

export const menuCategories = ["All", "starter", "main", "dessert", "beverage"];

export const menuFilters = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "spicy",
  "popular",
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Creamy Arborio rice with wild mushrooms, finished with truffle oil and Parmesan",
    price: 24,
    image: placeholderImg,
    category: "Main Courses",
    featured: true,
    dietary: ["Vegetarian", "Chef's Special"],
  },
  {
    id: 2,
    name: "Seared Scallops",
    description:
      "Pan-seared scallops with cauliflower purée, crispy pancetta, and herb oil",
    price: 32,
    image: placeholderImg,
    category: "Seafood",
    featured: true,
    dietary: ["Chef's Special", "Seasonal"],
  },
  {
    id: 3,
    name: "Beef Wellington",
    description:
      "Tender beef fillet wrapped in mushroom duxelles and puff pastry, served with red wine jus",
    price: 42,
    image: placeholderImg,
    category: "Main Courses",
    featured: true,
    dietary: ["Chef's Special"],
  },
  {
    id: 4,
    name: "Burrata Salad",
    description:
      "Creamy burrata with heirloom tomatoes, basil, and aged balsamic",
    price: 18,
    image: placeholderImg,
    category: "Starters",
    featured: true,
    dietary: ["Vegetarian", "Seasonal"],
  },
  {
    id: 5,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: 14,
    image: placeholderImg,
    category: "Desserts",
    featured: true,
    dietary: ["Vegetarian"],
  },
  {
    id: 6,
    name: "Lobster Bisque",
    description: "Rich and creamy lobster soup with a touch of brandy",
    price: 22,
    image: placeholderImg,
    category: "Starters",
    featured: true,
    dietary: ["Chef's Special"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Critic",
    content:
      "The attention to detail in every dish is remarkable. Savoria offers one of the most memorable dining experiences I've had in years.",
    avatar:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749800691/template_3_andbtw.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    content:
      "I've celebrated several special occasions at Savoria, and they never disappoint. The service is impeccable and the food is consistently outstanding.",
    avatar:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749800705/avatar-1_dfdctz.webp",
  },
  {
    id: 3,
    name: "Javier Gomez",
    role: "Local Food Blogger",
    content:
      "From the ambiance to the innovative menu, Savoria has mastered the art of fine dining while maintaining a warm, welcoming atmosphere.",
    avatar:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749800725/handsome-adult-male-posing_23-2148729713_rq1crq.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Wine Enthusiast",
    content:
      "Their wine pairing suggestions are exceptional. The sommelier truly understands how to enhance each dish with the perfect complement.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Chef Marco Rossi",
    role: "Executive Chef",
    bio: "With over 20 years of experience in Michelin-starred restaurants across Europe, Chef Marco brings his passion for innovative cuisine to Savoria.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Olivia Bennett",
    role: "Pastry Chef",
    bio: "Trained in Paris, Olivia creates desserts that are both visually stunning and extraordinarily delicious, adding the perfect finale to every meal.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Daniel Kim",
    role: "Sommelier",
    bio: "With an exceptional palate and knowledge of wines from around the world, Daniel ensures the perfect pairing for your dining experience.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Isabella Martinez",
    role: "Restaurant Manager",
    bio: "Isabella's attention to detail and commitment to excellence ensures that every aspect of your visit exceeds expectations.",
    image: "/placeholder.svg?height=400&width=300",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: placeholderImg,
    alt: "Signature dish plating",
    category: "Food",
  },
  {
    id: 2,
    src: placeholderImg,
    alt: "Restaurant interior with ambient lighting",
    category: "Interior",
  },
  {
    id: 3,
    src: placeholderImg,
    alt: "Chef preparing a dish in the kitchen",
    category: "Food",
  },
  {
    id: 4,
    src: placeholderImg,
    alt: "Outdoor dining area",
    category: "Exterior",
  },
  {
    id: 5,
    src: placeholderImg,
    alt: "Private dining room setup",
    category: "Private Dining",
  },
  {
    id: 6,
    src: placeholderImg,
    alt: "Wedding reception at the restaurant",
    category: "Events",
  },
  {
    id: 7,
    src: placeholderImg,
    alt: "Dessert platter presentation",
    category: "Food",
  },
  {
    id: 8,
    src: placeholderImg,
    alt: "Bar area with craft cocktails",
    category: "Interior",
  },
];

export const faqItems = [
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes, we are happy to accommodate dietary restrictions and allergies. Please inform us when making your reservation, and our chefs will prepare suitable alternatives.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "We suggest smart casual attire. While we don't enforce a strict dress code, we recommend avoiding athletic wear, shorts, and flip-flops.",
  },
  {
    question: "How far in advance should I make a reservation?",
    answer:
      "For weekends and special occasions, we recommend booking 2-3 weeks in advance. For weekday dining, 3-5 days notice is usually sufficient.",
  },
  {
    question: "Do you have a private dining room for events?",
    answer:
      "Yes, we offer a private dining room that can accommodate up to 20 guests. For larger events, we can arrange partial or full restaurant buyouts.",
  },
  {
    question: "Is there parking available?",
    answer:
      "We offer valet parking service for $15. There is also a public parking garage one block away.",
  },
];
