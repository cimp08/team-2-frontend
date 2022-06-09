import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import "./ChatContainer.css";
import React, { useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <>
      <div className="chat-container ">
        <div className="chat bg-white w-2/4 rounded-3xl border border-primaryBorder shadow-2xl m py-5 px-5 text-center">
          <div className="chat-buttons">
            <button className="option" onClick={() => setClickedUser(null)}>
              Matches
            </button>
            <button className="option" disabled={!clickedUser}>
              Chat
            </button>
          </div>
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
