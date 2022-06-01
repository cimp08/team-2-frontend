import Header from "../components/Header";
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
        {
          params: { userId },
        }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center m-20">
        <SwipeHeader />
      </div>
      <ChatContainer user={user} />
    </>
  );
};

export default Chat;
