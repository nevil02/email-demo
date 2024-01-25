const express = require("express");
const User = require("../models/user");
const Email = require("../models/email");
const router = new express.Router();

router.get("/user/mails/inbox", async (req, res) => {
    try {
        const userEmail = req.body.userEmail;

        const user = User.findOne({ emailId: userEmail });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const emails = await Email.find({ receiverEmailId: userEmail, status: true });
        return res.send(emails);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

router.get("/user/mails", async (req, res) => {
    try {
        const userEmail = req.body.userEmail;

        const user = await User.findOne({ emailId: userEmail });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const emails = await Email.find({ senderEmailId: userEmail });
        return res.send(emails);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

router.post('/user/mails', async (req, res) => {
    try {
        const senderEmailId = req.body.senderEmailId;
        const receiverEmailId = req.body.receiverEmailId;
        const message = req.body.message;

        const receiver = await User.findOne({ emailId: receiverEmailId });

        if (!receiver) {
            return res.status(404).send("Receiver not found!!");
        }

        const email = new Email({
            senderEmailId: senderEmailId,
            receiverEmailId: receiverEmailId,
            message: message,
            status: false
        });

        await email.save();

        res.status(200).send("Message sent");
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = router;