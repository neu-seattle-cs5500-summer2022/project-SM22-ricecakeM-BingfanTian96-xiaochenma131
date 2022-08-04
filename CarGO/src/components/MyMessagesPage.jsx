import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./../App.css";
import MessageCards from "./MessageCards";

export default function MyMessagesPage() {
    const [messages, setMessages] = useState('');
    const [email, setEmail] = useState('maggiebuaa@gmail.com');

    function checkLogInUser() {
        Axios.get('/api/user/isLoggedIn')
            .then(response => setEmail(response.data.Email))
            .catch(error => console.log("User is not logged in"));
    }

    function getMessages() {
        Axios.post("/api/messages/myMessages", { email })
            .then(function (response) {
                setMessages(response.data);
            })
    }
    useEffect(checkLogInUser, [])
    useEffect(getMessages, [checkLogInUser]);

    return (
        <div>
            <MessageCards messages={messages} />
        </div>
    );
}