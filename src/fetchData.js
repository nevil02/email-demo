require("./mongoose");
const axios = require("axios");
const Spin = require("./spin");

console.log("fetchData file exe");

//api function
const fetchData = async () => {
    console.log("fetchData fun exe");

    //call api
    try {
        const response = await axios.get(process.env.SPIN_URL);

        const spins = response.body;
        spins.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);

        const spin = spins[spins.length - 1];

        let dbSpin;

        Spin.findOne().sort({ created_at: -1 }).exec(function (err, spin) {
            if (err) {
                return;
            }
            dbSpin = spin;
        });

        if (!dbSpin) {
            Spin.insertMany(spins);
        } else {
            if (dbSpin._id === spin._id) {
                return;
            }
            console.log("asdfff");
        }
    }
    catch (e) {
        console.log(e.message);
    }
};


//save function
const saveData = async (spins) => { };


//save data
module.exports = fetchData;