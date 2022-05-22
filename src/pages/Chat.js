import Header from "../components/Header";
import SwipeHeader from "../components/swipe/SwipeHeader";
import "./Chat.css";
import ChatContainer from "../components/chat/ChatContainer";

const Chat = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center m-20">
        <SwipeHeader />
      </div>
      <ChatContainer />
    </>
  );
};

export default Chat;
