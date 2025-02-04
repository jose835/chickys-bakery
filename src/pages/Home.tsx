import AdditionalInformation from "../components/additional-information";
import BestSelling from "../components/best-selling";
import Contact from "../components/contact";
import Footer from "../components/footer";
import MainHero from "../components/main-hero";
import ProductsSection from "../components/products-section";
import Testimonial from "../components/testimonial";
import Header from "../layout/header/Header";

export default function Home() {



  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-white via-[60%] via-white to-electric-violet-300/50">
        <MainHero />
        <BestSelling />
        <ProductsSection />
        <AdditionalInformation />
        <Contact />
        <Testimonial />
        <Footer />
      </main >
    </>

  )
}
