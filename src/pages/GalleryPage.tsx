import { useState } from "react";
import Footer from "@/components/sections/Footer";
import ImageLightbox from "@/components/ImageLightbox";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";
import gallery11 from "@/assets/gallery-11.webp";
import gallery12 from "@/assets/gallery-12.webp";
import gallery13 from "@/assets/gallery-13.webp";
import gallery14 from "@/assets/gallery-14.webp";
import gallery15 from "@/assets/gallery-15.webp";
import gallery16 from "@/assets/gallery-16.webp";
import gallery17 from "@/assets/gallery-17.webp";
import gallery18 from "@/assets/gallery-18.webp";
import gallery19 from "@/assets/gallery-19.webp";
import gallery20 from "@/assets/gallery-20.webp";
import gallery21 from "@/assets/gallery-21.webp";
import gallery22 from "@/assets/gallery-22.webp";
import gallery23 from "@/assets/gallery-23.webp";
import gallery24 from "@/assets/gallery-24.webp";
import gallery26 from "@/assets/gallery-26.webp";
import gallery27 from "@/assets/gallery-27.webp";
import gallery28 from "@/assets/gallery-28.webp";
import gallery29 from "@/assets/gallery-29.webp";
import gallery30 from "@/assets/gallery-30.webp";
import gallery31 from "@/assets/gallery-31.webp";
import gallery32 from "@/assets/gallery-32.webp";
import gallery33 from "@/assets/gallery-33.webp";
import gallery34 from "@/assets/gallery-34.webp";
import gallery35 from "@/assets/gallery-35.webp";
import gallery36 from "@/assets/gallery-36.webp";

const images = [
  { src: gallery1, alt: "Grand wedding reception" },
  { src: gallery2, alt: "Premium catering" },
  { src: gallery3, alt: "Corporate event setup" },
  { src: gallery4, alt: "Birthday celebration" },
  { src: gallery5, alt: "Entrance lobby" },
  { src: gallery6, alt: "Outdoor garden" },
  { src: gallery7, alt: "Indoor dining" },
  { src: gallery8, alt: "Event space" },
  { src: gallery9, alt: "Evening event" },
  { src: gallery10, alt: "Elegant table setting" },
  { src: gallery11, alt: "Live music performance" },
  { src: gallery12, alt: "Dance floor" },
  { src: gallery13, alt: "Cocktail hour" },
  { src: gallery14, alt: "Bridal suite" },
  { src: gallery15, alt: "Groom's lounge" },
  { src: gallery16, alt: "Outdoor ceremony" },
  { src: gallery17, alt: "Indoor ceremony" },
  { src: gallery18, alt: "Reception hall" },
  { src: gallery19, alt: "Event lighting" },
  { src: gallery20, alt: "Catering setup" },
  { src: gallery21, alt: "Venue exterior" },
  { src: gallery22, alt: "Venue interior" },
  { src: gallery23, alt: "Event decor" },
  { src: gallery24, alt: "Special event" },
  { src: gallery26, alt: "Charity gala" },
  { src: gallery27, alt: "Award ceremony" },
  { src: gallery28, alt: "Holiday party" },
  { src: gallery29, alt: "Anniversary celebration" },
  { src: gallery30, alt: "Community event" },
  { src: gallery31, alt: "Fundraiser event" },
  { src: gallery32, alt: "Product launch" },
  { src: gallery33, alt: "Fashion show" },
  { src: gallery34, alt: "Art exhibition" },
  { src: gallery35, alt: "Cultural festival" },
  { src: gallery36, alt: "Private party" },


];


const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      
      <section className="pt-32 pb-20 lg:pb-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
              Our Gallery
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Explore Our Venue & Events
            </h1>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer"
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <ImageLightbox
            images={images}
            selectedIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onNext={() => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))}
            onPrev={() => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GalleryPage;
