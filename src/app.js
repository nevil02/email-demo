const express = require("express");
require("./mongoose");
const userRouter = require("./routers/user");
const adminRouter = require("./routers/admin");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(adminRouter);

app.get("", (req, res) => {
    res.send("Backend Service Running");
});

module.exports = app;