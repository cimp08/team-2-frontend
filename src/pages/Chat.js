import Header from "../components/Header";
import Footer from "../components/Footer";
import SwipeHeader from "../components/SwipeHeader";
import "./Chat.css";
import ChatContainer from "../components/chat/ChatContainer";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Chat = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.userId;
  const token = cookies.token;

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/user`,
        // {
        //   params: { userId },
        // }
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`, // Cross-domain safari
          },
        }
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

          <div>
            <div className="w-full mt-20">
              {!user.dogName && (
                <p className="text-center mb-3">
                  You need to create a profile!
                </p>
              )}
              <SwipeHeader />
            </div>
            <ChatContainer user={user} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Chat;
