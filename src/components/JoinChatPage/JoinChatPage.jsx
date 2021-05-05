import React from "react";
import { Link } from "react-router-dom";
import "./JoinChatPage.css";

const JoinChatPage = () => {
  const [userName, setUserName] = React.useState("");
  // const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    // if (event.target.value !== '') setButtonIsDisabled(false);
    // if (event.target.value === '') setButtonIsDisabled(true);
  };

  return (
    <div className="join-chat-container">
      <h2 className="title">Join Chat</h2>
      <label for="username" className="username-legend">Please enter your username</label>
      <input
        id="username"
        type="text"
        placeholder="Username"
        value={userName}
        onChange={handleUserNameChange}
        className="text-input-field"
      />
      {/* next-enter-room-button--disabled */}
      <Link to={`/chat/${userName}`} className="next-enter-room-button">
        Next
      </Link>
    </div>
  );
};

export default JoinChatPage;