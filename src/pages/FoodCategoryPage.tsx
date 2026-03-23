import { useParams, Navigate } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { foodCategories, FoodItem } from "@/data/foodCategories";
import { useFoodSelection } from "@/contexts/FoodSelectionContext";
import { SelectedMenuPanel } from "@/components/SelectedMenuPanel";
import { toast } from "sonner";

const FoodCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = foodCategories.find((c) => c.slug === slug);
  const { addItem, isItemSelected } = useFoodSelection();

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const handleAddItem = (item: FoodItem, sectionTitle?: string) => {
    if (isItemSelected(item.name)) {
      toast.info("Item already in your menu");
      return;
    }
    addItem(item, sectionTitle || category.title);
    toast.success("Item added to your menu");
  };

  const hasSubSections = category.subSections && category.subSections.length > 0;

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
          <p className="font-body text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Food Items */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          {hasSubSections ? (
            <div className="space-y-16">
              {category.subSections!.map((section, sIdx) => (
                <div key={sIdx}>
                  {/* Sub-section Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <span className="inline-flex items-center bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                      {section.selectionRule}
                    </span>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {section.items.map((item, i) => {
                      const isSelected = isItemSelected(item.name);
                      return (
                        <div
                          key={i}
                          className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                            isSelected ? "ring-2 ring-primary" : ""
                          }`}
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <button
                              onClick={() => handleAddItem(item, section.title)}
                              className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-200 ${
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-white/90 hover:bg-white text-foreground hover:scale-110"
                              }`}
                              aria-label={isSelected ? "Item added" : "Add to list"}
                            >
                              {isSelected ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                          <div className="p-3">
                            <h3 className="font-heading text-sm md:text-base font-semibold text-foreground text-center group-hover:text-primary transition-colors leading-tight">
                              {item.name}
                            </h3>
                            {isSelected && (
                              <p className="text-xs text-primary text-center mt-1 font-medium">
                                Added to menu
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback: flat items grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {category.items.map((item, i) => {
                const isSelected = isItemSelected(item.name);
                return (
                  <div
                    key={i}
                    className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      isSelected ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <button
                        onClick={() => handleAddItem(item)}
                        className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-200 ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/90 hover:bg-white text-foreground hover:scale-110"
                        }`}
                        aria-label={isSelected ? "Item added" : "Add to list"}
                      >
                        {isSelected ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="font-heading text-sm md:text-base font-semibold text-foreground text-center group-hover:text-primary transition-colors leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Note Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-muted/50 rounded-2xl px-8 py-6 max-w-2xl">
              <p className="font-body text-muted-foreground text-sm">
                ✨ All items are freshly prepared by our expert chefs using premium ingredients.
                Menu items and availability may vary based on the event package selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SelectedMenuPanel />
      <Footer />
    </div>
  );
};

export default FoodCategoryPage;
