import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  let navigate = useNavigate();

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex-none">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        authToken={authToken}
        logout={logout}
      />
      {menuOpen && <MobileMenu>{MobileMenu}</MobileMenu>}
    </div>
  );
};

const Navbar = ({ menuOpen, setMenuOpen, authToken, logout }) => (
  <div className="flex items-center p-4 justify-between mb-5">
    <div className="flex items-center">
      <Link to="/">
        <p className="logo no-underline mr-10">DoggyMatch</p>
      </Link>
      {authToken && (
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link to="/createprofile">
                <button className="navbar_links">Create Profile</button>
              </Link>
            </li>
            <li>
              <Link to="/swipe">
                <button className="navbar_links">Swipe</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
    <div className="flex items-center">
      {!authToken ? (
        <Link to="/login">
          <button className="log-button">Login</button>
        </Link>
      ) : (
        <button className="log-button" onClick={logout}>
          Logout
        </button>
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
