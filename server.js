//const app = require("./app");
//const config = require("./app/config");


// bat dautu phia server
//const PORT = config.app.port;
//app.listen(PORT, () => {
//console.log(`ser ver is running on port ${PORT}.`);
//});

const app = require("./app");
const config = require("./app/config");
const mongoose = require("mongoose");
//ket noi co so su lieu

mongoose.connect(config.db.uri)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.log("khong the ket noi den co so du lieu!", error);
        process.exit();

    });
//bat dau cua server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});