import express from "express";
import router from "./routes/stations-route.js";
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// define routes
app.use("/", router);

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
