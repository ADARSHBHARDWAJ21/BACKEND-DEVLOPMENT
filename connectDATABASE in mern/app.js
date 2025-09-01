// filepath: app.js
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

import connectDB from './connectDATABASE.js';
const app = express(); // Create the app instance

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public")) // use to store image file in public
app.use(cookieParser())

// simple health route
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

//routes import
import  userRouter from './routes/user.routes.js'
// routes declaration
app.use("/api/v1/users", userRouter)
//http://localhost:8000/users/register
 export{app} // Export it as the default