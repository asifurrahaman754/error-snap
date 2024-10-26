import express from "express";
import { getLoggedInUser, login, register } from "../controllers/auth.js";
import { sendError } from "../controllers/log.js";

const router = express.Router();

// auth routes
router.post("/auth/login", login);
router.get("/auth/user", getLoggedInUser);
router.post("/auth/register", register);

router.post("/log", sendError);

export default router;
