import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Header.css";
import EventBus from "./common/EventBus";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div className="flex-none">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentUser={currentUser}
        logOut={logOut}
      />
      {menuOpen && <MobileMenu>{MobileMenu}</MobileMenu>}
    </div>
  );
};

const Navbar = ({ menuOpen, setMenuOpen, currentUser, logOut }) => (
  <div className="flex items-center p-4 justify-between mb-5">
    <div className="flex items-center">
      <Link to="/">
        <p className="logo no-underline mr-10">DoggyMatch</p>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-10">
          {currentUser && (
            <li>
              <Link to="/profile">
                <button className="navbar_links">Profile</button>
              </Link>
            </li>
          )}
          <li>
            <Link to="/#">
              <button className="navbar_links">Link 1</button>
            </Link>
          </li>
          <li>
            <Link to="/#">
              <button className="navbar_links">Link 2</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="flex items-center">
      {currentUser ? (
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-9 rounded-full"
          onClick={logOut}
        >
          LogOut
        </button>
      ) : (
        <Link to="/login">
          <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-9 rounded-full">
            Login
          </button>
        </Link>
      )}

      <button
        type="button"
        aria-label="Toggle mobile menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded md:hidden focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50 text-white ml-5"
      >
        <MenuAlt4Svg menuOpen={menuOpen} />
      </button>
    </div>
  </div>
);

const MobileMenu = () => (
  <nav className="p-4 flex flex-col md:hidden mb-5">
    <ul className="space-y-3">
      <li>
        <Link to="/#">
          <button className="navbar_links">Products</button>
        </Link>
      </li>
      <li>
        <Link to="/#">
          <button className="navbar_links">Find Out</button>
        </Link>
      </li>
      <li>
        <Link to="/#">
          <button className="navbar_links">Security</button>
        </Link>
      </li>
      <li>
        <Link to="/#">
          <button className="navbar_links">Support</button>
        </Link>
      </li>
    </ul>
  </nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default Header;
