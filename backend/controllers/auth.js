import { con } from "../database/connection.js";
import User from "../classes/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async function (req, res) {
  const { email, password } = req.body;

  try {
    const userData = await user.getUserWithEmail(email);

    if (userData) {
      bcrypt.compare(password, userData?.password).then((result) => {
        if (!result) {
          res.json({
            success: false,
            field: {
              name: "password",
              message: "Invalid password!",
            },
          });
        } else {
          // create token
          const token = jwt.sign(
            { mobile: userData?.mobile, email: userData?.email },
            process.env.PRIVATE_KEY
          );

          const { password, ...rest } = userData;
          res.json({
            success: true,
            message: "Login successful",
            user: {
              ...rest,
              token,
            },
          });
        }
      });
    } else {
      res.json({
        success: false,
        field: {
          name: "mobile",
          message: "Invalid mobile number!",
        },
      });
    }
  } catch (error) {
    if (error) throw error;
  }
};

export const register = function (req, res) {
  const { username, email, mobile, nid_no, password } = req.body;
  const query = `INSERT INTO users (username, email, password, mobile, nid_no) VALUES (?, ?, ?, ?, ?)`;
  // hash password
  bcrypt
    .hash(password, 5)
    .then(function (hash) {
      const values = [username, email, hash, mobile, nid_no];
      con.query(query, values, function (error, results) {
        if (error) {
          console.log(error);
          res.json({
            success: false,
            message: "Registration failed!",
          });
          return;
        }
        if (results.affectedRows > 0) {
          res.json({
            success: true,
            message: "Registration successful",
            user: {
              id: results.insertId,
              username,
              email,
              mobile,
            },
          });
        } else {
          res.json({
            success: false,
            message: "Registration failed!",
          });
        }
      });
    })
    .catch(function (error) {
      res.json({
        success: false,
        message: "Password encryption failed!",
      });
    });
};

export const getLoggedInUser = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized user!" });
  }

  jwt.verify(token, process.env.PRIVATE_KEY, async (err, data) => {
    if (err) {
      console.error("Token verification error:", err);
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized user!" });
    }

    try {
      const { password, ...rest } = await User.getUserWithEmail(data?.email);

      if (!rest) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      res.json({
        success: true,
        data: rest,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch user!",
      });
    }
  });
};
