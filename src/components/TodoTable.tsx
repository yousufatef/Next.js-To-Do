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
import { Pin, Trash } from "lucide-react"


const TodoTable = () => {
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
                    <TableRow>
                        <TableCell className="font-medium">fweeeeeeeeefwefwefwfwef</TableCell>
                        <TableCell>fwefwefwefwfewef</TableCell>
                        <TableCell>Completed</TableCell>
                        <TableCell className="flex items-center justify-end space-x-2">
                            <Button size={"icon"}>
                                <Pin size={16} />
                            </Button>
                            <Button size={"icon"} variant={"destructive"}>
                                <Trash size={16} />
                            </Button></TableCell>
                    </TableRow>
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