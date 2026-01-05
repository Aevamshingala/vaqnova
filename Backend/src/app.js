import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
