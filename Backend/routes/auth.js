const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");

//Register
// router.get("/register",async (req,res)=>{
//     const user = await new User({
//         username:"Neeraj",
//         email:"neerajbisht@gmail.com",
//         password:"1234567800"
//     })
//     await user.save();
//     res.send("ok")
// });

router.post("/register", async(req, res) => {
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        //save user
        const user = await newUser.save();
        return res.status(200).json("notexist");
    } catch (err) {
        return res.json("exist").status(500);
    }
});
router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        // !user && res.status(404).json("notexist");

        if(!user) {
            return res.json("doesnotexist").status(404);
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        // !validPassword && res.status(400).json("wrong password");
        if(!validPassword) {
            return res.json("wrong password").status(400);
        }
        
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;