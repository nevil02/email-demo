const express = require("express");
require("./mongoose");
const userRouter = require("./routers/user");
const adminRouter = require("./routers/admin");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(adminRouter);

app.get("/coins", (req, res) => {
    res.send([
        {
            "_id": "65c10818654aad0e513c24f0",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBiMxWdF_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBiMxWdF_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T16:08:56.252Z",
            "updatedAt": "2024-02-05T16:08:56.252Z", "__v": 0
        },
        {
            "_id": "65c0d874654aad0e513c0bdf",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_EMAILmqjKiY_20240131",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_EMAILmqjKiY_20240131",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T12:45:40.392Z",
            "updatedAt": "2024-02-05T12:45:40.392Z",
            "__v": 0
        }, {
            "_id": "65c0c71a654aad0e513c00ce",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBXZNsFE_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBXZNsFE_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T11:31:38.434Z",
            "updatedAt": "2024-02-05T11:31:38.434Z",
            "__v": 0
        }, {
            "_id": "65c0c6e0654aad0e513c0080",
            "title": "60 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_RICHnGEcf_20240201",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_RICHnGEcf_20240201",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T11:30:40.011Z",
            "updatedAt": "2024-02-05T11:30:40.011Z",
            "__v": 0
        }, {
            "_id": "65c0b5c4654aad0e513bf88c",
            "title": "10 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_INSgjIOyV_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_INSgjIOyV_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T10:17:40.337Z",
            "updatedAt": "2024-02-05T10:17:40.337Z",
            "__v": 0
        }, {
            "_id": "65c09c47654aad0e513bf04d",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_CHATBjTkvYX_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_CHATBjTkvYX_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false, "createdAt": "2024-02-05T08:28:55.401Z",
            "updatedAt": "2024-02-05T08:28:55.401Z",
            "__v": 0
        }
    ]);
});

app.get("", (req, res) => {
    res.send("Backend Service Running");
});

module.exports = app;