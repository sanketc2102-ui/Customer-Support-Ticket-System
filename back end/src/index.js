import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/dbConnection.js";

dotenv.config({
  path: "./.env",
});

const port = 8000;

connectDB()
  .then(() => {
    app.listen(port, () =>
      console.log(`server is running on port http://localhost:${port}`),
    );
  })
  .catch((err) => {
    console.log("❌ mysql connection failed", err);
    process.exit(1);
  });
