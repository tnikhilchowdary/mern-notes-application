import express from "express";
import {getNotes, addNotes, updateNotes, deleteNotes} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", addNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;

