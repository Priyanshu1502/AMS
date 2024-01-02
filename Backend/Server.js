const express = require('express');
const Server = express();
const mongoose = require('mongoose');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts")
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

main().catch(err => { console.log(err) });
async function main() {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/AWS", { useNewUrlparser: true });
        console.log("connected Successfully")
    } catch (error) {
        console.log(error)
    };
//middle ware
Server.use(cors());
Server.use(express.json());
Server.use(helmet());
Server.use(morgan("common"));

Server.use("/api/users", userRoute);
Server.use("/api/auth",authRoute);
Server.use("/api/posts",postRoute);



Server.listen(4000, () => {
  console.log("The Server is live on port: 4000")
});
}