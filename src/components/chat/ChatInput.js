import "./ChatInput.css";
import React, { useState } from "react";
import axios from "axios";

const ChatInput = ({
  user,
  clickedUser,
  getUsersMessages,
  getClickedUsersMessages,
}) => {
  const [textArea, setTextArea] = useState("");
  const userId = user?._id;
  const clickedUserId = clickedUser?._id;

  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString(),
      fromUserId: userId,
      toUserId: clickedUserId,
      message: textArea,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/users/message`,
        { message }
      );
      getUsersMessages();
      getClickedUsersMessages();
      setTextArea("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-input">
      <textarea
        data-testid="textarea-test"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button
        data-testid="button-test"
        onClick={addMessage}
        className="chat-button hover:bg-purple-700 text-white text-sm sm:text-base py-3 px-4 sm:py-2 sm:px-9 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default ChatInput;
