import React from "react";
import "./LastEvents.css";

const LastEvents = ({userConnectedStatus, userDisconnectedStatus, currentUsername}) => {
    const renderLastEvents = () => {
        let connected = null;
        let disconnected = null;
        if (userConnectedStatus && userConnectedStatus !== currentUsername){
            connected = <span>{userConnectedStatus} connected</span>
        }

        if (userDisconnectedStatus && userConnectedStatus !== currentUsername){
            disconnected = <span>{userDisconnectedStatus} disconnected</span>
        }
        return [
            <p key="connections">Connections: {connected || '-'}</p>,
            <p key="disconnections">Disconnections: {disconnected || '-'}</p>
        ]
    }
    
    return (
        <div className="chat-status">
            Last Events: {renderLastEvents()}
        </div>
    )
};

export default LastEvents;