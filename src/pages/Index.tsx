import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurApproach from "@/components/OurApproach";
import Marquee from "@/components/Marquee";
import StoryInNumbers from "@/components/StoryInNumbers";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import JourneyEndsHere from "@/components/JourneyEndsHere";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
<<<<<<< HEAD
      <Marquee />
      <StoryInNumbers />
      <About />
      <OurApproach />
      <Services />
=======
      <About />
      <OurApproach />
      <Services />
      <Marquee />
      <StoryInNumbers />
>>>>>>> 87f75fca9afb605d6bc16848b8da0dac107fb7ff
      
      <FeaturedWork />
      <Testimonials />
      <JourneyEndsHere />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
