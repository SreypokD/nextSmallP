import { ITask } from '@/types/type'
import React from 'react'
import { Task } from './Task'

interface TodoListProps{
    tasks: ITask[]
}
export  const TodoList: React.FC<TodoListProps>=({tasks}) => {
    return (
            <table className="table flex justify-between">
                {/* head */}
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {tasks.map(task=>(
                       <Task  key={task.id} task={task}/>
                    ))}
                </tbody>
            </table>
    )
}
