import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

export default function CreateCar() {
    // const [newTitleInput, setNewTitleInput] = useState('');
    // const [newDesInput, setNewDesInput] = useState('');
    // const [newSpecies, setNewSpecies] = useState('');
    // const [newName, setNewName] = useState('');
    const [newVin, setNewVin] = useState(null);
    const [newYear, setNewYear] = useState(null);
    const [newMake, setNewMake] = useState(null);
    const [newModel, setNewModel] = useState(null);
    const [newTrim, setNewTrim] = useState(null);
    const [newBody, setNewBody] = useState(null);
    const [newTransmission, setNewTransmission] = useState(null);
    const [newState, setNewState] = useState(null);
    const [newOdometer, setNewOdometer] = useState(null);
    const [newCarCondition, setNewCarCondition] = useState(null);
    const [newColor, setNewColor] = useState(null);
    const [newInterior, setNewInterior] = useState(null);
    const [newSellingPrice, setNewSellingPrice] = useState(null);
    const [Email, setEmail] = useState(null);
    const navigate = useNavigate();

    useEffect(function () {
        Axios.get('/api/user/isLoggedIn')
            .then(response => setEmail(response.data.Email))
            .catch(error => console.log("User is not logged in"));
    })

    function createNewCar() {
        // if (!newTitleInput) return;

        Axios.post('/api/cars', {
            Vin: newVin,
            Year: newYear,
            Make: newMake,
            Model: newModel,
            Trim: newTrim,
            Body: newBody,
            Transmission: newTransmission,
            State: newState,
            Odometer: newOdometer,
            CarCondition: newCarCondition,
            Color: newColor,
            Interior: newInterior,
            SellingPrice: newSellingPrice,
            Email: Email,
        })
            .then(response => {
                navigate('/');
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Vin</Form.Label>
                    <Form.Control placeholder="Enter the Vin"
                        value={newVin}
                        onChange={e => setNewVin(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control placeholder="Enter the year"
                        value={newYear}
                        onChange={e => setNewYear(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Control placeholder="Enter the make"
                        value={newMake}
                        onChange={e => setNewMake(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Control placeholder="Enter the model"
                        value={newModel}
                        onChange={e => setNewModel(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Trim</Form.Label>
                    <Form.Control placeholder="Enter the trim"
                        value={newTrim}
                        onChange={e => setNewTrim(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control placeholder="Enter the body"
                        value={newBody}
                        onChange={e => setNewBody(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Control placeholder="Enter the transmission"
                        value={newTransmission}
                        onChange={e => setNewTransmission(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <div>
                        <Form.Select className="select-menu" value={newState} onChange={e => setNewState(e.target.value)}>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </Form.Select>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Odometer</Form.Label>
                    <Form.Control placeholder="Enter the odometer"
                        value={newOdometer}
                        onChange={e => setNewOdometer(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Car Condition</Form.Label>
                    <div>
                        <Form.Select className="select-menu" value={newCarCondition} onChange={e => setNewCarCondition(e.target.value)}>
                            <option value="1">1 (Poor)</option>
                            <option value="2">2 (Fair)</option>
                            <option value="3">3 (Good)</option>
                            <option value="4">4 (Very Good)</option>
                            <option value="5">5 (Excellent)</option>
                        </Form.Select>
                    </div>
                    {/* <Form.Control placeholder="Enter the car condition (0 - 5)"
                        value={newCarCondition}

                        onChange={e => setNewCarCondition(e.target.value)} /> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Color</Form.Label>
                    <Form.Control placeholder="Enter the color"
                        value={newColor}
                        onChange={e => setNewColor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Interior</Form.Label>
                    <Form.Control placeholder="Enter the interior"
                        value={newInterior}
                        onChange={e => setNewInterior(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Selling Price</Form.Label>
                    <Form.Control placeholder="Enter the selling price"
                        value={newSellingPrice}
                        onChange={e => setNewSellingPrice(e.target.value)} />
                </Form.Group>
                {(!newVin || !newYear || !newMake || !newModel || !newTrim || !newBody || !newTransmission || !newState || !newOdometer || !newCarCondition || !newColor || !newInterior || !newSellingPrice) && <h6 style={{ color: 'red' }}>Please enter value for all fields</h6>}
                {(newVin && newYear && newMake && newModel && newTrim && newBody && newTransmission && newState && newOdometer && newCarCondition && newColor && newInterior && newSellingPrice) &&
                    <Button size="sm" className="custom-btn" onClick={createNewCar} as={Link} to={'/'} >
                        Add new Car
                    </Button>}
            </Form>
        </div>
    );
}