import { ChevronRightIcon, ChevronLeftIcon } from "../icons/icons";
import Header from "../layout/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-white px-32 via-white to-electric-violet-300">
        <section className="flex items-center justify-between w-full h-full">
          <div>
            <h2 className="text-black font-bold text-[40px] leading-snug">
              Bring you <span className="text-electric-violet-600">Happiness</span>
              <br /> through a piece of cake
            </h2>
            <p className="font-medium text-gray-600 text-xl mt-5">
              We make different types of cakes, chocolate, <br /> soft cookies, cheesecake pie, or anything <br />you want.
            </p>

            <div className="flex space-x-3 mt-12">
              <button className="bg-electric-violet-800 text-white rounded-sm px-4 py-2 font-semibold">
                Order Now
              </button>
              <button className="border-electric-violet-800 border font-semibold text-electric-violet-800 rounded-sm px-4 py-2">
                See All Menus
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <img src="/images/cake.png" className="object-contain" />

            <div className="flex absolute bottom-10 right-0 items-center rounded-l-full bg-white p-4 shadow-md">
              <div className="flex items-center space-x-2 pr-4">
                <ChevronLeftIcon />
                <span className="text-lg font-normal">
                  01 <span className="text-xs font-semibold">/ 12</span>
                </span>
                <ChevronRightIcon />
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src="images/carrousel-main/cake-1.jpg"
                  className="h-32 w-56 rounded-lg object-cover"
                  alt="Cake 1"
                />
                <img
                  src="images/carrousel-main/cake-2.webp"
                  className="h-32 w-56 rounded-lg object-cover"
                  alt="Cake 2"
                />
                <img
                  src="images/carrousel-main/cake-3.webp"
                  className="h-32 w-56 rounded-lg object-cover"
                  alt="Cake 3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-60 flex items-center justify-between">
          <h2 className="font-bold text-electric-violet-800 text-3xl text-left">
            Try Our Best Selling
          </h2>
          <div className="h-24 w-0.5 bg-electric-violet-800 rounded-full" />
          <p className="font-medium text-base text-black/80">
            Here’s our best creations that everyone loves. Lightness and <br />
            sweetness of the cake make you want more and more. Start <br />
            from cake, bread and other creations.
          </p>
        </section>

        <section className="grid grid-cols-5 gap-4">
          <article>
            <img src="images/products/product-1.jpg" className="object-contain rounded-lg mb-3" />
            <h3 className="text-[17px] font-medium text-black/80">Red Velvet & Cream Cheese ( 500g )</h3>
          </article>

          <article>
            <img src="images/products/product-2.jpg" className="object-contain rounded-lg mb-3" />
            <h3 className="text-[17px] font-medium text-black/80">Red Velvet & Cream Cheese ( 500g )</h3>
          </article>

          <article>
            <img src="images/products/product-3.jpg" className="object-contain rounded-lg mb-3" />
            <h3 className="text-[17px] font-medium text-black/80">Red Velvet & Cream Cheese ( 500g )</h3>
          </article>
          
          <article>
            <img src="images/products/product-4.jpg" className="object-contain rounded-lg mb-3" />
            <h3 className="text-[17px] font-medium text-black/80">Red Velvet & Cream Cheese ( 500g )</h3>
          </article>
        </section>

      </main>
    </>

  )
}
