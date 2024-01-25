const express = require("express");
const Email = require("../models/email");
const router = new express.Router();

router.get('/admin/mails', async (req, res) => {
    try {
        const emails = await Email.find({});
        res.status(200).send(emails);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

router.put('/admin/mails', async (req, res) => {
    try {
        const id = req.body.id;
        const message = req.body.message;

        const email = await Email.findById(id);

        if (!email) {
            return res.status(404).send();
        }

        email.message = message;
        await email.save();
        res.status(200).send("Update successfully");
    } catch (e) {
        res.status(500).send(e.message);
    }
});

router.put('/admin/mails/approve', async (req, res) => {
    try {
        const id = req.body.id;
        const email = await Email.findById(id);

        if (!email) {
            return res.status(404).send();
        }

        email.status = true;

        await email.save();
        res.status(200).send("Update successfully");
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = router;