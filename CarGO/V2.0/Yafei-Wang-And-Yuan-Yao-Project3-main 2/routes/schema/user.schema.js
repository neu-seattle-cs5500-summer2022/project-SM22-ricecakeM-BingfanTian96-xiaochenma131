const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    Email: {
        type: String,
        unique: true,
    },
    Password: {
        type: String,
    },
    DOB: {
        type: Date,
    },
    Zip: {
        type: Number,
    },
    Phone: {
        type: String
    },
}, {
    collection: 'users',
    versionKey: false,
})

module.exports = UserSchema;