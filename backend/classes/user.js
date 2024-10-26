import { con } from "../database/connection.js";

class User {
  static table = "users";
  static currentUser = {};

  static setCurrentUser(user) {
    if (!this.currentUser?.id) {
      this.currentUser = user;
    }
  }

  static getUserWithEmail(email) {
    const query = `SELECT * FROM ${User.table} WHERE email='${email}'`;
    return new Promise((resolve, reject) => {
      con.query(query, function (error, results) {
        if (error) return reject(error);
        resolve(results[0]);
      });
    });
  }
}

export default User;
