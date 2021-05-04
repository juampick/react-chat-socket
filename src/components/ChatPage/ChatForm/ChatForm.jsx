import React from "react";
import "./ChatForm.css"

const ChatForm = ({onChangeText, onSendMessage}) => {
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
    const [isDisabled, setIsDisabled] = React.useState(true);

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
        onChangeText(event.target.value);
        if (event.target.value !== '') setIsDisabled(false);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        setNewMessage("");
        onSendMessage(newMessage);
    };

    const submitButtonClass = (disabled) => {
        let className = "send-message-button"
        if (disabled) {
            className+= ' disabled';
        }
        return className;
    }

    return (
        <form onSubmit={handleSendMessage}>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Message"
                className="new-message-input-field"
                required
            />
            <input
                type="submit"
                className={submitButtonClass(isDisabled)}
                name="Send"
                disabled={isDisabled}/>
        </form>
    );
};

export default ChatForm;


