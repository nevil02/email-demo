const app = require("./app");
const port = process.env.PORT || 3000;

require("./fetchData");

app.listen(port, () => {
    console.log("Server is up on port " + port);
});