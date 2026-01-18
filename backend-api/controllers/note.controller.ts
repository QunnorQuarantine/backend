import { Request, Response } from "express";
import * as noteService from "../services/note.service.js";

export const createNote = async (req: Request, res: Response) => {
  const userId = req.userId!;
  const { title, content } = req.body;

  if (!title) return res.status(400).json({ message: "title is required" });

  const note = await noteService.createNote(userId, title, content);
  res.status(201).json(note);
};

export const getMyNotes = async (req: Request, res: Response) => {
  const userId = req.userId!;
  const notes = await noteService.getMyNotes(userId);
  res.json(notes);
};

export const getMyNoteById = async (req: Request, res: Response) => {
  const userId = req.userId!;
  const id = Number(req.params.id);

  const note = await noteService.getMyNoteById(userId, id);
  if (!note) return res.status(404).json({ message: "Note not found" });

  res.json(note);
};

export const updateMyNote = async (req: Request, res: Response) => {
  const userId = req.userId!;
  const id = Number(req.params.id);
  const { title, content } = req.body;

  const note = await noteService.updateMyNote(userId, id, { title, content });
  if (!note) return res.status(404).json({ message: "Note not found" });

  res.json(note);
};

export const deleteMyNote = async (req: Request, res: Response) => {
  const userId = req.userId!;
  const id = Number(req.params.id);

  const ok = await noteService.deleteMyNote(userId, id);
  if (!ok) return res.status(404).json({ message: "Note not found" });

  res.status(204).send();
};
