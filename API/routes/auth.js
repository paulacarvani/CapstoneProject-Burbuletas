const User = require("../models/User");
const router = require("express").Router();


//REGISTER
router.post("/register", async (req, resp) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try{
        const savedUser = await newUser.save();
        resp.status(201).json(savedUser)
    } catch (err) {
        resp.status(500).json(err);
    }
});



module.exports = router