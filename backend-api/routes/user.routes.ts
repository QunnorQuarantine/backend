import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/login", userController.loginUser);
router.post("/", userController.createUser); 
router.get("/", authMiddleware, userController.getUsers); 

export default router;
