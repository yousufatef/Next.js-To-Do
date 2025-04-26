"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Textarea } from './ui/textarea'
import { todoFormSchema } from '@/validation'
import { creteTodoListAction } from '../../actions/todo.actions'
import { Checkbox } from './ui/checkbox'
import { useState } from 'react'
import Spinner from './Spinner'

const TodoForm = ({ userId }: { userId: string | null }) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof todoFormSchema>>({
        resolver: zodResolver(todoFormSchema),
        defaultValues: {
            title: "",
            body: "",
            completed: false,
        },
    });


    const onSubmit = async (data: z.infer<typeof todoFormSchema>) => {
        setLoading(true)
        const { title, body, completed } = data
        await creteTodoListAction({ title, body, completed, userId })
        setLoading(false)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className="ml-auto">
                <Button>
                    <Plus size={14} />New Todo
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New Todo</DialogTitle>

                </DialogHeader>
                <div className="py-4">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="body"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Body</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter your description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="completed"
                                render={({ field }) => (
                                    <FormItem className='flex'>
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={(checked) => {
                                                    field.onChange(checked);
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel>Completed</FormLabel>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="submit">
                                    {loading ? <><Spinner /> Saving</> : "Save"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default TodoForm