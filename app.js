const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "chao mung ban den voi web cua minh" })
});
module.exports = app;