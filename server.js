const app = require("./app");
const config = require("./app/config");
// bat dautu phia server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`ser ver is running on port ${PORT}.`);
})