import { ITask } from "@/types/type";

const baseURL = "http://localhost:3001";


//get all todo
export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks`, { cache: "no-store" })
    const todos = await res.json();
    return todos;

}

// to ADD  task
export const addNewTodo = async (todo: ITask): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const addTask = res.json();
    return addTask
}

// to edit  task
export const editTodo = async (todo: ITask): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const editTodo = res.json();
    return editTodo
}


// to delete  task
export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseURL}/tasks/${id}`, {
        method: 'DELETE',
    })

}

