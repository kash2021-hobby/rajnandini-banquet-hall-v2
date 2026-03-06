import { useParams, Navigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Footer from "@/components/sections/Footer";
import { foodCategories } from "@/data/foodCategories";

const FoodCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = foodCategories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container text-center">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Our Menu
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            {category.title}
          </h1>
        </div>
      </section>

      {/* Category Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <AspectRatio ratio={4 / 5}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {category.title}
              </h2>
              <p className="font-body text-muted-foreground mb-8 text-lg">
                {category.description}
              </p>
              <ul className="space-y-3 font-body text-foreground">
                {category.items.map((item, i) => (
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

      <Footer />
    </div>
  );
};

export default FoodCategoryPage;
