const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/travelling', (req, res) => {
    res.send("Hello world!");
})

const uri = "mongodb+srv://<username>:<password>@cluster0.ucfjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log("listening on port: ", port)
})