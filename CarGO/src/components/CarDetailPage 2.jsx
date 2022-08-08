import { Card, Button, Form } from "react-bootstrap";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CarDetailPage() {
    const [car, setCar] = useState(undefined);
    const [newMessageInput, setNewMessageInput] = useState('');
    const [newFromId, setFromId] = useState('');
    const [newToId, setToId] = useState('');
    const [newVin, setVin] = useState('');
    const params = useParams();

    function sendNewMessage() {
        // if (!newMessageInput) return;
        // setToId(car.SellerId);
        Axios.post('/api/cars/' + params.CarId + '/message', {
            Content: newMessageInput,
            FromId: newFromId,
            ToId: newToId,
            CarID: newVin
        })
        .then(response => {
            // navigate('/cars/' + response.data._id)
            setNewMessageInput('');
        })
        .catch(function (err) {
            console.log(err);
        })
    }

    function checkLogInUser() {
        Axios.get('/api/user/isLoggedIn')
            .then(response => setFromId(response.data.Email))
            .catch(error => console.log("User is not logged in"));
    }

    useEffect(checkLogInUser, [])

    // useEffect(() => {
    //     Axios.get('/api/cars/' + params.CarId)
    //         .then(function (response) {
    //             setCar(response.data);
    //         });
    // }, []);

    function loadCarPage () {
        Axios.get('/api/cars/' + params.CarId)
        .then(function (response) {
            setCar(response.data);
            setToId(response.data.SellerId);
            setVin(response.data.Vin);
        });
    }

    useEffect(loadCarPage, [])

    if (!car) {
        return (
            <div>
                The car does not exist.
                <Button size="sm" className="custom-btn" as={Link} to='/'>
                    Go back to home
                </Button>
            </div>)
    } else {
        return (
            <div>
                <div className="car-card">
                    <Card className='w-auto'>
                        <Card.Header>
                            <span color="blue">{car.Make} - {car.Model} - {car.Year} | Price: ${car.SellingPrice}</span></Card.Header>
                        <Card.Body>
                            <Card.Text>Vin: {car.Vin} {' '}</Card.Text>
                            <Card.Text>Trim: {car.Trim} {' '}</Card.Text>
                            <Card.Text>Body: {car.Body} {' '}</Card.Text>
                            <Card.Text>Transmission: {car.Transmission} {' '}</Card.Text>
                            <Card.Text>Odometer: {car.Odometer} Miles{' '}</Card.Text>
                            <Card.Text>CarCondition: {car.CarCondition} (1 - 10){' '}</Card.Text>
                            <Card.Text>Color: {car.Color} | Interior: {car.Interior} </Card.Text>
                            <Card.Text>State: {car.State}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="car-card">
                    <Form.Group className="mb-3">
                        <Form.Label>Enter your message</Form.Label>
                            <Form.Control placeholder="Enter the message"
                                        value={newMessageInput}
                                        onChange={e => setNewMessageInput(e.target.value) } />
                    </Form.Group>
                    <Button size="sm" className="custom-btn" onClick={sendNewMessage} as={Link} to={'/'} >
                        Send
                    </Button>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}