const { con } = require("../database/connection");

class User {
  constructor() {
    this.table = "users";
  }

  getUserWithEmail(email) {
    const query = `SELECT * FROM ${this.table} WHERE email='${email}'`;

    return new Promise((resolve, reject) => {
      con.query(query, function (error, results) {
        if (error) return reject(error);
        resolve(results[0]);
      });
    });
  }
}

module.exports = {
  User,
};
