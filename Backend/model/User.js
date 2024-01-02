const mongoose = require("mongoose");
const UserProfile = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 5,
        max: 25
    },
    title:{
        type: String,
        default: ""
    },
    dob:{
        type: String ,
        // required: true,
        default: ""
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobile:{
        type: Number,
        // required: true,
        max: 12,
        default: ""
    },
    aadhar_number:{
        type: String,
        // required: true,
        max:16,
        default:"0000 0000 0000 0000"
    },
    permanent_address:{
        type: String,
        // required: true
        default: ""
    },
    current_address:{
        type: String,
        // required: true
        default: ""
    },
    password:{
        type: String,
        required:true,
        min: 8
    },
    current_city:{
        type: String,
        // required:true
        default: ""
    },
    permanent_city:{
        type: String,
        // required: true
        default: ""
    },
    gender:{
        type : String,
        // required:true
        default: "male"
    },
    about: {
        type: String,
        default: ""
    },
    current_work:{
        type: String,
        // required : true
        default: ""
    },
    profile_img:{
        type: String,
        default: ""
    },
    cover_img:{
        type:String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    education:{
        type: String,
        default: ""

    },
    skill:{
        type: String,
        default:""

    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
})
module.exports = mongoose.model("userprofile",UserProfile);