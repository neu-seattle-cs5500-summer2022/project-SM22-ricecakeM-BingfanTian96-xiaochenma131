const Schema = require('mongoose').Schema;

const messageSchema = new Schema({
    CarId: String,
    FromId: String,
    ToId: String,
    Content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    collection: 'message',
    versionKey: false,
})

module.exports = messageSchema;