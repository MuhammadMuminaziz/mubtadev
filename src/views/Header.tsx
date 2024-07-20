import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Header() {
  const [scroll, setScrool] = useState(false);
  const scrooling = () => {
    window.scrollY > 0 ? setScrool(true) : setScrool(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrooling);
    return () => {
      window.removeEventListener("scroll", scrooling);
    };
  }, []);

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition duration-300 ${
        scroll ? "navbar-fixed" : ""
      }`}
      data-aos="fade-down"
    >
      <div className="container mx-auto py-5">
        <div className="flex items-center justify-between relative">
          <div className="px-4 lg:ml-5 gap-2 flex items-center">
            <img
              src="/img/logo/mubtadev-white.png"
              alt="logo-mubtadev"
              className="h-10"
            />
            <a href="" className="font-semibold text-xl text-white xl:text-2xl">
              Mubtadev
            </a>
          </div>

          <Navbar />
        </div>
      </div>
    </header>
  );
}
