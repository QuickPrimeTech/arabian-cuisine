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
    name: "Chicken Biriani",
    description:
      "Fragrant basmati rice layered with spiced chicken, herbs, and caramelized onions, slow-cooked to rich, flavorful perfection.",
    price: 700,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752586946/Chicken_Biryani_eqb3jk.jpg",
    category: "Main Courses",
    featured: true,
    dietary: ["Vegetarian", "Chef's Special"],
  },
  {
    id: 2,
    name: "Dates with Black Tea",
    description:
      "Sweet dates served alongside a glass of hot black tea, a traditional and energizing snack popular in Swahili and Islamic cultures.",
    price: 150,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752595385/imgi_3_19051999_222637358247615_4317120346470744064_n_xwh1yx.jpg",
    category: "Beverages",
    featured: true,
    dietary: ["Vegan", "Gluten-Free"],
  },
  {
    id: 3,
    name: "Grilled Chicken with Fried Potatoes",
    description:
      "Juicy, spice-marinated grilled chicken served with crispy fried potato slices, fresh onions, and a savory dipping sauce.",
    price: 450,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752589022/imgi_37_AC9h4nrSmiXhG0Qy0K7KKPRgg_ujWu1FHUWeQ9QUwc7_oLWdU6pq5vMZ39PiRF-ThawcmeluCfz3UXSxPCK0Mrj2OX0DsYxsWcjGDdJzBEos4YaSGz81tSGKKV9CiSEGK84qGi9pE92g_s580-k-no_iojtrf.jpg",
    category: "Main Courses",
    featured: true,
    dietary: ["Spicy"],
  },
  {
    id: 4,
    name: "Power Protein Salad",
    description:
      "A nutritious salad loaded with fresh spinach, boiled eggs, avocado slices, tuna flakes, carrots, tomatoes, and assorted nuts. Perfect for a healthy and energizing meal.",
    price: 400,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752595174/imgi_14_18579632_1498366690184483_3373633026448687104_n_rwd7dj.jpg",
    category: "Salads",
    featured: true,
    dietary: ["Gluten-Free"],
  },
  {
    id: 5,
    name: "Chocolate Oreo Milkshake",
    description:
      "A rich and creamy chocolate milkshake blended with crushed Oreo cookies, topped with a generous layer of cookie crumble and served chilled with a straw.",
    price: 300,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752590400/imgi_48_AF1QipMY_5bFcHtjmEG6Nufzggbs-fT3Zh3QpH-AfRzo_s609-k-no_ibcv1p.jpg",
    category: "Beverages",
    featured: true,
    dietary: ["Vegetarian", "Sweet Treat"],
  },
  {
    id: 6,
    name: "Nyama Choma with Rice",
    description:
      "Tender roasted goat meat served with fluffy white rice, a side of fresh tomato salsa, and grilled vegetable garnish. A beloved staple of Kenyan cuisine.",
    price: 550,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752595081/imgi_10_18580575_414793855573391_7777672047722758144_n_kop9hs.jpg",
    category: "Main Courses",
    featured: true,
    dietary: ["High Protein", "Kenyan Classic"],
  },
  {
    id: 7,
    name: "Mango Delight",
    description:
      "A smooth and creamy mango dessert served chilled in elegant glasses. Made from ripe mangoes, blended with yogurt or cream for a refreshing tropical treat.",
    price: 250,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599221/juice_clgy4p.jpg",
    category: "Desserts & Beverages",
    featured: true,
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: 8,
    name: "Tropical Grilled Chicken Salad",
    description:
      "A colorful, nutrient-packed salad with juicy grilled chicken, charred pineapple slices, fresh avocado, cherry tomatoes, cucumber, red onions, and leafy greens, topped with sesame seeds.",
    price: 550,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599230/salad_cllrlo.jpg",
    category: "Salads",
    featured: true,
    dietary: ["High Protein", "Gluten-Free", "Tropical"],
  },
  {
    id: 10,
    name: "Chicken Mandi Platter",
    description:
      "A large communal platter featuring aromatic spiced rice, tender roasted chicken pieces, and flavorful broth served in individual bowls. A traditional Middle Eastern-inspired dish popular at gatherings.",
    price: 1200,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752598903/imgi_20_18512627_1340716886012730_3091618838068854784_n_zrs6kt.jpg",
    category: "Main Courses",
    featured: true,
    dietary: ["Spiced", "Group Meal", "Halal Friendly"],
  },
  {
    id: 11,
    name: "Assorted Gourmet Ice Cream",
    description:
      "A vibrant selection of creamy ice cream scoops in various flavors including chocolate, vanilla, strawberry, and nut-filled varieties. Garnished with chocolate shavings, orange zest, and berries for a perfect sweet treat.",
    price: 350,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599228/icecream_pbb4fr.jpg",
    category: "Desserts",
    featured: true,
    dietary: ["Vegetarian", "Sweet Treat", "Chilled Dessert"],
  },
  {
    id: 12,
    name: "Chicken Pilau Platter with Grilled Potatoes",
    description:
      "A generous platter of aromatic chicken pilau served with seasoned grilled potatoes and a fresh side salad of onions, lettuce, and tomato dressing. Perfect for sharing or a hearty solo meal.",
    price: 700,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599230/ricepotatoes_j0nbil.jpg",
    category: "Main Courses",
    featured: true,
    dietary: ["Spiced", "Hearty Meal", "Halal Friendly"],
  },
  {
    id: 13,
    name: "Spicy Garlic Chicken Stir-Fry",
    description:
      "Tender chicken chunks stir-fried with mushrooms, red onions, and chili in a rich garlic sauce, topped with fresh herbs and spring onions.",
    price: 750,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599220/imgi_4_19050135_266720253802665_5099028510031216640_n_ctjr46.jpg",
    category: "Main Courses",
    featured: true,
    dietary: ["Spicy"],
  },
  {
    id: 14,
    name: "Grilled Pineapple Chicken Salad",
    description:
      "A vibrant, wholesome salad featuring juicy grilled chicken breast glazed with a sweet-savory sauce, paired with char-grilled pineapple rings, creamy avocado slices, fresh cherry tomatoes, crisp cucumber, red onions, and mixed greens, all sprinkled with sesame seeds.",
    price: 820,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599224/imgi_13_18514063_130342017525944_5463796908499664896_n_nqvyni.jpg",
    category: "Main Courses",
    featured: true,
    dietary: ["Gluten-Free", "Dairy-Free"],
  },
  {
    id: 15,
    name: "Tomato & Onion Kachumbari",
    description:
      "A fresh and zesty East African salad made with sliced red onions, ripe tomatoes, and chopped cilantro, lightly tossed in lemon juice for a bright and tangy flavor. Perfect as a side dish or light appetizer.",
    price: 350,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599231/imgi_6_18809274_224490641389979_3602125419739873280_n_vf0lcs.jpg",
    category: "Sides & Salads",
    featured: true,
    dietary: ["Vegan", "Gluten-Free", "Dairy-Free"],
  },
  {
    id: 16,
    name: "Strawberry Jelly & Cream Delight",
    description:
      "A refreshing dessert of vibrant strawberry-flavored jelly served in individual glass bowls, topped generously with a smooth layer of sweet cream. Light, fruity, and perfect for any occasion.",
    price: 300,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599234/imgi_30_18646659_1045038015631315_2119548008180744192_n_pnet2w.jpg",
    category: "Desserts",
    featured: true,
    dietary: ["Vegetarian"],
  },
  {
    id: 17,
    name: "Tropical Mango Pasta Salad",
    description:
      "A refreshing twist on pasta salad featuring penne pasta tossed with sweet mango chunks, shredded carrots, green bell peppers, and a light tangy dressing. A colorful and fruity fusion perfect for warm days.",
    price: 600,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752599237/imgi_5_18809672_790616011087527_1954340862779457536_n_zhx50l.jpg",
    category: "Sides & Salads",
    featured: true,
    dietary: ["Vegetarian", "Dairy-Free"],
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
