const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

});

const Message = mongoose.model("Message", messageSchema);


module.exports = Message;