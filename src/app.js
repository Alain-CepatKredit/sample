import express from "express";
import healthRouter from "./routes/healthRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", healthRouter);

export default app;
