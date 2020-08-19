import React, { useState } from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            name: "Sarah",
            image: "https://media.short-biography.com/wp-content/uploads/yvonne-strahovski/Yvonne-Strahovski.jpg",
            message: "Whats up!!"
        },
        {
            name: "Sarah",
            image: "https://media.short-biography.com/wp-content/uploads/yvonne-strahovski/Yvonne-Strahovski.jpg",
            message: "Hows it going?"
        },
        {
            message: "Hii! How are You.?"
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }
    
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You Matched with Sarah on 10/08/2020</p>
            {messages.map(message => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
            ))}
            
                <form className="chatScreen__input">
                    <input value={input} onChange={e => setInput(e.target.value)} 
                    className="chatScreen__inputField" type="text" placeholder="Type Here...."/>
                    <button onClick={handleSend} className="chatScreen__inputButton">Send</button>
                </form>
            
        </div>
    )
}

export default ChatScreen
