import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

export default app;

import userRoutes from "./routes/user.routes.js";

app.use("/users", userRoutes);


import path from "path";

app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")));

import noteRoutes from "./routes/note.routes.js";

app.use("/notes", noteRoutes);
