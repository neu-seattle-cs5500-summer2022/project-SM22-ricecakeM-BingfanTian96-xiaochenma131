import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import CarCards from "./components/CarCards";

function App() {
  const [cars, setCars] = useState('');

  function getCars() {
    Axios.get("/api/cars/")
      .then(function (response) {
        setCars(response.data);
      })
  }

  // function searchCars() {
  //   Axios.get(`/api/cars/?Year=${Year}`)
  //     .then(response => {
  //       setCars(response.data);
  //     })
  //     .catch(error => console.log(error));
  // }

  useEffect(getCars, []);

  return (
    <div>
      <CarCards cars={cars} />
    </div>
  );
}

export default App;
