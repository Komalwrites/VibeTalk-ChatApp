import express from "express";
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import {authenticate} from "../middleware/authenticate.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.put("/update-profile", authenticate, updateProfile);
router.get("/check", authenticate, checkAuth);

export default router