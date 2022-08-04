import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function UserProfile(props) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [DOB, setDOB] = useState('');
    const [Zip, setZip] = useState('');
    const [Phone, setPhone] = useState('');

    useEffect(checkLogInUser, []);

    function checkLogInUser() {
        Axios.get('/api/user/isLoggedIn')
            .then(response => {
                Axios.get('/api/user/' + response.data.Email)
                    .then(response => {
                        setEmail(response.data.Email);
                        setPassword(response.data.Password);
                        setDOB(response.data.DOB);
                        setFirstName(response.data.FirstName);
                        setLastName(response.data.LastName);
                        setPhone(response.data.Phone);
                        setZip(response.data.Zip);
                    })
            });
    }
    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>My Profile</Card.Header>
                <Card.Body>
                    <h6>Email: {Email} </h6>
                    <h6>First Name: {FirstName}</h6>
                    <h6>Last Name: {LastName} </h6>
                    <h6>Date of Birth: {DOB} </h6>
                    <h6>Zip: {Zip}</h6>
                    <h6>Phone: {Phone}</h6>
                </Card.Body>
            </Card>
            <Button size="lg" className="custom-btn mt-3" as={Link} to={"/profileEdit"}>
                Edit
            </Button>
        </div >
    )
} 