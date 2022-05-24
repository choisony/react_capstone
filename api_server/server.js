const express = require("express")
const app = express();
const cors = require("cors");
const test = require("./test");
const test2 = require("./test2");


app.use(cors());
app.use("/api",test);
app.use("/api2",test2);
app.get("/", (req,res)=>{
    res.send("server open");
});

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
