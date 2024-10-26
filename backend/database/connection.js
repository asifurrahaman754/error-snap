import mysql from "mysql";

export let con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "root",
  password: process.env.DB_PASS,
  database: "error_snap",
});
