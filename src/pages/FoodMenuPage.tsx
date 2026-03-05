import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Footer from "@/components/sections/Footer";
import menuChinese from "@/assets/menu-chinese.jpg";
import menuVeg from "@/assets/menu-veg-new.jpg";
import menuNonveg from "@/assets/menu-nonveg-new.jpg";
import menuBirthday from "@/assets/menu-birthday.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";

const categories = [
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

const FoodMenuPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container text-center">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Explore Our Menu
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Food Menu
          </h1>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((cat, index) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
        >
          <div className="container">
            <div
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 !== 0 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className={`rounded-3xl overflow-hidden shadow-lg ${index % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                <AspectRatio ratio={4 / 5}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>

              {/* Content */}
              <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  {cat.title}
                </h2>
                <p className="font-body text-muted-foreground mb-8 text-lg">
                  {cat.description}
                </p>
                <ul className="space-y-3 font-body text-foreground">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default FoodMenuPage;
