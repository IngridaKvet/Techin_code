import express from "express";
import productRouter from "./routes/productRoutes.mjs";

const app = express();

app.use(express.json());
 app.use((req, res, next)=>{
   req.requestTime = new Date().toISOString();
   next();
 }) //middleware


app.use("/api/v1/products", productRouter)

export default app;