import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, isOpen] = useState(false);

  const toggleMenu = () => {
    isOpen(!open);
  };

  return (
    <div className="flex items-center px-4 lg:mr-5">
      <button
        name="humberger"
        type="button"
        className={`block absolute right-4 lg:hidden ${
          open ? "hamburger-active" : ""
        }`}
        onClick={toggleMenu}
      >
        <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
        <span className="hamburger-line transition duration-300 ease-in-out"></span>
        <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
      </button>

      <nav
        className={`absolute lg:p-0 p-3 bg-black bg-opacity-60 rounded-xl max-w-[250px] w-full right-4 top-16 lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none ${
          !open ? "hidden" : ""
        }`}
      >
        <ul className="block lg:flex">
          <Navlink link="about" label="About" />
          <Navlink link="skills" label="Skills" />
          <Navlink link="projects" label="Projects" />
          <Navlink link="client" label="Clients" />
          <Navlink link="contact" label="Contact" />
        </ul>
      </nav>
    </div>
  );
}

const Navlink = ({
  link,
  label,
  className,
}: {
  link: string;
  label: string;
  className?: string;
}) => {
  return (
    <li className="group">
      {/* <a
        href={link}
        className={`text-base font-semibold text-slate-300 shadow-slate-200 py-2 mx-3 xl:mx-4 flex group-hover:text-cyan-400 ${className}`}
      >
        {label}
      </a> */}
      <Link
        to={link}
        smooth={true}
        offset={-300}
        className={`text-base font-semibold text-slate-300 shadow-slate-200 py-2 mx-3 xl:mx-4 flex group-hover:text-cyan-400 cursor-pointer ${className}`}
      >
        {label}
      </Link>
    </li>
  );
};
