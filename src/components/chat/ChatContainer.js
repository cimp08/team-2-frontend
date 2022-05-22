import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import "./ChatContainer.css";

const ChatContainer = () => {
  return (
    <>
      <div className="chat-container">
        <div className="chat w-3/4 bg-white max-w-4xl rounded-3xl border border-primaryBorder shadow-2xl py-2 px-10 text-center">
          <div className="chat-buttons">
            <button className="option">Matches</button>
            <button className="option">Chat</button>
          </div>
          <ChatHeader />
          <MatchesDisplay />
          <ChatDisplay />
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
