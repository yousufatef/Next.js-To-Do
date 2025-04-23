import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { Pen, Trash } from "lucide-react"
import { ITodo } from "@/types"
import { Badge } from "./ui/badge"


const TodoTable = ({ todos }: { todos: ITodo[] }) => {
    return (
        <>
            <div>TodoTable</div> <Table>
                <TableCaption>All Todos</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Completed</TableHead>
                        <TableHead className="text-right">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {todos.map(todo => (
                        <TableRow key={todo.id}>
                            <TableCell className="font-medium">{todo.id}</TableCell>
                            <TableCell>{todo.title}</TableCell>
                            <TableCell>{todo.completed ?
                                <Badge>Completed</Badge> : <Badge variant={"secondary"}>Uncompleted</Badge>}</TableCell>
                            <TableCell className="flex items-center justify-end space-x-2">
                                <Button size={"icon"}>
                                    <Pen size={16} />
                                </Button>
                                <Button size={"icon"} variant={"destructive"}>
                                    <Trash size={16} />
                                </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">5</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    )
}

export default TodoTable