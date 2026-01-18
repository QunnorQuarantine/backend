import { Router } from "express";
import * as noteController from "../controllers/note.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.post("/", noteController.createNote);
router.get("/", noteController.getMyNotes);
router.get("/:id", noteController.getMyNoteById);
router.patch("/:id", noteController.updateMyNote);
router.delete("/:id", noteController.deleteMyNote);

export default router;
