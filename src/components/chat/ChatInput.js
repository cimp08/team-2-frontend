import "./ChatInput.css";
import { useState } from "react";

const ChatInput = () => {
  const [textArea, setTextArea] = useState(null);
  return (
    <div className="chat-input">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="bg-purple-500 hover:bg-purple-700 text-white text-sm sm:text-base py-3 px-4 sm:py-2 sm:px-9 rounded-full">
        Submit
      </button>
    </div>
  );
};

export default ChatInput;
