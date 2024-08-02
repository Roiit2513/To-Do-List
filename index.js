import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import bodyParser from "body-parser"

import db from "./config/db.js"

const app = express();
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server Active');
})