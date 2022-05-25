import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./App.css";
import Swipe from "./pages/Swipe";
import CreateProfile from "./pages/CreateProfile";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/swipe" element={<Swipe />} />
      <Route path="/createprofile" element={<CreateProfile />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
