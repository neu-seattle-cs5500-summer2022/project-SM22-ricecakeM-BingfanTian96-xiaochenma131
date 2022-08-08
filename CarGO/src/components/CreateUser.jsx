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
    const [errorForEmail, setErrorForEmail] = useState(null);
    const [errorForPassword, setErrorForPassword] = useState(null);


    function createNewUser() {
        Axios.post('/api/user/', { Email, Password, FirstName, LastName, DOB, Zip, Phone })
            .then(response => {
                console.log("Created user");
                console.log(response.data);
                navigate('/');

            })
            .catch(error => console.log(error));
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChangeForEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setErrorForEmail('Please enter a valid email');
        } else {
            setErrorForEmail(null);
        }

        setEmail(event.target.value);
    };

    function isValidPassword(password) {
        if (password.length >= 8) {
            return true;
        } else {
            return false;
        }
    }

    const handleChangeForPassword = event => {
        if (!isValidPassword(event.target.value)) {
            setErrorForPassword('The password must be at least 8 characters long');
        } else {
            setErrorForPassword(null);
        }
        setPassword(event.target.value);
    }

    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>Create an Account</Card.Header>
                <Card.Body>
                    <h5>Email</h5>
                    <input type='email' value={Email} placeholder="Enter your email" onChange={handleChangeForEmail} />
                    {errorForEmail && <h6 style={{ color: 'red' }}>{errorForEmail}</h6>}
                    <h5>Password</h5>
                    <input type='password' value={Password} placeholder="At least 8 characters" onChange={handleChangeForPassword} />
                    {errorForPassword && <h6 style={{ color: 'red' }}>{errorForPassword}</h6>}
                    <h5>FirstName</h5>
                    <input value={FirstName} onChange={e => setFirstName(e.target.value)} />
                    <h5>LastName</h5>
                    <input value={LastName} onChange={e => setLastName(e.target.value)} />
                    <h5>Date of Birth</h5>
                    <input type='date' value={DOB} onChange={e => setDOB(e.target.value)} />
                    <h5>Zip Code</h5>
                    <input value={Zip} onChange={e => setZip(e.target.value)} />
                    <h5>Phone</h5>
                    <input value={Phone} onChange={e => setPhone(e.target.value)} />
                </Card.Body>
            </Card>
            {!errorForEmail && !errorForPassword &&
                <Button size="lg" className="custom-btn mt-3" onClick={() => createNewUser()} >
                    Create
                </Button>
            }
        </div>
    )
} 