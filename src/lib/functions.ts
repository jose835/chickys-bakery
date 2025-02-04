export const handleWhatsAppRedirect = () => {
    const phoneNumber = "+12109662843";
    const message = encodeURIComponent("Hola, estoy interesado en ordenar un pastel.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};