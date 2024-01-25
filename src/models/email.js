const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
    senderEmailId: {
        type: String,
        required: true,
        trim: true
    },
    receiverEmailId: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        subject: {
            type: String
        },
        body: {
            type: String,
            required: true,
            validate(value) {
                if (value.toLowerCase() === "") {
                    throw new Error("Email can not have empty body");
                }
            }
        }
    },
    status: {
        type: Boolean,
        required: true
    }
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;