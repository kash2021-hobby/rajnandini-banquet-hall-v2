import menuChinese from "@/assets/menu-chinese.webp";
import menuVeg from "@/assets/menu-veg-new.webp";
import menuNonveg from "@/assets/menu-nonveg-new.webp";
import menuBirthday from "@/assets/menu-birthday.webp";
import menuDrinks from "@/assets/menu-drinks.webp";

export interface FoodItem {
  name: string;
  image: string;
}

export interface FoodSubSection {
  title: string;
  selectionRule: string;
  items: FoodItem[];
}

export interface FoodCategory {
  slug: string;
  title: string;
  image: string;
  description: string;
  items: FoodItem[];
  subSections?: FoodSubSection[];
}

export const foodCategories: FoodCategory[] = [
  {
    slug: "live-counters",
    title: "Live Counters",
    image: menuChinese,
    description: "Interactive live cooking stations for an engaging dining experience.",
    items: [],
    subSections: [
      {
        title: "Chaat Live Counter",
        selectionRule: "Any one",
        items: [
          { name: "Pani Puri", image: menuChinese },
          { name: "Aloo Tikki", image: menuChinese },
          { name: "Jhalmuri", image: menuChinese },
        ],
      },
      {
        title: "South Indian Live Counter",
        selectionRule: "Any one item",
        items: [
          { name: "Dosa (Masala, Plain)", image: menuChinese },
          { name: "Mini Dosa", image: menuChinese },
          { name: "Idli Sambar", image: menuChinese },
        ],
      },
      {
        title: "Continental Live Counter",
        selectionRule: "Any one",
        items: [
          { name: "Pasta (White or Red Sauce)", image: menuChinese },
          { name: "Grilled Vegetables with Herb in Butter", image: menuChinese },
        ],
      },
      {
        title: "Chinese Live Counter",
        selectionRule: "Any one item",
        items: [
          { name: "Stir Fry Veg Noodles", image: menuChinese },
          { name: "Momo (Veg or Chicken)", image: menuChinese },
        ],
      },
    ],
  },
  {
    slug: "starters",
    title: "Starters",
    image: menuNonveg,
    description: "Delicious appetizers to kick off your celebration.",
    items: [],
    subSections: [
      {
        title: "Veg Starter",
        selectionRule: "Any one item",
        items: [
          { name: "Hara Bhara Kabab", image: menuVeg },
          { name: "Paneer Tikka", image: menuVeg },
          { name: "Corn & Kaju Kabab", image: menuVeg },
          { name: "Palak Pakora", image: menuVeg },
          { name: "Paneer Pakora", image: menuVeg },
          { name: "Veg Pakora", image: menuVeg },
          { name: "Onion Pakora", image: menuVeg },
          { name: "French Fries", image: menuVeg },
          { name: "Crispy Baby Corn", image: menuVeg },
          { name: "Cheese Ball", image: menuVeg },
          { name: "Chilli Paneer Dry", image: menuVeg },
          { name: "Honey Chilli Potato", image: menuVeg },
          { name: "Veg Manchurian Dry", image: menuVeg },
          { name: "Cheese Nuggets", image: menuVeg },
        ],
      },
      {
        title: "Non-Veg Starter",
        selectionRule: "Any one item",
        items: [
          { name: "Chicken Tikka", image: menuNonveg },
          { name: "Chicken 65", image: menuNonveg },
          { name: "Chicken Majestic", image: menuNonveg },
          { name: "Chicken Satay", image: menuNonveg },
          { name: "Chicken Malai Tikka", image: menuNonveg },
          { name: "Chicken Hariyali Tikka", image: menuNonveg },
          { name: "Chicken Malai Kabab", image: menuNonveg },
          { name: "Chicken Pakora", image: menuNonveg },
          { name: "Chicken Crisper", image: menuNonveg },
          { name: "Chilli Chicken Dry", image: menuNonveg },
          { name: "Chicken Dry Fry", image: menuNonveg },
          { name: "Chicken Cutlet", image: menuNonveg },
          { name: "Fish Finger", image: menuNonveg },
          { name: "Fish Ball", image: menuNonveg },
          { name: "Fish Cutlet", image: menuNonveg },
          { name: "Crispy Fish Cigar", image: menuNonveg },
        ],
      },
    ],
  },
  {
    slug: "beverages-soups",
    title: "Beverages & Soups",
    image: menuDrinks,
    description: "Refreshing beverages and warming soups to complement your meal.",
    items: [],
    subSections: [
      {
        title: "Mocktail Bar",
        selectionRule: "Any one item",
        items: [
          { name: "Virgin Mojito", image: menuDrinks },
          { name: "Masala Soda", image: menuDrinks },
          { name: "Blue Lagoon", image: menuDrinks },
          { name: "Watermelon Cooler", image: menuDrinks },
          { name: "Aam Panna", image: menuDrinks },
          { name: "Peach Mojito", image: menuDrinks },
        ],
      },
      {
        title: "Tea & Coffee Bar",
        selectionRule: "Any two items",
        items: [
          { name: "Milk Coffee", image: menuDrinks },
          { name: "Black Coffee", image: menuDrinks },
          { name: "Milk Tea", image: menuDrinks },
          { name: "Black Tea", image: menuDrinks },
          { name: "Green Tea", image: menuDrinks },
          { name: "Masala Tea", image: menuDrinks },
          { name: "Lemon Tea", image: menuDrinks },
        ],
      },
      {
        title: "Soups",
        selectionRule: "Any one Veg / Non-Veg",
        items: [
          { name: "Sweet Corn Soup", image: menuDrinks },
          { name: "Clear Soup", image: menuDrinks },
          { name: "Hot & Sour Soup", image: menuDrinks },
          { name: "Manchow Soup", image: menuDrinks },
        ],
      },
    ],
  },
  {
    slug: "main-course",
    title: "Main Course",
    image: menuVeg,
    description: "A lavish spread of main course dishes prepared by expert chefs.",
    items: [],
    subSections: [
      {
        title: "Indian Salads",
        selectionRule: "Any two",
        items: [
          { name: "Green Salad", image: menuVeg },
          { name: "Sprout Salad", image: menuVeg },
          { name: "Onion Salad", image: menuVeg },
          { name: "Corn Salad", image: menuVeg },
          { name: "Peanut Salad", image: menuVeg },
        ],
      },
      {
        title: "Chutney",
        selectionRule: "Any two items",
        items: [
          { name: "Mint-Coriander Chutney", image: menuVeg },
          { name: "Chilli Mustard Chutney", image: menuVeg },
          { name: "Garlic Chutney", image: menuVeg },
          { name: "Mint Chutney", image: menuVeg },
          { name: "Masoor Dal Chutney", image: menuVeg },
          { name: "Sesame Chutney", image: menuVeg },
        ],
      },
      {
        title: "Complementary Add-ons",
        selectionRule: "Included",
        items: [
          { name: "Pickle", image: menuVeg },
          { name: "Sliced Lemon", image: menuVeg },
          { name: "Sliced Onion", image: menuVeg },
          { name: "Green Chilli", image: menuVeg },
        ],
      },
      {
        title: "Breads",
        selectionRule: "Any one item",
        items: [
          { name: "Rumali Roti", image: menuVeg },
          { name: "Tandoori Roti", image: menuVeg },
          { name: "Plain Naan", image: menuVeg },
          { name: "Butter Naan", image: menuVeg },
          { name: "Plain Puri", image: menuVeg },
          { name: "Lachha Paratha", image: menuVeg },
        ],
      },
      {
        title: "Rice",
        selectionRule: "Any two items",
        items: [
          { name: "Steam Rice", image: menuVeg },
          { name: "Jeera Rice", image: menuVeg },
          { name: "Veg Biryani", image: menuVeg },
          { name: "Veg Fried Rice", image: menuVeg },
          { name: "Veg Pulao", image: menuVeg },
          { name: "Green Peas Pulao", image: menuVeg },
        ],
      },
      {
        title: "Dal",
        selectionRule: "Any two items",
        items: [
          { name: "Plain Dal", image: menuVeg },
          { name: "Chana Dal", image: menuVeg },
          { name: "Dal Makhani", image: menuVeg },
          { name: "Dal Tadka", image: menuVeg },
          { name: "Rajma Masala", image: menuVeg },
          { name: "Dal Butter Fry", image: menuVeg },
          { name: "Moong Dal", image: menuVeg },
          { name: "Mati Mahar Dal", image: menuVeg },
        ],
      },
      {
        title: "Vegetarian Main Course",
        selectionRule: "Any two items",
        items: [
          { name: "Mix Veg", image: menuVeg },
          { name: "Tawa Veg", image: menuVeg },
          { name: "Baby Potato Fry", image: menuVeg },
          { name: "Alu Jhuri", image: menuVeg },
          { name: "Aloo Dam", image: menuVeg },
          { name: "Masala Aloo Dam", image: menuVeg },
          { name: "Veg Malai Kofta", image: menuVeg },
          { name: "Brinjal Fry", image: menuVeg },
          { name: "Pumpkin Fry", image: menuVeg },
          { name: "Aloo Patol Posto", image: menuVeg },
          { name: "Aloo Gobi Posto", image: menuVeg },
        ],
      },
      {
        title: "Paneer & Mushroom",
        selectionRule: "Any one item",
        items: [
          { name: "Paneer Lababdar", image: menuVeg },
          { name: "Shahi Paneer", image: menuVeg },
          { name: "Paneer Butter Masala", image: menuVeg },
          { name: "Kadhai Paneer", image: menuVeg },
          { name: "Paneer Korma", image: menuVeg },
          { name: "Paneer Kofta", image: menuVeg },
          { name: "Matar Paneer", image: menuVeg },
          { name: "Palak Paneer", image: menuVeg },
          { name: "Chilli Paneer", image: menuVeg },
          { name: "Matar Mushroom", image: menuVeg },
          { name: "Masala Mushroom", image: menuVeg },
          { name: "Chilli Mushroom", image: menuVeg },
          { name: "Mushroom Tikka", image: menuVeg },
          { name: "Mushroom Do Pyaza", image: menuVeg },
        ],
      },
      {
        title: "Fish Main Course",
        selectionRule: "Any one item",
        items: [
          { name: "Fish Kalia", image: menuNonveg },
          { name: "Fish Tenga", image: menuNonveg },
          { name: "Mustard Fish", image: menuNonveg },
          { name: "Steam Fish with Mustard", image: menuNonveg },
          { name: "Fish Curry", image: menuNonveg },
          { name: "Fish Do Pyaza", image: menuNonveg },
          { name: "Chilli Garlic Fish", image: menuNonveg },
          { name: "Baked Fish", image: menuNonveg },
          { name: "Fish in Butter Garlic Sauce", image: menuNonveg },
          { name: "Fish Fry", image: menuNonveg },
        ],
      },
      {
        title: "Chicken Main Course",
        selectionRule: "Any two items",
        items: [
          { name: "Chicken Assamese Style", image: menuNonveg },
          { name: "Chicken Curry", image: menuNonveg },
          { name: "Kadai Chicken", image: menuNonveg },
          { name: "Butter Chicken Masala", image: menuNonveg },
          { name: "Afghani Chicken", image: menuNonveg },
          { name: "Chicken Kosha", image: menuNonveg },
          { name: "Chilli Chicken Gravy", image: menuNonveg },
          { name: "Garlic Chicken", image: menuNonveg },
          { name: "Chicken Fry", image: menuNonveg },
          { name: "Boiled Chicken Naga Style", image: menuNonveg },
        ],
      },
      {
        title: "Mutton Main Course",
        selectionRule: "Any one item",
        items: [
          { name: "Mutton Assamese Style", image: menuNonveg },
          { name: "Mutton Rogan", image: menuNonveg },
          { name: "Mutton Masala", image: menuNonveg },
          { name: "Mutton Kosha", image: menuNonveg },
          { name: "Mutton Aloo Curry", image: menuNonveg },
        ],
      },
      {
        title: "Duck",
        selectionRule: "On request · Extra ₹75/pax",
        items: [
          { name: "Duck (on request)", image: menuNonveg },
        ],
      },
    ],
  },
  {
    slug: "desserts",
    title: "Desserts",
    image: menuBirthday,
    description: "Sweet endings to make your celebration memorable.",
    items: [],
    subSections: [
      {
        title: "Desserts",
        selectionRule: "Any two items",
        items: [
          { name: "Moong Dal Halwa", image: menuBirthday },
          { name: "Gajar ka Halwa", image: menuBirthday },
          { name: "Hot Gulab Jamun", image: menuBirthday },
          { name: "Rabri Jalebi", image: menuBirthday },
          { name: "Rice Kheer", image: menuBirthday },
          { name: "Gur Rice Kheer", image: menuBirthday },
          { name: "Shahi Tukda", image: menuBirthday },
          { name: "Dahi Rasgulla", image: menuBirthday },
          { name: "Ice Cream (Flavour of Your Choice)", image: menuBirthday },
        ],
      },
    ],
  },
];
