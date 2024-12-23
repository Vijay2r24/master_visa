import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { NavLinks } from "../constants";
import Logo from "../assets/logo.png";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Button from "../components/Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null); // Track open menu
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu
  const navbarRef = useRef(null); // Reference for the navbar
  const location = useLocation(); // Get current location

  const toggleMenu = (key) => {
    setOpenMenu((prev) => (prev === key ? null : key)); // Toggle open menu
    setOpenSubMenu(null); // Close submenus when toggling main menu
  };

  const toggleSubMenu = (title) => {
    setOpenSubMenu((prev) => (prev === title ? null : title)); // Toggle open submenu
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenMenu(null);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="px-32 py-6 flex justify-between items-center"
    >
      <a href="/" className="logo">
        <img src={Logo} width={180} height={60} alt="logo" />
      </a>
      <ul className="flex gap-6">
        {Object.entries(NavLinks).map(([key, { title, href, subLinks }]) => {
          const isActive = location.pathname === href; // Check if the current path matches the link href

          return (
            <li key={key} className="relative">
              {/* Main Menu Toggle */}
              <a
                href={href || "#"}
                onClick={() => toggleMenu(key)}
                className={`flex font-medium items-center gap-2 text-base ${
                  isActive
                    ? "text-primary_color "
                    : "text-subtext_color hover:text-primary_color "
                } transition-all duration-500 ease-in-out`} // Apply smooth transition on hover and active
              >
                {title}
                {subLinks && (
                  <span>
                    {openMenu === key ? (
                      <FaChevronDown className="ml-2 text-gray-400" />
                    ) : (
                      <FaChevronRight className="ml-2 text-gray-400" />
                    )}
                  </span>
                )}
              </a>

              {/* Dropdown */}
              {subLinks && openMenu === key && (
                <ul className="absolute left-0 top-6 bg-white text-black mt-2 p-4 rounded-lg shadow-lg w-auto min-w-max">
                  {subLinks.map(({ title, href, subLinks }) => (
                    <li key={title} className="relative">
                      {/* Submenu Toggle */}
                      <a
                        href={href || "#"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubMenu(title);
                        }}
                        className="py-2 px-4 flex items-center hover:bg-bg_color rounded-md w-full"
                      >
                        {title}
                        {subLinks && (
                          <span>
                            {openSubMenu === title ? (
                              <FaChevronDown className="ml-2" />
                            ) : (
                              <FaChevronRight className="ml-2" />
                            )}
                          </span>
                        )}
                      </a>

                      {/* Submenu */}
                      {subLinks && openSubMenu === title && (
                        <ul className="absolute left-40 bg-white text-black mt-2 p-4 rounded-lg shadow-lg w-auto min-w-max">
                          {subLinks.map(({ title, href }) => (
                            <li key={title}>
                              <a
                                href={href || "#"}
                                className="block py-2 px-4 hover:bg-gray-200 rounded"
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent blocking navigation
                                  setOpenMenu(null); // Close menu on click
                                  setOpenSubMenu(null); // Close submenu on click
                                }}
                              >
                                {title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Button onClick={() => {}} className="btn_outline">
        helo
        <div>
          <FaChevronRight className="w-3 h-3 bg-primary_color text-white p-4 rounded-full" />
        </div>
      </Button>
    </nav>
  );
};

export default Navbar;
