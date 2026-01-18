import prisma from "../prisma/client.js";

import bcrypt from "bcrypt";

export const createUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
    select: {
    id: true,
    email: true,
    createdAt: true,
  },
  });
};

export const getUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      createdAt: true,
    },
  });
};


export const getUserByEmail = async (email: string) =>{
  return prisma.user.findUnique({
    where: {email},
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;
  return user;
};
