import React from "react";
import Message from "./Message/Message";
import "./ChatMessages.css"

const ChatMessages = ({messages}) => {
    return (
        <div className="messages-container">
            <ol className="messages-list">
            {messages.map((message) => (
                <Message key={message.uuid} message={message} />
            ))}
            </ol>
        </div>
    );
};

export default ChatMessages;


