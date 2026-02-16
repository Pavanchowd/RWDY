import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json()); // allows us to parse json
app.use(cors()); // allows us to make requests from the frontend

// api endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// listen
app.listen(port, () => console.log("Server started on PORT : " + port));
