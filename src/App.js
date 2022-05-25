import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";
import Swipe from "./pages/Swipe";
import CreateProfile from "./pages/CreateProfile";
import Chat from "./pages/Chat";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {authToken && <Route path="/swipe" element={<Swipe />} />}
      {authToken && <Route path="/createprofile" element={<CreateProfile />} />}
      {authToken && <Route path="/chat" element={<Chat />} />}
    </Routes>
  );
}

export default App;
