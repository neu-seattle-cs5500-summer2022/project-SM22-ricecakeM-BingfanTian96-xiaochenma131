import React from "react";
import MessageCard from "./MessageCard";

export default function MessageCards(props) {
    const messages = props.messages;
    const messageComponent = [];

    for (let message of messages) {
        messageComponent.push(
            <div>
                <MessageCard message={message} />
            </div>
        )
    }
    messageComponent.reverse();

    return (
        <div>
            {messageComponent}
        </div>
    )
}