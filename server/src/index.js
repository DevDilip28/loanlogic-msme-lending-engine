import dotenv from 'dotenv'
import express from 'express'
import applicationRoutes from "./routes/application.routes.js";
import cors from "cors";

dotenv.config()

const app = express()

app.use(cors());

app.use(express.json())

app.use("/api", applicationRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

