export default function AdditionalInformation() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:mt-52 mt-20 flex md:flex-row flex-col items-center justify-between">
      <div>
        <h3 className="md:text-4xl text-3xl text-center md:text-left font-semibold text-electric-violet-800 leading-snug">We Bake for you <br />
          Fresh From the oven
        </h3>

        <p className="md:text-xl text-lg md:text-left text-center text-gray-600 mt-4 leading-relaxed font-medium text-balance">
          We use quality materials that we get directly from farmers.
          our backers are exeperienced people in the food sector. So
          that the products we produce are guaranteed quality and
          taste. It’s so delicious, you have to try it!
        </p>
      </div>

      <img
        className="md:mt-0 mt-5"
        src="/images/bakery.png"
      />
    </section>
  )
}
