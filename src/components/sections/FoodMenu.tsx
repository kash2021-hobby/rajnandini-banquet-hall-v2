import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
    <div className="bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="overflow-hidden">
        <AspectRatio ratio={4 / 5}>
          <img
            src={menu.image}
            alt={menu.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      <div className="p-6 flex flex-col items-center text-center flex-1 justify-center">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-5">
          {menu.title}
        </h3>
        <button
          onClick={() => navigate(`/food-menu#${menu.slug}`)}
          className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
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
          <Carousel opts={{ align: "start", loop: true, dragFree: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {menus.map((menu, i) => (
                <CarouselItem key={i} className="pl-4 basis-[75%]">
                  <MenuCard menu={menu} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
