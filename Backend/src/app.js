import express, { json } from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "*",
  })
);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
