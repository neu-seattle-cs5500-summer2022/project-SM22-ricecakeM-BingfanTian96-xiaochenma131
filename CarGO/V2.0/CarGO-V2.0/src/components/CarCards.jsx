import React from "react";
import CarCard from "./CarCard";

export default function CarCards(props) {
    const cars = props.cars;
    const carComponent = [];

    for (let car of cars) {
        carComponent.push(
            <CarCard car={car} />
        )
    }
    carComponent.reverse();

    return (
        <div>
            {carComponent}
        </div>
    )
}