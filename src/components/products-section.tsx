import { ChevronRightIcon } from "../icons/icons";
import Product from "./products";

export default function ProductsSection() {
    const products = [
        {
            name: "Red Velvet & Cream Cheese (500g)",
            price: 75.32,
            punctuation: 4.2,
            imageUrl: "images/products/product-1.jpg",
        },
        {
            name: "Red Velvet & Cream Cheese (500g)",
            price: 120.99,
            punctuation: 4.7,
            imageUrl: "images/products/product-2.jpg",
        },
        {
            name: "Red Velvet & Cream Cheese (500g)",
            price: 89.45,
            punctuation: 4.5,
            imageUrl: "images/products/product-3.jpg",
        },
        {
            name: "Red Velvet & Cream Cheese (500g)",
            price: 135.60,
            punctuation: 4.8,
            imageUrl: "images/products/product-4.jpg",
        },
    ];

    return (
        <section className="mt-32 px-4 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                {products.map(({ name, price, punctuation, imageUrl }, index) => (
                    <Product key={index} name={name} imageUrl={imageUrl} price={price} punctuation={punctuation} />
                ))}
            </div>

            <button className="flex group md:w-auto hover:bg-electric-violet-800 transition-colors ease-in-out hover:border-gray-300 hover:text-white w-full md:justify-start justify-center items-center mt-10 mx-auto bg-transparent text-electric-violet-800 font-semibold text-base px-4 py-2 border border-electric-violet-800">
                Ver más
                <ChevronRightIcon className="text-electric-violet-800 ml-2 group-hover:text-white" />
            </button >
        </section>
    )
}
