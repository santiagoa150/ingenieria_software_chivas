require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const users = require("./routes/user/User")

const RoutesConstants = require("./RoutesConstants");

mongoose.connect("mongodb+srv://s4nt14g0:BOaA7mVRVXsuH7AQ@personal.hnyflqx.mongodb.net/ing_soft_chivas").then(() => {
    console.log("Database Connection Successfully.");
});

app.use(express.json());
app.use(cors());
app.use(RoutesConstants.USER_PREFIX, users);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port :: ${process.env.PORT}`);
});