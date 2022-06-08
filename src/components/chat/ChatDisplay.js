import ChatInput from "./ChatInput";
import "./ChatDisplay.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";

const ChatDisplay = ({ user, clickedUser }) => {
  const userId = user?._id;
  const clickedUserId = clickedUser?._id;
  const [usersMessages, setUsersMessages] = useState([
    { length: 0, timestamp: "2022-02-01T18:28:40+00:00" },
  ]);
  const [clickedUsersMessages, setClickedUsersMessages] = useState([
    {
      length: 0,
      timestamp: "2022-01-01T18:28:40+00:00",
    },
  ]);

  const getUsersMessages = async () => {
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
  }, [usersMessages.length, clickedUsersMessages.length]);

  //Format the messages so both user and matched
  //users messages are in same array with both name and url for image
  const messages = [];

  usersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = user?.dogName;
    formattedMessage["img"] = "#";
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    formattedMessage["classname"] = "usermessage";
    messages.push(formattedMessage);
  });

  clickedUsersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = clickedUser?.dogName;
    formattedMessage["img"] = clickedUser?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    formattedMessage["classname"] = "respondingmessage";
    messages.push(formattedMessage);
  });

  const descendingOrderMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );

  return (
    <div>
      <ChatHeader clickedUser={clickedUser} />
      <div className="chat-display">
        {descendingOrderMessages.map((message, _index) => (
          <div key={_index}>
            <div className="chat-message-header">
              <div className={message.classname}>
                {message.img !== "#" && (
                  <div className={message.classname}>
                    <div className="img-container-chat">
                      <img src={message.img} alt={message.name + "profile"} />
                    </div>
                  </div>
                )}
                <div className="flex-col w-full">
                  <div className="flex justify-center">
                    <p className="timestamp">
                      {new Date(message.timestamp).toString().slice(0, -41)}
                    </p>
                  </div>
                  <div className={message.classname}>
                    <p className={message.classname}>{message.message}</p>
                  </div>
                </div>
              </div>
            </div>
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
