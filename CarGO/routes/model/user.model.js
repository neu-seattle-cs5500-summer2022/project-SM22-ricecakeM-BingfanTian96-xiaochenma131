const mongoose = require('mongoose');

const UserSchema = require('../schema/user.schema');

const UserModel = mongoose.model("User", UserSchema);

function createUser(user) {
    return UserModel.create(user);
}

function getUserByEmail(Email) {
    return UserModel.findOne({ Email: Email }).exec();
}

function modifyUser(Email, Password, FirstName, LastName, DOB, Zip, Phone) {
    const filter = { Email: Email };
    const update = { Password: Password, FirstName: FirstName, LastName: LastName, DOB: DOB, Zip: Zip, Phone: Phone }
    UserModel.findOneAndUpdate(filter, update).exec();
}

module.exports = {
    createUser,
    getUserByEmail,
    modifyUser,
}