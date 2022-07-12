const mongoose = require('mongoose');

const CarSchema = require('../schema/car.schema');

const CarModel = mongoose.model.Car || mongoose.model("Car", CarSchema);

function createCar(car) {
    return CarModel.create(car);
}

function getAllCars() {
    return CarModel.find().exec();
}

function getCarByVin(vin) {
    return CarModel.find({
        Vin: vin
    }).exec();
}

function deleteCar(car) {
    return CarModel.findOneAndDelete(car).exec();
}

/**
function getArticleById(id) {
    return ArticleModel.findById(id).exec();
}

function updateArticleById(article, newArticle) {
    return ArticleModel.findOneAndUpdate(
        article,
        newArticle,
        { new: true }
    );
}
*/

module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    // getArticleById,
    // updateArticleById,
    // getArticleByUsername,
}