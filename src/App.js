import React, { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";
import Swipe from "./pages/Swipe";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authUser = cookies.userId;

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {authUser && <Route path="/swipe" element={<Swipe />} />}
      {authUser && <Route path="/profile" element={<Profile />} />}
      {authUser && <Route path="/chat" element={<Chat />} />}
    </Routes>
  );
}

export default App;
