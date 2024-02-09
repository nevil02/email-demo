require("./mongoose");
const axios = require("axios");
const Spin = require("./spin");

//save function
const saveData = async (spins) => {
    await Spin.insertMany(spins);
};

//api function
const fetchData = async () => {
    console.log("fetchData fun exe");

    //call api
    try {
        const response = await axios.get(process.env.SPIN_URL.toString());

        const spins = response.data;

        spins.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);

        const spin = spins[spins.length - 1];

        let dbSpin = await Spin.find().sort([['createdAt', -1]]).limit(1);
        console.log("222222");

        // Spin
        //     // .findOne({}).sort({ createdAt: -1 }).limit(1).then((spin) => {
        //     //     if (spin) {
        //     //         dbSpin = spin
        //     //     }
        //     .aggregate([
        //         { $sort: { createdAt: -1 } },
        //         { $limit: 1 }
        //     ]).then((result) => {
        //         if (result.length > 0) {
        //             dbSpin = result[0];
        //         } else {
        //             console.log('No records found');
        //         }
        //     }).catch((err) => {
        //         console.error(err);
        //     });


        console.log("33333");

        console.log("sdfgtyhujk " + dbSpin);

        if (!dbSpin) {
            await saveData(spins);
            console.log("444444");

        } else {
            if (dbSpin._id === spin._id) {
                console.log("555555");

                return;
            }
            console.log("666666");
        }
        console.log("777777");
    }
    catch (e) {
        console.log(e.message);
        console.log("888888");

    }
};




//save data
module.exports = fetchData;