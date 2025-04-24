"use client"
import { useState } from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import Spinner from './Spinner'
import { deleteTodoAction } from "../../actions/todo.actions"
import EditTodoForm from './EditTodoForm'
import { ITodo } from '@/types'


const TodosTableActions = ({ todo }: { todo: ITodo }) => {
    const [loading, setLoading] = useState(false)

    return (
        <>

            <EditTodoForm todo={todo} />
            <Button size={"icon"} variant={"destructive"} onClick={
                async () => {
                    setLoading(true)
                    await deleteTodoAction({ id: todo?.id })
                    setLoading(false)
                }
            }>
                {loading ? <Spinner /> : <Trash size={16} />}
            </Button></>
    )
}

export default TodosTableActions