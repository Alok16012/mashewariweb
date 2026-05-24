import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyTypes from "@/components/PropertyTypes";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PropertyTypes />
        <FeaturedProperties />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
