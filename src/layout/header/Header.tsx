import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AdjustmentsIcon, MenuIcon, SearchIcon, CloseIcon } from "../../icons/icons";
import LinkName from "./LinkName";
import { PagesProps } from "../../types/types";

export default function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const pages: PagesProps[] = [
    { name: "Inicio", path: "/" },
    { name: "Categorias", path: "/categories" },
    { name: "Nosotros", path: "/about-us" },
    { name: "Contactanos", path: "/contact-us" }
  ];

  return (
    <nav className="bg-white lg:px-16 px-4 border border-gray-200">
      <div className="flex items-center justify-between mx-auto py-2">
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" className="md:h-24 h-16" alt="Logo" />
          <span className="text-electric-violet-600 text-xl font-semibold">
            Chikys <span className="text-black">& Bakery</span>
          </span>
        </a>

        <button
          type="button"
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 border md:border-0 shadow-md md:shadow-none z-10`}>
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 w-full">
            {pages.map((page, index) => (
              <LinkName name={page.name} path={page.path} key={index} active={pathname === page.path} />
            ))}
          </ul>
        </div>

        <form className="hidden md:flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 items-center ps-3 pointer-events-none hidden lg:flex">
              <AdjustmentsIcon />
            </div>

            <input
              type="text"
              className="hidden lg:block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-electric-violet-500 focus:border-electric-violet-500 ps-10 p-2"
              placeholder="Buscar..."
            />
          </div>

          <button type="submit" className="p-2 text-white bg-electric-violet-500 rounded-lg border border-electric-violet-600 ms-2">
            <SearchIcon />
          </button>
        </form>

      </div>
    </nav>
  );
}
