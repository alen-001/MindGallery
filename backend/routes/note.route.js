import express from "express";
import { createNote, deleteNote, getNotes, updateNote } from "../controllers/note.controller.js";
const router=express.Router();
router.post("/",createNote);
router.get("/",getNotes);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);
const notesRoutes=router;
export default notesRoutes;