const express = require('express')
const {Router} = express;
const router = Router();

const UserConstants = require("./UserConstants");
const userModel = require('./UserSchema');

router.post(UserConstants.LOGIN_PATH, async (req, res) => {
    const user = await userModel.find({username: 'santiago'});
    res.json(user);
});

module.exports = router;