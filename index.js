const express = require('express');
const morgan = require("morgan");
const dotevn = require("dotenv");
const { connectDB } = require("./config/db.config");
const orderRouter = require("./routes/order.routes");


const app = express();
app.use(express.json());
dotevn.config();
app.use(morgan("dev"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome To ROYAL MANDARIN PAGE");
});

app.use("/api/user", orderRouter);

app.get("*", (req, res) => {
    res.status(404).json("Page Not Found");
});

app.listen(port, async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Database Connection Established");
        console.log(`Server is listening on http://localhost:${port}`);
    }catch (err) {
        console.log("Error connecting to MongoDB: " + err.message);
    }
});