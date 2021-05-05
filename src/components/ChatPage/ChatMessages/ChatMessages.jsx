import React, {useRef, useEffect} from "react";
import Message from "./Message/Message";
import "./ChatMessages.css"

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
};

const ChatMessages = ({messages}) => {
    return (
        <div className="messages-container">
            <ol className="messages-list">
            {messages.map((message) => (
                <Message key={message.uuid} message={message} />
            ))}
            <AlwaysScrollToBottom key="last-element"/>
            </ol>
        </div>
    );
};

export default ChatMessages;


