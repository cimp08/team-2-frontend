import Header from "../components/Header";
import Footer from "../components/Footer";
import SwipeHeader from "../components/SwipeHeader";
import "./Chat.css";
import ChatContainer from "../components/chat/ChatContainer";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Chat = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.userId;

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/user`,
        // {
        //   params: { userId },
        // }
        { withCredentials: true }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <>
      {user && (
        <>
          <Header />
          <div className="chat flex justify-around m-20">
            <div>
              <SwipeHeader />
              <ChatContainer user={user} />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Chat;
