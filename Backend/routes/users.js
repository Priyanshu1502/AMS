const userprofile = require("../model/User")
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);

            } catch (err) {
                return res.status(500).json(err)
            }

            try {
                await userprofile.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.status(200).json("Account has been updated")
            } catch (err) {
                return res.status(500).json(err);
            }
        } else {
            return res.status(403).json("you can update only your account");
        }
    }
});
//delete user

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await userprofile.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been Deleted")

        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("you can delete only your account");
    }
});

//get a user


router.get("/:userId", async (req, res) => {
    // if (req.body.userId === req.params.id || req.body.isAdmin) {
        const userId = req.params.userId;
        const username= req.query.username;
        try {
            const user = userId ? await userprofile.findById(userId): await userprofile.findOne({username:username})
            const { password, updatedAt, ...other } = user._doc;
            return res.status(200).json(other);
            // const user = await User.find();
            // res.status(200).json(user);

        } catch (error) {
            res.status(500).json(error);
        }
    // } else {
    //     return res.status(403).json("you can only find your account");
    // }
});
//follow a user


router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await userprofile.findById(req.params.id);
            const currentUser = await userprofile.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId }});
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you already follow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }

    } else {
        res.status(403).json("you cant follow yourself");
    }
});
//unfollow a user


router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await userprofile.findById(req.params.id);
            const currentUser = await userprofile.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId }});
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you already unfollow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
});




// router.get("/",(req,res)=>{
// res.send("Welcome to our users Page")
// });
module.exports = router;