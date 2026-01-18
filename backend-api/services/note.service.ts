import prisma from "../prisma/client.js";

export const createNote = async (userId: number, title: string, content?: string) => {
  return prisma.note.create({
    data: { userId, title, content },
    select: { id: true, title: true, content: true, createdAt: true, updatedAt: true },
  });
};

export const getMyNotes = async (userId: number) => {
  return prisma.note.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, content: true, createdAt: true, updatedAt: true },
  });
};

export const getMyNoteById = async (userId: number, id: number) => {
  return prisma.note.findFirst({
    where: { id, userId },
    select: { id: true, title: true, content: true, createdAt: true, updatedAt: true },
  });
};

export const updateMyNote = async (
  userId: number,
  id: number,
  data: { title?: string; content?: string }
) => {
  const exists = await prisma.note.findFirst({ where: { id, userId }, select: { id: true } });
  if (!exists) return null;

  return prisma.note.update({
    where: { id },
    data,
    select: { id: true, title: true, content: true, createdAt: true, updatedAt: true },
  });
};

export const deleteMyNote = async (userId: number, id: number) => {
  const exists = await prisma.note.findFirst({ where: { id, userId }, select: { id: true } });
  if (!exists) return null;

  await prisma.note.delete({ where: { id } });
  return true;
};
