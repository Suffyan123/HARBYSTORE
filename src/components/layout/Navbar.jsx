import "./styles/navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { FiHeart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import CompanyLogo from "@/assets/company-logo/compnayLogo.png";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useCartStore } from "@/store/useCartStore";

const navLinks = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Shop", to: "/shop" },
  { id: 3, title: "Blog", to: "/blog" },
  { id: 4, title: "Contact", to: "/contact" },
];

const iconClass =
  "w-6 h-6 hover:text-black transition-colors duration-200 cursor-pointer text-2xl";

export default function Navbar({ className, linkClassName }) {
  const [open, setOpen] = useState(false);
  const favoritesCount = useFavoritesStore((state) => state.favoriteIds.length);
  const cartCount = useCartStore((state) => state.itemCount());

  return (
    <>
      <nav
        className={clsx(
          "navbar flex items-center justify-between px-10 py-4",
          className
        )}
      >
        <img src={CompanyLogo} alt="Company logo" className="company-logo" />
        <ul className="nav-links hidden lg:flex">
          {navLinks.map((item) => (
            <li key={item.id} className="group relative text-[18px]">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  clsx(
                    "transition-colors duration-200",
                    isActive ? "text-(--secondary)  " : linkClassName
                  )
                }
              >
                {item.title}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-icons flex items-center justify-center gap-4">
          <Link
            to="/login"
            className={clsx("hidden md:block text-[#404042]", iconClass)}
            aria-label="Account"
          >
            <MdOutlineSupervisorAccount />
          </Link>

          <button
            type="button"
            className={clsx("hidden md:block text-[#404042]", iconClass)}
            aria-label="Search"
          >
            <IoMdSearch />
          </button>

          <Link
            to="/favorites"
            className={clsx("hidden md:block relative text-[#404042]", iconClass)}
            aria-label="View favorites"
          >
            <FiHeart />
            {favoritesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className={clsx("hidden md:block relative text-[#404042]", iconClass)}
            aria-label="View cart"
          >
            <GrCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className={clsx("lg:hidden cursor-pointer text-[#404042]", iconClass)}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-64 h-full p-6">
            <button className="text-xl mb-6" onClick={() => setOpen(false)} aria-label="Close menu">
              <RxCross1 />
            </button>
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <li className="sm:hidden">
                <Link to="/login" onClick={() => setOpen(false)}>
                  Account
                </Link>
              </li>
              <li className="sm:hidden">
                <Link to="/favorites" onClick={() => setOpen(false)}>
                  Favorite{favoritesCount > 0 ? ` (${favoritesCount})` : ""}
                </Link>
              </li>
              <li className="sm:hidden">
                <Link to="/cart" onClick={() => setOpen(false)}>
                  Cart{cartCount > 0 ? ` (${cartCount})` : ""}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}