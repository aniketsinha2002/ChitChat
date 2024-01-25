import React from 'react';
import "../../App.css";

const Message = ({ user, message, classs, imageData }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}>
                {user && <span className="user">{`${user}: `}</span>}
                {imageData ? (
                    <img src={imageData} alt="Sent from user" className="messageImage" />
                ) : (
                    <p>{message}</p>
                )}
            </div>
        );
    } else {
        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
        );
    }
}

export default Message;
