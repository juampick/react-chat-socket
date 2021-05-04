import React from "react";
import moment from 'moment'
import "./Message.css";

const UI_AVATARS_BASE_PATH = process.env.UI_AVATARS_BASE_PATH;
const FORMAT_TIME = 'h:mm a';

const Message = ({message}) => {
    const renderMessage = (message) => {
        if (message.type == 'text'){
            return <p>{message.text}</p>;
        } else if (message.type == 'image'){
            return <img src={message.url} alt={message.alt} />
        }
    }

    const generateUIAvatar = (name) => {
        return `${UI_AVATARS_BASE_PATH}?rounded=true&name=${name}`;
    }

    return (
        <li className='message-item'>
            <img src={generateUIAvatar(message.username)} />
            <p>Time: {moment(message.time).format(FORMAT_TIME)}</p>
            {renderMessage(message)}
        </li>
    );
};

export default Message;