import React from "react";
import moment from 'moment'
import "./Message.css";

const UI_AVATARS_BASE_PATH = process.env.UI_AVATARS_BASE_PATH;
const FORMAT_TIME = 'h:mm a';

const Message = ({message}) => {
    const renderMessage = (message) => {
        if (message.type == 'text'){
            return <textarea className="text-message" defaultValue={message.text}/>;
        } else if (message.type == 'image'){
            return <img className="image-message" src={message.url} alt={message.alt} />
        }
    }

    const generateUIAvatar = (name) => {
        return `${UI_AVATARS_BASE_PATH}?rounded=true&name=${name}`;
    }

    return (
        <li className='message-item'>
            <img className="avatar" src={generateUIAvatar(message.username)} />
            <div className="message-content">
                <span className="message-title">
                    <span className="username">{message.username}</span>
                    <span className="time">{moment(message.time).format(FORMAT_TIME)}</span>
                </span>
                {renderMessage(message)}
            </div>
        </li>
    );
};

export default Message;