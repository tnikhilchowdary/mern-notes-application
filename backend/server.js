import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js";
import notesRouter from "./routers/noteRouter.js";
import cors from "cors";


dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/notes", notesRouter);
app.get("/", (req, res) => {
    res.send("Welcome to the Notes App");
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on PORT");
})