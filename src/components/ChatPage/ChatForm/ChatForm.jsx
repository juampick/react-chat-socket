import React from "react";
import "./ChatForm.css"

const ChatForm = ({onChangeText, onSendMessage}) => {
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
    const [isDisabled, setIsDisabled] = React.useState(true);

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
        onChangeText(event.target.value);    
        if (event.target.value !== '') setIsDisabled(false);
        if (event.target.value === '') setIsDisabled(true);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        setNewMessage("");
        setIsDisabled(true);
        onSendMessage(newMessage);
    };

    return (
        <form onSubmit={handleSendMessage}>
            <div className="form-container">
                <textarea
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Message"
                    className="new-message-input-field"
                />
                <input
                    type="submit"
                    className={`send-message-button ${isDisabled ? 'send-message-button--disabled' : ''}`}
                    value="Send"
                    disabled={isDisabled}/>
            </div>
        </form>
    );
};

export default ChatForm;


