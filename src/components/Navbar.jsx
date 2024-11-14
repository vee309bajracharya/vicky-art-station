import { Link } from "react-router-dom";
import WebLogo from "../assets/logo/web_logo.png";
import { useState } from "react";

const Navbar = () => {
  //manage navbar toggle
  const [isOpen, setIsOpen] = useState(false);

  const navData = [
    {
      id: 1,
      navTitle: "Home",
      path: "/",
    },
    {
      id: 2,
      navTitle: "About",
      path: "/about",
    },
    {
      id: 3,
      navTitle: "Services",
      path: "/services",
    },
    {
      id: 4,
      navTitle: "Contact",
      path: "/contact",
    },
  ];

  // toggle navbar funct.
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
        <header>
          <nav className="dark:bg-darkColor shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src={WebLogo}
                  className="w-16 h-16"
                  alt="Vicky Art Station Logo"
                />
              </Link>


              {/* menu Button */}
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}
              >
                {/* Toggle between menu and close icon based on isOpen state */}
                {isOpen ? (
                  // Close Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // menu Icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>

              {/* Navbar Links */}
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } w-full md:block md:w-auto`}
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                  {navData.map((navItem) => (
                    <li key={navItem.id}>
                      <Link to={navItem.path} className="navLinks">
                        {navItem.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>
    </section>
  );
};

export default Navbar;


