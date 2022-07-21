const mongoose = require('mongoose');

const CarSchema = require('../schema/car.schema');

const CarModel = mongoose.model.Car || mongoose.model("Car", CarSchema);

function createCar(car) {
    return CarModel.create(car);
}

function getAllCars() {
    return CarModel.find().exec();
}

function deleteCar(car) {
    return CarModel.findOneAndDelete(car).exec();
}

function getCarsByFilter(year, make, model, state) {
    return CarModel.find({
        Year: year,
        Make: make,
        Model: model,
        State: state,
    }).exec();
}

function getCarsByYear(year) {
    return CarModel.find({
        Year: year
    }).exec();
}

module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    getCarsByFilter,
    getCarsByYear,
}