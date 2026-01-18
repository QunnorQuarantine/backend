import { Request, Response } from "express";
import * as userService from "../services/user.service.js";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userService.createUser(email, password);

  res.status(201).json(user);
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body; 

  const user = await userService.loginUser(email, password);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { userId: user.id },            
    process.env.JWT_SECRET as string, 
    { expiresIn: "1h" }             
  );

  res.json({ token });
};