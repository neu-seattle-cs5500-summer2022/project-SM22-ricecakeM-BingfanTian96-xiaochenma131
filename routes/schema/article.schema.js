const Schema = require('mongoose').Schema;

const articleSchema = new Schema({
    username: String,
    CarId: {
        type: Schema.Types.ObjectId,
    },
    title: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    species: String,
    name: String,
}, {
    collection: 'article',
})

module.exports = articleSchema;