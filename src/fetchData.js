require("./mongoose");
const axios = require("axios");
const Spin = require("./spin");

//api function
const fetchData = async () => {
    console.log("fetchData fun exe");

    //call api
    try {
        console.log("111111");
        const response = await axios.get(process.env.SPIN_URL);
        console.log("----------");

        const spins = response.body;
        console.log("++++++++++++");

        spins.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
        console.log("*****************");

        const spin = spins[spins.length - 1];
        console.log("^^^^^^^^^^^^^^^");

        let dbSpin;
        console.log("222222");

        Spin.findOne().sort({ created_at: -1 }).exec(function (err, spin) {
            if (err) {
                return;
            }
            dbSpin = spin;
        });
        console.log("33333");

        if (!dbSpin) {
            Spin.insertMany(spins);
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


//save function
const saveData = async (spins) => { };


//save data
module.exports = fetchData;