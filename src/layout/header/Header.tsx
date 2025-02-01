import { useLocation } from "react-router-dom";
import { AdjustmentsIcon, MenuIcon, SearchIcon } from "../../icons/icons";
import LinkName from "./LinkName";
import { PagesProps } from "../../types/types";

export default function Header() {
  const { pathname } = useLocation();

  const pages: PagesProps[] = [
    {
      name: "Inicio",
      path: "/"
    },
    {
      name: "Categorias",
      path: "/categories"
    },
    {
      name: "Nosotros",
      path: "/about-us"
    },
    {
      name: "Contactanos",
      path: "/contact-us"
    }
  ]

  return (
    <nav className="bg-white px-16 border border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-1">
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img
            src="/images/logo.png"
            className="md:h-24 h-16"
            alt="Flowbite Logo"
          />
          <span className="self-center text-electric-violet-400 text-xl font-semibold whitespace-nowrap">
            Chikys <span className="text-black"> & Bakery</span>
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon />
        </button>

        <div
          className="hidden w-full md:block md:w-auto"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {pages.map((page, index) => (
              <LinkName name={page.name} path={page.path} key={index} active={pathname === page.path} />
            ))}
          </ul>
        </div>

        <form className="items-center hidden md:flex">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <AdjustmentsIcon />
            </div>

            <input
              type="text"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-electric-violet-500 focus:border-electric-violet-500 block w-full ps-10 p-2"
              placeholder="Buscar..."
            />

          </div>
          <button type="submit" className="px-2.5 py-2 ms-2 text-sm font-medium text-white bg-electric-violet-500 rounded-lg border border-electric-violet-600">
            <SearchIcon />
          </button>
        </form>

      </div>
    </nav>
  )
}
