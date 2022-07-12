import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import { Card, Button } from "react-bootstrap";

export default function CreateUser(props) {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [DOB, setDOB] = useState('');
    const [Zip, setZip] = useState('');
    const [Phone, setPhone] = useState('');

    function createNewUser() {
        Axios.post('/api/user/', { Email, Password, FirstName, LastName, DOB, Zip, Phone })
            .then(response => {
                console.log("Created user");
                console.log(response.data);
                navigate('/');

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>Create an Account</Card.Header>
                <Card.Body>
                    <h5>Email</h5>
                    <input value={Email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={Password} onChange={e => setPassword(e.target.value)} />
                    <h5>FirstName</h5>
                    <input value={FirstName} onChange={e => setFirstName(e.target.value)} />
                    <h5>LastName</h5>
                    <input value={LastName} onChange={e => setLastName(e.target.value)} />
                    <h5>DOB</h5>
                    <input type='date' value={DOB} onChange={e => setDOB(e.target.value)} />
                    <h5>Zip</h5>
                    <input value={Zip} onChange={e => setZip(e.target.value)} />
                    <h5>Phone</h5>
                    <input value={Phone} onChange={e => setPhone(e.target.value)} />
                </Card.Body>
            </Card>
            <Button size="lg" className="custom-btn mt-3" onClick={() => createNewUser()} >
                Create
            </Button>
        </div>
    )
} 