import "dotenv/config";
import mysql from "mysql2";

const pool = mysql
  .createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  })
  .promise();

export const connectDB = async () => {
  const conn = await pool.getConnection();

  console.log("✅ mysql connection successs");

  conn.release();
};

export default pool;
