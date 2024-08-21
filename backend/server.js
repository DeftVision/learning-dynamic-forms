require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const port = process.env.PORT || 2000;
connectDB();


const app = express();
app.use(express.json());
app.use(cors());


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})