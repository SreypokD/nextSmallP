'use client'
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "./Modal";
import { FormEventHandler, useState } from "react";
import { addNewTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
export default function AddTask() {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');

    //to submit task
    const handleSaveTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addNewTodo({
            id: uuidv4(),
            taskname: newTaskValue
        })
        
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh()
    };

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'>
                Add new task
                <AiOutlinePlus size={15} />
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <div className="modal-content">
                    
                    <strong className="text-2xl ">Add new task</strong>
                    <div className="modal-action flex ">
                        <input
                            value={newTaskValue}
                            onChange={(e) => {
                                setNewTaskValue(e.target.value);
                            }}
                            type="text"
                            placeholder="Type task here"
                            className="input input-bordered w-full"
                        />
                        <button type="submit" className="btn btn-secondary  " onClick={handleSaveTask}>
                            Save
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}