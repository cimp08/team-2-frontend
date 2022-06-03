import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import "./ChatContainer.css";
import { useEffect, useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);
  useEffect(() => {
    console.log(clickedUser);
  }, [clickedUser]);
  return (
    <>
      <div className="chat-container ">
        <div className="chat sm:w-5/6 bg-white max-w-4xl rounded-3xl border border-primaryBorder shadow-2xl m py-2 px-10 text-center">
          <div className="chat-buttons">
            <button className="option" onClick={() => setClickedUser(null)}>
              Matches
            </button>
            <button className="option" disabled={!clickedUser}>
              Chat
            </button>
          </div>
          <ChatHeader />
          {!clickedUser && user && (
            <MatchesDisplay
              setClickedUser={setClickedUser}
              matches={user.matches}
            />
          )}
          {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
