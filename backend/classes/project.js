import { con } from "../database/connection.js";
import User from "./user.js";

class Project {
  static getProjectWithName(name) {
    const userId = User.currentUser?.id;
    const query = `SELECT * FROM project WHERE name='${name}' AND user_id='${userId}'`;

    return new Promise((resolve, reject) => {
      con.query(query, function (error, results) {
        if (error) return reject(error);
        resolve(results[0]);
      });
    });
  }
}

export default Project;
