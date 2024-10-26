import { con } from "./connection.js";
import createUserTable from "../tables/users.js";
import createErrorLogsTable from "../tables/errorLogs.js";
import createProjectTable from "../tables/project.js";

con.connect(function (error) {
  if (error) {
    console.log("database connection failed! ", error);
    return;
  }

  console.log("Database connected successfully");

  createUserTable();
  createErrorLogsTable();
  createProjectTable();
});
