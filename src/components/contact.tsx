import { handleWhatsAppRedirect } from "../lib/functions";

export default function Contact() {
    
    return (
        <section className="flex md:px-0 px-2 flex-col items-center justify-center max-w-[2800px] mx-auto md:mt-40 mt-16 bg-electric-violet-400/50 h-72 w-full">
            <h3 className="font-semibold text-electric-violet-900 text-3xl">Para cualquier pedido</h3>
            <p className="mt-5 text-center text-lg font-medium text-black">Por favor ponerse en contacto con nosotros al +1 (555) 555-5555 para cualquier <br /> pedido o cualquier consulta.</p>

            <button onClick={handleWhatsAppRedirect} className="bg-electric-violet-900 hover:bg-electric-violet-800 text-white rounded-md px-4 py-2 mt-10 font-medium">
                Contactanos
            </button>
        </section>
    )
}
