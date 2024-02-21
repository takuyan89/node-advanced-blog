const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("コンニチハ");
});

app.get("/blog/create", (req, res) => {
    res.sendFile(__dirname + "/views/blogCreate.html");
});

app.post("/blog/create", (req, res) => {
    console.log("inside post request", req.body);
    res.send("Blog created successfully");
});

app.listen(5050, () => {
    console.log("Server is running on port 5050");
});
