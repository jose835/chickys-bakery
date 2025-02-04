import { handleWhatsAppRedirect } from "../lib/functions";
import ProductsCarousel from "./products-carousel";

export default function MainHero() {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center max-w-[1400px] mx-auto justify-between w-full h-full pt-5 px-4">
        <div className="text-center md:text-left">
          <h2 className="text-black font-bold text-[32px] md:text-[40px] leading-snug">
            Bring you <span className="text-electric-violet-600">Happiness</span>
            <br /> through a piece of cake
          </h2>
          <p className="font-medium text-gray-600 text-lg md:text-xl mt-5">
            We make different types of cakes, chocolate, <br className="hidden md:block" />
            soft cookies, cheesecake pie, or anything <br className="hidden md:block" /> you want.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-3 mt-8 space-y-3 sm:space-y-0">
            <button onClick={handleWhatsAppRedirect} className="bg-electric-violet-800 hover:bg-electric-violet-700 text-white rounded-sm px-4 py-2 font-semibold">
              Order Now
            </button>
            <button className="border-electric-violet-800 hover:bg-electric-violet-800 transition-colors ease-linear hover:border-gray-300 hover:text-white border font-semibold text-electric-violet-800 rounded-sm px-4 py-2">
              See All Menus
            </button>
          </div>
        </div>

        <img
          src="/images/cake.png"
          className="object-contain w-[350px] md:w-auto mb-6 md:mb-0"
        />
      </section>

      <ProductsCarousel />
    </>
  )
}
