import React from 'react';
import Chat from './Chat';
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat name="Sarah"
            message="Heyy! How are you."
            timestamp="35 minutes age"
            profilePic="https://media.short-biography.com/wp-content/uploads/yvonne-strahovski/Yvonne-Strahovski.jpg"/>

            <Chat name="Sarah"
            message="Heyy! How are you."
            timestamp="35 minutes age"
            profilePic="https://media.short-biography.com/wp-content/uploads/yvonne-strahovski/Yvonne-Strahovski.jpg"/>

            <Chat name="Sarah"
            message="Heyy! How are you."
            timestamp="35 minutes age"
            profilePic="https://media.short-biography.com/wp-content/uploads/yvonne-strahovski/Yvonne-Strahovski.jpg"/>

            <Chat name="Sarah"
            message="Heyy! How are you."
            timestamp="35 minutes age"
            profilePic="https://media.short-biography.com/wp-content/uploads/yvonne-strahovski/Yvonne-Strahovski.jpg"/>
        </div>
    )
}

export default Chats
