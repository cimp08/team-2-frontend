import "./ChatHeader.css";

const ChatHeader = ({ clickedUser }) => {
  const name = clickedUser?.dogName;
  const img = clickedUser?.url;
  return (
    <div className="chat-header">
      <img className="picture" src={img} />
      <h1>{name}</h1>
    </div>
  );
};

export default ChatHeader;
