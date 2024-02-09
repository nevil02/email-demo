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

        console.log(spins.length);

        const spin = { ...spins[spins.length - 1] };

        let dbSpin = await Spin.find().sort([['createdAt', -1]]).limit(1);
        console.log("222222");

        if (!dbSpin) {
            await saveData(spins);
            console.log("444444");

        } else {
            console.log(dbSpin + "\n" + spin._id);
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