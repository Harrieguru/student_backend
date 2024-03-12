require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Students = require('./models/students');
const PORT = process.env.PORT;
const mongodbURI = process.env.MONGODB_URI;
const studentRoutes = require('./routes/studentRoutes');


// middleware
app.use(bodyParser.json());
app.use(cors());
// student route
app.use('/students',studentRoutes);

// create connection to db
mongoose.connect(mongodbURI)
    .then(() => console.log('db connected...'))
    .catch((error) => console.error('error connecting to db'))

app.get('/',(req,res) => {
    res.send('Hello World');
})





app.listen(PORT,() => {
    console.log(`server running on ${PORT}`);
})