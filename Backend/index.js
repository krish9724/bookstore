import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Importing cors
import userRoute from './route/user.route.js';

dotenv.config();

const app = express();

app.use(cors()); // Using cors middleware
app.use(express.json());

const PORT = process.env.PORT || 4000;
const url = process.env.mongodburl;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.log("Error:", error);
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
