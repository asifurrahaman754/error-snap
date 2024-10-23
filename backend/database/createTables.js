const { con } = require("./connection");
const createUserTable = require("../tables/users");

con.connect(function (error) {
  if (error) {
    console.log("database connection failed! ", error);
    return;
  }

  console.log("Database connected successfully");

  createUserTable();
});
