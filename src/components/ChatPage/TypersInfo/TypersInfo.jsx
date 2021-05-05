import React from "react";
import "./TypersInfo.css"

const TypersInfo = ({typers, currentUsername}) => {
    if (typers.length === 0) return null;

    const renderContent = () => {
        const typingUsers = Object.keys(typers)
                                .filter(username => typers[username] !== false && username !== currentUsername); //Here also excluding currentUser

        if (typingUsers.length > 1) {
            return 'People are typing...';
        } else if (typingUsers.length === 1) {
            return `${typingUsers[0]} is typing...`;
        }
    }

    return (
        <span className="typers-info">
            {renderContent()}
        </span>
    )
};

export default TypersInfo;

