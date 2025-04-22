"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getTodoListAction = async () => {
    const todos = await prisma.todo.findMany()
    return todos
}
export const creteTodoListAction = async ({ title, body }: { title: string, body: string | undefined }) => {
    await prisma.todo.create({
        data: {
            title,
            body
        }
    })
}
export const updateTodoListAction = async () => {
}
export const deleteTodoListAction = async () => {
}
