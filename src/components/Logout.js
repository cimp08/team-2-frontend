import { useEffect } from "react";
import { logout } from "../services/authServices";

const Logout = () => {
  useEffect(() => {
    logout();
    window.location = "/";
  }, []);
  return null;
};

export default Logout;
