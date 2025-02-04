import { ComaEndIcon, ComaStartIcon } from "../icons/icons";
import { handleWhatsAppRedirect } from "../lib/functions";

export default function Testimonial() {
    return (
        <section className="bg-background-pattern md:pb-16 md:pt-32 py-10 md:px-0 px-4 w-full flex flex-col items-center justify-center max-w-[2800px] mx-auto">
            <div className="relative text-center w-fit mx-auto">
                <ComaStartIcon className="absolute hidden md:block top-[-60px] left-[-60px] text-gray-400 opacity-90" />
                <h3 className="relative z-10 text-[#272727] font-semibold md:text-3xl text-2xl ">
                    The eggless cakes here are really good. <br className="hidden md:block" />
                    Had ordered a kit kat cake which was <br className="hidden md:block" />
                    really good. Surely worth a try.
                </h3>
                <ComaEndIcon className="absolute hidden md:block bottom-[-60px] right-[-60px] text-gray-400 opacity-90" />
            </div>


            <img className="size-20 rounded-full mt-5" src="./images/user.png" alt="user" />
            <h4 className="text-electric-violet-800 font-semibold text-xl mt-5">Claudia Barillas</h4>
            <span className="font-semibold text-base mt-3 text-[#272727] text-center">CEO & Founder at Chicky's Cuisiny & Bakery</span>

            <button onClick={handleWhatsAppRedirect} className="bg-electric-violet-900 hover:bg-electric-violet-800 text-white rounded-md px-4 py-2 mt-10 font-medium">
                Ponerse en contacto
            </button>
        </section>
    )
}
