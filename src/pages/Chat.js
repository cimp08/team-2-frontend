import Header from "../components/Header";
import SwipeHeader from "../components/swipe/SwipeHeader";
import Footer from "../components/Footer";
import ChatHeader from "../components/chat/ChatHeader";
import ChatDisplay from "../components/chat/ChatDisplay";
import MatchesDisplay from "../components/chat/MatchesDisplay";

const Chat = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center m-20">
        <SwipeHeader />
      </div>
      <div className="onboarding bg-white max-w-4xl rounded-3xl border border-primaryBorder shadow-2xl py-10 px-10 text-center">
        <ChatHeader />
        <div>
          <button className="option">Matches</button>
          <button className="option">Chat</button>
        </div>
        <MatchesDisplay />
        <ChatDisplay />
      </div>
      <Footer />
    </>
  );
};

export default Chat;
