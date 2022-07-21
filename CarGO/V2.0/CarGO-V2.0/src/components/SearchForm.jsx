import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import CarCards from "./CarCards";
import { Card, Button } from "react-bootstrap";


export default function SearchForm(props) {
    const [Year, setYear] = useState('');
    // const params = useParams();
    // // const [Make, setMake] = useState('');
    // // const [Model, setModel] = useState('');
    // // const [State, setState] = useState('');

    // function searchCars() {
    //     Axios.get('/api/cars/' + params.year)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => console.log(error));
    //     // Axios.get('/api/cars/', { params: { Year: Year } }).catch(error => console.log(error));
    // }
    const params = useParams();
    const [cars, setCars] = useState('');

    function getCars() {
        Axios.post("/api/cars/search", { Year })
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
                </Card>
                <Button size="lg" className="custom-btn mt-3" onClick={() => getCars()} >
                    Search
                </Button>
            </div>
            <CarCards cars={cars} />
        </div>
    )
}