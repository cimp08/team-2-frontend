import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import "./ChatContainer.css";
import { useEffect } from "react";

const ChatContainer = ({ user }) => {
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <div className="chat-container">
        <div className="chat  sm:w-5/6 bg-white max-w-4xl rounded-3xl border border-primaryBorder shadow-2xl py-2 px-10 text-center">
          <div className="chat-buttons">
            <button className="option">Matches</button>
            <button className="option">Chat</button>
          </div>
          <ChatHeader />
          {user && <MatchesDisplay matches={user.matches} />}
          <ChatDisplay />
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
