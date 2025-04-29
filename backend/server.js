// const express =  require('express');
import express  from 'express';
// import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import movieRoutes  from "./routes/movie.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from './config/db.js';

// dotenv.config();
const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // will allow us to parse  req.body
// console.log("MONGO_URI:" process.env.MONGO_URI);
//  Application Route 

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);


app.listen(PORT, () => {
    console.log('Server started at http://localhost:'+ PORT);
    connectDB();
});

