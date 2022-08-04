import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import CarCards from "./CarCards";
import { Card, Button } from "react-bootstrap";


export default function SearchForm(props) {
    const [Year, setYear] = useState('');
    const [Make, setMake] = useState('');
    const [Model, setModel] = useState('');
    const [State, setState] = useState('');

    const params = useParams();
    const [cars, setCars] = useState('');

    function getCars() {
        Axios.post("/api/cars/search", { Year, Make, Model, State })
            .then(function (response) {
                setCars(response.data);
                console.log("response is: " + JSON.stringify(response));
            })
    }

    useEffect(getCars, []);
    return (
        <div>
            <div className="car-card">
                <Card className='w-auto'>
                    <Card.Header>Search Cars</Card.Header>
                    <Card.Body>
                        <h5>Year</h5>
                        <input value={Year} onChange={e => setYear(e.target.value)} />
                    </Card.Body>
                    <Card.Body>
                        <h5>Make</h5>
                        <input value={Make} onChange={e => setMake(e.target.value)} />
                    </Card.Body>
                    <Card.Body>
                        <h5>Model</h5>
                        <input value={Model} onChange={e => setModel(e.target.value)} />
                    </Card.Body>
                    <Card.Body>
                        <h5>State</h5>
                        <input value={State} onChange={e => setState(e.target.value)} />
                    </Card.Body>
                </Card>
                <Button size="lg" className="custom-btn mt-3" onClick={() => getCars()} >
                    Search
                </Button>
            </div>
            <CarCards cars={cars} />
        </div>
    )
}