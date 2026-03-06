import menuChinese from "@/assets/menu-chinese.jpg";
import menuVeg from "@/assets/menu-veg-new.jpg";
import menuNonveg from "@/assets/menu-nonveg-new.jpg";
import menuBirthday from "@/assets/menu-birthday.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";

export interface FoodCategory {
  slug: string;
  title: string;
  image: string;
  description: string;
  items: string[];
}

export const foodCategories: FoodCategory[] = [
  {
    slug: "chinese-foods",
    title: "Chinese Foods",
    image: menuChinese,
    description: "Delicious Chinese cuisine crafted with authentic flavors.",
    items: [
      "Hakka Noodles",
      "Veg Manchurian",
      "Spring Rolls",
      "Fried Rice",
      "Chilli Paneer",
      "Sweet & Sour Chicken",
      "Dim Sum Platter",
      "Hot & Sour Soup",
    ],
  },
  {
    slug: "veg-foods",
    title: "Veg Foods",
    image: menuVeg,
    description: "A rich selection of vegetarian delights for every palate.",
    items: [
      "Paneer Butter Masala",
      "Dal Makhani",
      "Mixed Veg Curry",
      "Jeera Rice & Naan",
      "Palak Paneer",
      "Aloo Gobi",
      "Veg Biryani",
      "Live Chaat Counter",
    ],
  },
  {
    slug: "non-veg-foods",
    title: "Non-Veg Foods",
    image: menuNonveg,
    description: "Premium non-vegetarian dishes prepared by expert chefs.",
    items: [
      "Butter Chicken",
      "Mutton Rogan Josh",
      "Fish Curry",
      "Chicken Biryani",
      "Tandoori Platter",
      "Prawn Masala",
      "Seekh Kebab",
      "Egg Curry",
    ],
  },
  {
    slug: "birthday-foods",
    title: "Birthday Foods",
    image: menuBirthday,
    description: "Special birthday menu to make celebrations memorable.",
    items: [
      "Custom Birthday Cake",
      "Cupcake Tower",
      "Pastry Assortment",
      "Mini Sandwiches",
      "Pizza Bites",
      "Chocolate Fountain",
      "Cookie Platter",
      "Candy & Popcorn Bar",
    ],
  },
  {
    slug: "drinks",
    title: "Drinks",
    image: menuDrinks,
    description: "Refreshing beverages and signature mocktails for every occasion.",
    items: [
      "Fresh Fruit Juices",
      "Mango Lassi",
      "Masala Chai Station",
      "Cold Coffee",
      "Signature Mocktails",
      "Lemon Mint Cooler",
      "Rose Sharbat",
      "Buttermilk (Chaas)",
    ],
  },
];
