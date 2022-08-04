const express = require('express')
const MessageModel = require('./model/message.model')

const router = express.Router()

router.post('/', function (request, response) {
    const CarId = request.body.CarId;
    const FromId = request.body.FromId;
    const ToId = request.body.ToId;
    const Content = request.body.newMessageInput;
    message = {
        CarId: CarId,
        FromId: FromId,
        ToId: ToId,
        Content: Content,
    }
    return MessageModel.createMessage(message)
        .then(response => {
            response.status(200).send(message);
        })
        .catch(err => {
            response.status(400).send(err)
        })
});

router.post('/myMessages', function (request, response) {
    const email = request.body.email;
    return MessageModel.getMessageByToId(email)
        .then(allMessages => {
            response.status(200).send(allMessages);
        })
        .catch(err => {
            response.status(400).send(err)
        })
});

module.exports = router;