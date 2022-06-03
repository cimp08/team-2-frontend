import ChatInput from "./ChatInput";
import "./ChatDisplay.css";
import axios from "axios";
import { useEffect, useState } from "react";

const ChatDisplay = ({ user, clickedUser }) => {
  const userId = user?._id;
  const clickedUserId = clickedUser?._id;
  const [usersMessages, setUsersMessages] = useState(null);
  const [clickedUsersMessages, setClickedUsersMessages] = useState(null);

  const getUsersMessages = async (senderId, recipientId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/messages`,
        {
          params: { userId: userId, correspondingUserId: clickedUserId },
        }
      );
      setUsersMessages(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getClickedUsersMessages = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/users/messages`,
        {
          params: { userId: clickedUserId, correspondingUserId: userId },
        }
      );
      setClickedUsersMessages(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersMessages();
    getClickedUsersMessages();
  }, [usersMessages, clickedUsersMessages]);

  const messages = [];

  usersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = user?.dogName;
    formattedMessage["img"] = user?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    messages.push(formattedMessage);
  });

  clickedUsersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = clickedUser?.dogName;
    formattedMessage["img"] = clickedUser?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    messages.push(formattedMessage);
  });

  const descendingOrderMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );

  return (
    <div>
      <div className="chat-display">
        {descendingOrderMessages.map((message, _index) => (
          <div key={_index}>
            <div className="chat-message-header">
              <div className="img-container">
                <img src={message.img} alt={message.dogName + "profile"} />
              </div>
              <p>{message.name}</p>
            </div>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
      <ChatInput
        user={user}
        clickedUser={clickedUser}
        getUsersMessages={getUsersMessages}
        getClickedUsersMessages={getClickedUsersMessages}
      />
    </div>
  );
};
export default ChatDisplay;
