import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const navbarStyleRules = [
  {
    match: (path) => path === "/",
    className: "bg-[#ACE7EF33] absolute top-0 left-0 w-full z-20",
    linkClassName: "text-black-100",
  },
  {
    match: (path) => path.startsWith("/product/"),
    className: "bg-white shadow-sm",
    linkClassName: "text-black-100",
  },
  {
    match: (path) => path === "/shop",
    className: "bg-white shadow-sm",
    linkClassName: "text-black-100",
  },
];

const defaultStyle = { className: "bg-white shadow-sm", linkClassName: "text-[#404042]" };

export default function Layout() {
  const { pathname } = useLocation();
  const style = navbarStyleRules.find((r) => r.match(pathname)) || defaultStyle;

  return (
    <>
      <Navbar className={style.className} linkClassName={style.linkClassName} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}