const mongoose = require('mongoose');

const messageSchema = require('../schema/message.schema');

const messageModel = mongoose.model.message || mongoose.model("Message", messageSchema);

function createMessage(message) {
    return messageModel.create(message);
}

function getMessageByToId(ToId) {
    return messageModel.find({
        ToId: ToId,
    }).exec();
}

function getAllMessages() {
    return messageModel.find().exec();
}

// function getReviewByReviewId(reviewId) {
//     return ReviewModel.findOne({
//         _id: reviewId
//     }).exec();
// }

// function deleteReviewByReviewId(reviewId) {
//     return ReviewModel.findByIdAndDelete(reviewId).exec()
// }

// function updateReviewByReviewId(review, newReview) {
//     return ReviewModel.findOneAndUpdate(
//         review,
//         newReview,
//         { new: true }
//     );
// }


module.exports = {
    createMessage,
    getMessageByToId,
    getAllMessages,
}