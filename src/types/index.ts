export interface ITodo {
    body: string | null;
    title: string;
    id: string;
    completed: boolean | null;
    createdAt?: Date;
}