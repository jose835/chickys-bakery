import { FacebookIcon, InstagramIcon } from "../icons/icons";
import { handleWhatsAppRedirect } from "../lib/functions";

export default function Footer() {
    return (
        <footer className="max-w-[2800px] bg-electric-violet-400/50 mx-auto py-10">
            <div className="flex md:flex-row flex-col max-w-[1400px] mx-auto items-center justify-between">
                <a href="/" className="flex md:flex-row flex-col items-center space-x-2">
                    <img src="/images/logo.png" className="md:h-24 h-16" alt="Logo" />
                    <span className="text-black text-xl font-semibold">
                        Chikys <span className="text-electric-violet-800">Cuisiny</span> & Bakery
                    </span>
                </a>

                <div className="md:mt-0 mt-5">
                    <nav>
                        <ul className="flex md:flex-row flex-col md:space-x-10 space-y-2 md:space-y-0 items-center">
                            <li><a className="text-lg text-[#272727] font-semibold" href="#">Inicio</a></li>
                            <li><a className="text-lg text-[#272727] font-semibold" href="#">Categorias</a></li>
                            <li><a className="text-lg text-[#272727] font-semibold" href="#">Nosotros</a></li>
                            <li><a className="text-lg text-[#272727] font-semibold" href="#">Contactanos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="w-full h-[0.1px] mt-10 bg-black/20" />

            <div className="max-w-[1400px] mx-auto mt-5 flex md:flex-row flex-col-reverse items-center justify-between">
                <span className="font-semibold md:text-left text-center text-[#272727] text-[15px]">
                    © {new Date().getFullYear()} Chickys Cuisiny & Bakery. All rights reserved.
                </span>

                <div className="flex md:flex-row items-center space-x-16 md:mt-0 mb-5">
                    <a href="#" className="order-1 md:order-none"><FacebookIcon /></a>

                    <button onCanPlay={handleWhatsAppRedirect} className="bg-electric-violet-900 hover:bg-electric-violet-800 text-white rounded-md px-4 py-2 font-medium order-2 md:order-none">
                        Contactanos
                    </button>

                    <a href="#" className="order-3 md:order-none"><InstagramIcon /></a>
                </div>
            </div>

        </footer>
    )
}
