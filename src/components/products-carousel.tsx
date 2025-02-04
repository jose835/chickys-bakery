import { ChevronLeftIcon, ChevronRightIcon } from "../icons/icons";

export default function ProductsCarousel() {
    return (
        <section className="flex justify-end">
            <div className="flex items-center rounded-l-full bg-white p-4 shadow-md">
                <div className="flex items-center space-x-2 pr-4">
                    <ChevronLeftIcon />
                    <span className="text-lg font-normal">
                        01 <span className="text-xs font-semibold">/ 12</span>
                    </span>
                    <ChevronRightIcon />
                </div>

                <div
                    className="flex space-x-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth w-56 md:w-auto"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <img
                        src="images/carrousel-main/cake-1.jpg"
                        className="h-32 w-56 rounded-lg object-cover snap-center"
                        alt="Cake 1"
                    />
                    <img
                        src="images/carrousel-main/cake-2.webp"
                        className="h-32 w-56 rounded-lg object-cover snap-center"
                        alt="Cake 2"
                    />
                    <img
                        src="images/carrousel-main/cake-3.webp"
                        className="h-32 w-56 rounded-lg object-cover snap-center"
                        alt="Cake 3"
                    />
                </div>
            </div>
        </section>

    )
}
