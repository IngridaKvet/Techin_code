import express from "express";
import carrierRouter from "./routes/carrierRoutes.mjs";

const app = express();

app.use(express.json());

app.use("/api/v1/", carrierRouter)

export default app;