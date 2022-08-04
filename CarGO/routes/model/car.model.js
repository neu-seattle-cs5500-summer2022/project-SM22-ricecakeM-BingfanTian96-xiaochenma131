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
    if (year != '' && make != '' && model != '' && state != '') {
        return CarModel.find({
            Year: year,
            Make: make,
            Model: model,
            State: state,
        }).exec();
    } else if (year != '' && make != '' && model != '') {
        return CarModel.find({
            Year: year,
            Make: make,
            Model: model,
        }).exec();
    } else if (year != '' && make != '' && state != '') {
        return CarModel.find({
            Year: year,
            Make: make,
            State: state,
        }).exec();
    } else if (year != '' && model != '' && state != '') {
        return CarModel.find({
            Year: year,
            Model: model,
            State: state,
        }).exec();
    } else if (make != '' && model != '' && state != '') {
        return CarModel.find({
            Make: year,
            Model: model,
            State: state,
        }).exec();
    } else if (model != '' && state != '') {
        return CarModel.find({
            Model: model,
            State: state,
        }).exec();
    } else if (year != '' && state != '') {
        return CarModel.find({
            Year: year,
            State: state,
        }).exec();
    } else if (year != '' && make != '') {
        return CarModel.find({
            Year: year,
            State: state,
        }).exec();
    } else if (year != '' && model != '') {
        return CarModel.find({
            Year: year,
            Model: model,
        }).exec();
    } else if (make != '' && model != '') {
        return CarModel.find({
            Make: make,
            Model: model,
        }).exec();
    } else if (make != '' && state != '') {
        return CarModel.find({
            Make: make,
            State: state,
        }).exec();
    } else if (year != '') {
        return CarModel.find({
            Year: year,
        }).exec();
    } else if (make != '') {
        return CarModel.find({
            Make: make,
        }).exec();
    } else if (model != '') {
        return CarModel.find({
            Model: model,
        }).exec();
    } else if (state != '') {
        return CarModel.find({
            State: state,
        }).exec();
    } else {
        return CarModel.find().exec();
    }
}

function getCarsByYear(year) {
    return CarModel.find({
        Year: year
    }).exec();
}

function getCarById(CarId) {
    return CarModel.findById(CarId).exec();
}

module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    getCarsByFilter,
    getCarsByYear,
    getCarById
}