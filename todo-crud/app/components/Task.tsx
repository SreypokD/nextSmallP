'use client'
import { ITask } from "@/types/type"
import { FiEdit, FiTrash2 } from "react-icons/fi"
interface TaskProp {
    task: ITask
}

import React, { FormEventHandler, useState } from 'react'
import { Modal } from "./Modal"

import { useRouter } from "next/navigation"
import { deleteTodo, editTodo } from "@/api"
export const Task: React.FC<TaskProp> = ({ task }) => {
    const router = useRouter()
    const [modalEditOpen,setModalEditOpen] = useState<boolean>(false)
    const [modalDeleteOpen,setModalDeleteOpen] = useState<boolean>(false)
    const [taskToEdit , setTaskToEdit] = useState(task.taskname)

    //to submit edit task
    const handleSaveEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            taskname: taskToEdit
        })
        
        setModalEditOpen(false);
        router.refresh()
    };
// to delete task
   const handleSaveDeleteTask= async (id:string)=>{
    await deleteTodo(id);
    setModalDeleteOpen(false)
    router.refresh()
   }
    return (
        <tr className="bg-base-200" key={task.id}>
            <td className="w-full">{task.taskname}</td>
            <td className="flex ">
                <FiEdit onClick={()=>{setModalEditOpen(true)}} cursor="pointer" className="text-blue-500 mr-2 " size={25} />
                <Modal modalOpen={modalEditOpen} setModalOpen={setModalEditOpen}>
                    <div className="modal-content">

                        <strong className="text-2xl ">Edit new task</strong>
                        <div className="modal-action flex ">
                            <input
                                value={taskToEdit}
                                onChange={(e) => {
                                    setTaskToEdit(e.target.value);
                                }}
                                type="text"
                                placeholder="Type task here"
                                className="input input-bordered w-full"
                            />
                            <button type="submit" className="btn btn-secondary  " onClick={handleSaveEditTask}>
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>
                <FiTrash2 onClick={()=>setModalDeleteOpen(true)} cursor="pointer" className="text-red-500" size={25} />
                <Modal modalOpen={modalDeleteOpen} setModalOpen={setModalDeleteOpen}>
                        <strong className="text-2xl ">Are you sure?</strong>
                        <div className="modal-action flex ">
                            
                            <button type="submit" className="btn btn-secondary  " onClick={()=>handleSaveDeleteTask(task.id)}>
                                yes
                            </button>
                        </div>
                </Modal>
            </td>
        </tr>

    )
}

