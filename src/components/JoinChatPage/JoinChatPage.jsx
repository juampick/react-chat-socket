import React from "react";
import { Link } from "react-router-dom";
import "./JoinChatPage.css";

const JoinChatPage = () => {
  const [userName, setUserName] = React.useState("");
  const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    if (event.target.value !== '') setButtonIsDisabled(false);
    if (event.target.value === '') setButtonIsDisabled(true);
  };

  return (
    <div className="join-chat-container">
      <h2>Join Chat</h2>
      <p>Please enter your username</p>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={handleUserNameChange}
        className="text-input-field"
      />
      <button disabled={buttonIsDisabled} className={`button-next ${buttonIsDisabled ? "disabled" : ""}`}>
        <Link to={`/chat/${userName}`} className="next-enter-room-button">
          Next
        </Link>
      </button>
    </div>
  );
};

export default JoinChatPage;