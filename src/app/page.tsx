"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { id: "hero-steak", url: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of grilled steak slices with asparagus and cherry tomatoes, perfect for a healthy meal." },
  { id: "about-cooking", url: "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of grilling meat with vibrant flames and smoky aura, showcasing outdoor cooking." },
  { id: "product-steaks", url: "https://images.pexels.com/photos/8352799/pexels-photo-8352799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of various fish fillets being grilled with spatulas on a hot griddle, highlighting food preparation" },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Steakhouse"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Steakhouse"
            description="Serving the finest steaks in town. Experience unforgettable flavors."
            imagePosition="right"
            imageSrc={assetMap.find(a => a.id === "hero-steak")?.url}
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Reserve Now", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Our Craft"
            description={[
              "At our steakhouse, we bring you the best cuts from around the world.",
              "Join us for an unparalleled dining experience."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            products={[
              { id: "1", name: "Ribeye Steak", price: "$30", imageSrc: assetMap.find(a => a.id === "product-steaks")?.url },
              { id: "2", name: "Filet Mignon", price: "$40", imageSrc: assetMap.find(a => a.id === "product-steaks")?.url },
              { id: "3", name: "T-Bone Steak", price: "$50", imageSrc: assetMap.find(a => a.id === "product-steaks")?.url }
            ]}
            title="Our Steaks"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Reservations"
            title="Book a Table"
            description="Reach out to us for reservations and enjoy memorable meals."
            inputPlaceholder="Your email address"
            buttonText="Reserve"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Menu", href: "menu" }] },
              { items: [{ label: "About", href: "about" }] },
              { items: [{ label: "Contact", href: "contact" }] }
            ]}
            logoText="Steakhouse"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
