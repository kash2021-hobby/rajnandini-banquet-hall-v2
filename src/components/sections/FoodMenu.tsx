import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import menuChinese from "@/assets/menu-chinese.jpg";
import menuVeg from "@/assets/menu-veg-new.jpg";
import menuNonveg from "@/assets/menu-nonveg-new.jpg";
import menuBirthday from "@/assets/menu-birthday.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";

const menus = [
  { title: "Chinese Foods", image: menuChinese, slug: "chinese-foods" },
  { title: "Veg Foods", image: menuVeg, slug: "veg-foods" },
  { title: "Non-Veg Foods", image: menuNonveg, slug: "non-veg-foods" },
  { title: "Birthday Foods", image: menuBirthday, slug: "birthday-foods" },
  { title: "Drinks", image: menuDrinks, slug: "drinks" },
];

const MenuCard = ({ menu }: { menu: (typeof menus)[0] }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 group">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={menu.image}
          alt={menu.title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col items-center text-center gap-4">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
          {menu.title}
        </h3>
        <button
          onClick={() => navigate(`/food-menu/${menu.slug}`)}
          className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors w-full max-w-[200px]"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const FoodMenu = () => {
  const isMobile = useIsMobile();

  return (
    <section id="food-menu" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Our Menu
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Curated Culinary Experiences
          </h2>
        </div>

        {isMobile ? (
          <div className="flex flex-col gap-5">
            {menus.map((menu, i) => (
              <MenuCard key={i} menu={menu} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {menus.map((menu, i) => (
              <MenuCard key={i} menu={menu} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodMenu;
