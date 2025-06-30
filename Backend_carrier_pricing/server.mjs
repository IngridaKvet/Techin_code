import dotenv from "dotenv";
import app from "./app.mjs";


dotenv.config();

const port = process.env.PORT;

//serverio paleidimas
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });