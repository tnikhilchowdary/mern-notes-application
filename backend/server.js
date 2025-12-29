import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Notes App");
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on PORT");
})