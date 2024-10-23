const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");

// auth routes
router.post("/auth/login", auth.login);
router.get("/auth/user", auth.getLoggedInUser);
router.post("/auth/register", auth.register);

module.exports = router;
