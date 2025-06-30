import dotenv from "dotenv";
import app from "./app.mjs";

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });