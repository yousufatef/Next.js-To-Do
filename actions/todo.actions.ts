"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getTodoListAction = async () => {
    const todos = await prisma.todo.findMany()
    return todos
}
export const creteTodoListAction = async () => {
}
export const updateTodoListAction = async () => {
}
export const deleteTodoListAction = async () => {
}
