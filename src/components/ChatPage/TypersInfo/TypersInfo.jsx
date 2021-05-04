import React from "react";

const TypersInfo = ({typers}) => {
    if (typers.length === 0) return null;

    const typingUsers = Object.keys(typers)
                                .filter(username => typers[username] !== false);

    if (typingUsers.length > 1) {
        return <p>People are typing...</p>;
    } else if (typingUsers.length === 1) {
        return <p>{typingUsers[0]} is typing...</p>;
    }

    return null;
};

export default TypersInfo;

