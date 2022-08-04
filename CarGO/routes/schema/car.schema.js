const Schema = require('mongoose').Schema;

const carSchema = new Schema({
    Username: String,
    Vin: {
        require: true,
        type: String,
        unique: true
    },
    Year: {
        type: Number,
        require: true,
    },
    Make: {
        type: String,
        require: true
    },
    Model: {
        type: String,
        require: true
    },
    Trim: {
        type: String,
        require: true
    },
    Body: {
        type: String
    },
    Transmission: {
        type: String
    },
    State: {
        type: String
    },
    Odometer: {
        type: Number
    },
    CarCondition: {
        type: Number
    },
    Color: {
        type: String
    },
    Interior: {
        type: String
    },
    SellingPrice: {
        type: Number,
        require: true
    },
    SellerId: {
        type: String,
        require: true
    }
}, {
    collection: 'car',
    versionKey: false,
})

module.exports = carSchema;