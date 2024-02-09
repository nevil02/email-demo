const mongoose = require("mongoose");

const spinSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    originalLink: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    promo: {
        type: Boolean
    },
    createdAt: {
        type: String,
        required: true,
        trim: true
    },
    updatedAt: {
        type: String,
        required: true,
        trim: true
    }
});

const Spin = mongoose.model("Spin", spinSchema);

module.exports = Spin;