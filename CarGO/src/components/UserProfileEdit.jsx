import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function UserProfileEdit(props) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [DOB, setDOB] = useState('');
    const [Zip, setZip] = useState('');
    const [Phone, setPhone] = useState('');
    const [errorForPassword, setErrorForPassword] = useState(null);

    useEffect(checkLogInUser, []);

    function modifyUserProfile() {
        Axios.post('/api/user/profile', { Email, Password, FirstName, LastName, DOB, Zip, Phone })
            .then(response => {
                console.log("User Profile Updated!");
                console.log(response.data);
            })
            .catch(error => console.log(error));
    }

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
                <Card.Header>My Profile</Card.Header>
                <Card.Body>
                    <h5>Email</h5>
                    <input value={Email} />
                    <h5>Password</h5>
                    <input type='password' value={Password} placeholder="At least 8 characters" onChange={handleChangeForPassword} />
                    {errorForPassword && <h6 style={{ color: 'red' }}>{errorForPassword}</h6>}
                    <h5>First Name</h5>
                    <input value={FirstName} onChange={e => setFirstName(e.target.value)} />
                    <h5>Last Name</h5>
                    <input value={LastName} onChange={e => setLastName(e.target.value)} />
                    <h5>Date of Birth</h5>
                    <input type='date' value={DOB} onChange={e => setDOB(e.target.value)} />
                    <h5>Zip</h5>
                    <input value={Zip} onChange={e => setZip(e.target.value)} />
                    <h5>Phone</h5>
                    <input value={Phone} onChange={e => setPhone(e.target.value)} />
                </Card.Body>
            </Card>
            <Button size="lg" className="custom-btn mt-3" onClick={() => modifyUserProfile()} as={Link} to={"/profile"}>
                Save
            </Button>
        </div >
    )
} 