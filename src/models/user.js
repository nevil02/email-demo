const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail((value))) {
                throw new Error(" Invalid Email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("Password should not contain the \"password\" keyword");
            }
        }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;