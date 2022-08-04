import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function MessageCard(props) {
    const message = props.message;
    const CarId = message.CarId;
    const FromId = message.FromId;
    const ToId = message.ToId;
    const ReplyFromId = ToId;
    const ReplyToId = FromId;
    const [newMessageInput, setNewMessageInput] = useState('');

    function createReplyMessage() {

        Axios.post('/api/messages', {
            CarId: CarId,
            FromId: ReplyFromId,
            ToId: ReplyToId,
            newMessageInput: newMessageInput,
        }).then(() => { })
            .catch(function (err) {
                console.log(err);
            })
    }

    return (
        <div className="car-card">
            <Card className='w-auto'>
                <Card.Header>
                    <span color="blue">Message</span></Card.Header>
                <Card.Body>
                    <Card.Text>From: {message.FromId}</Card.Text>
                    <Card.Text>Send Time: {message.createdAt}</Card.Text>
                    <Card.Text>Content: {message.Content}</Card.Text>
                    <div className="reply-card">
                        <Form.Group className="mb-3">
                            <Form.Label>Enter your message</Form.Label>
                            <Form.Control placeholder="Enter the message"
                                value={newMessageInput}
                                onChange={e => setNewMessageInput(e.target.value)} />
                        </Form.Group>
                        <Button size="sm" className="custom-btn" onClick={createReplyMessage} as={Link} to={'/'} >
                            Reply
                        </Button>
                        <div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
}