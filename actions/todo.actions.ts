"use server"
import { ITodo } from "@/types";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

interface IProps { title: string, body?: string | undefined, completed?: boolean, userId: string | null }

export const getUserTodosAction = async ({ userId }: { userId: string | null }) => {
    const todos = await prisma.todo.findMany({
        where: {
            user_id: userId as string
        },
        orderBy: { createdAt: "desc" }
    }
    )
    return todos
}
export const creteTodoListAction = async ({ title, body, completed, userId }: IProps) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed,
            user_id: userId as string
        }
    })
    revalidatePath("/")
}
export const updateTodoAction = async ({ id, title, body, completed }: ITodo) => {
    await prisma.todo.update({
        where: {
            id,
        },
        data: {
            title,
            body,
            completed,
        },
    });
    revalidatePath("/")
}
export const deleteTodoAction = async ({ id }: { id: string; }) => {
    await prisma.todo.delete({
        where: {
            id
        },
    })
    revalidatePath("/")
}
