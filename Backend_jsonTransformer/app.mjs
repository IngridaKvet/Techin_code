import express from "express";
import dataRouter from "./routes/dataRoutes.mjs";

const app = express();

app.use(express.json());

app.use("/api/v1", dataRouter)

export default app;