import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setVisible(scrollPosition > currentPosition);
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav
      className={`${
        visible ? "top-0" : "-top-20"
      } fixed w-full transition-all duration-300 ease-in-out bg-opacity-80 bg-orange-500 backdrop-filter backdrop-blur-lg py-3 flex justify-evenly z-50`}
    >
      <img
        className="fill-white transition duration-300 ease-in-out"
        src="https://suitmedia.com/_ipx/w_100&f_webp&q_100/assets/img/site-logo.png"
        alt=""
      />
      <ul className="flex gap-4 font-semibold items-center text-white">
        <li>
          <Link
            to="/work"
            className={`${
              location.pathname === "/work" ? "underline" : ""
            } hover:underline`}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${
              location.pathname === "/about" ? "underline" : ""
            } hover:underline`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            className={`${
              location.pathname === "/service" ? "underline" : ""
            } hover:underline`}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="/ideas"
            className={`${
              location.pathname === "/ideas" ? "underline" : ""
            } hover:underline`}
          >
            Ideas
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            className={`${
              location.pathname === "/careers" ? "underline" : ""
            } hover:underline`}
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact" ? "underline" : ""
            } hover:underline`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
