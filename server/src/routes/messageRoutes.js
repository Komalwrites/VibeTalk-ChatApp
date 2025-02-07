import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { getMessage, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", authenticate, getUsersForSidebar);
router.get("/:id", authenticate, getMessage);
router.post("/send/:id", authenticate, sendMessage);

export default router;