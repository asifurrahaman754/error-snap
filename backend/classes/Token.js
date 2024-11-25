import jwt from "jsonwebtoken";

export default class Token {
  static create(value) {
    return jwt.sign(value, process.env.PRIVATE_KEY);
  }

  static verify(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.PRIVATE_KEY, (err, data) => {
        if (err) {
          resolve(false);
        } else {
          resolve(data);
        }
      });
    });
  }
}
