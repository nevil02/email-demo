const mongoose = require("mongoose");

// console.log(process.env.DB_URL);
console.log("mongoosesss");

mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
