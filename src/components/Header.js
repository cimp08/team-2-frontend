import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/authServices";

const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div>
      {!user && (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      )}
      {user && (
        <div>
          <h4>{user.name}</h4>
          <Link to="/logout">
            <button>Logout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
