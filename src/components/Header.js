import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authUser = cookies.userId;

  let navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/logout`,
        { withCredentials: true }
      );
      console.log(response);
      removeCookie("userId", cookies.userId);
      removeCookie("token", cookies.token);

      const success = response.status === 200;
      if (success) navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-none">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        authUser={authUser}
        logout={logout}
      />
      {menuOpen && <MobileMenu authUser={authUser}>{MobileMenu}</MobileMenu>}
    </div>
  );
};

const Navbar = ({ menuOpen, setMenuOpen, authUser, logout }) => (
  <div className="flex items-center p-4 justify-between">
    <div className="flex items-center">
      <Link to="/">
        <p className="logo no-underline mr-10">DoggyMatch</p>
      </Link>
      {authUser && (
        <nav className="hidden md:block ">
          <ul className="flex space-x-10 ">
            <li>
              <Link to="/profile">
                <button className="navbar_links">Profile</button>
              </Link>
            </li>
            <li>
              <Link to="/swipe">
                <button className="navbar_links">Swipe</button>
              </Link>
            </li>
            <li>
              <Link to="/chat">
                <button className="navbar_links">Chat</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
    <div className="flex items-center">
      {!authUser ? (
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

const MobileMenu = ({ authUser }) => (
  <nav className="p-4 flex flex-col md:hidden mb-5">
    {authUser && (
      <ul className="space-y-3">
        <li>
          <Link to="/profile">
            <button className="navbar_links">Profile</button>
          </Link>
        </li>
        <li>
          <Link to="/swipe">
            <button className="navbar_links">Swipe</button>
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <button className="navbar_links">Chat</button>
          </Link>
        </li>
      </ul>
    )}
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
