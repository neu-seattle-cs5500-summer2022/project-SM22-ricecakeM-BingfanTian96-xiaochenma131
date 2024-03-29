const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

const articleRouter = require('./routes/articles');
const userRouter = require('./routes/user');
const carRouter = require('./routes/cars');
const messageRouter = require('./routes/messages');

mongoose.connect("mongodb+srv://CarGoAdmin:CS5500Hello!@cs5500-cargo.bwrdl.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const auth_middleware = require('./routes/middleware/auth_middleware');

console.log("Connect to DB Successfully");

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/articles', articleRouter);
app.use('/api/cars', carRouter);
app.use('/api/user', userRouter);
app.use('/api/messages', messageRouter);

const cors = require('cors');
app.use(cors({
  origin: '*',
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8000, function () {
  console.log("Starting server");
})