import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import OurClients from "@/components/OurClients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <OurClients />
      <About />
      <Services />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
