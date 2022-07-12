import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import CarCards from "./components/CarCards";

function App() {
  const [cars, setCars] = useState('');

  function getCars() {
    Axios.get("/api/cars")
      .then(function (response) {
        setCars(response.data);
      })
  }

  useEffect(getCars, []);

  return (
    <div>
      <CarCards cars={cars} />
    </div>
  );
}

export default App;
