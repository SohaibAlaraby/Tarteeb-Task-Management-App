import { useState, useRef, useActionState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { FaPlus } from "react-icons/fa6";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { OneIconBtn } from "../components/OneIconBtn.tsx";
import {TransparentBtn} from "../components/TransparentBtn.tsx"
import { type userTasksIntf } from "../data/initialTasks.tsx";
import { type DialogRef} from "../components/Modal.tsx"

import { TaskCard } from "../components/TaskCard.tsx";
import { TitleDash } from "../components/TitleDash.tsx";
// import { CategoryBtn } from "../components/CategoryBtn.tsx";
import {getFormattedDate} from '../components/Time.tsx';
import { TaskFormModal } from "../components/TaskFormModal.tsx";
// import type { fork } from 'child_process';
interface OutletContextType {
  userTasks: userTasksIntf[];
  addTask:(newTask:userTasksIntf)=>void;
  deleteTask: (taskID:string)=>void;
  editTask: (editedTask:userTasksIntf)=>void;
}
// {
//     id: crypto.randomUUID(),
//     title: 'Gym - Leg Day Session',
//     createdAt: new Date('2026-06-27T12:00:00'),
//     dueDate: new Date('2026-06-29T18:00:00'),
//     priority: 'Moderate',
//     status: 'Completed',
//     description: 'Focus on high-intensity squat variations and progression tracking for calisthenics pull-up/dip volume.'
//   }
export function Tasks(){
    const {userTasks,addTask,deleteTask,editTask} = useOutletContext<OutletContextType>();
    const [activeTask,setActiveTask] = useState<userTasksIntf | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [formMode,setFormMode] = useState<'add' | 'edit'>('add');

    const dialog = useRef<DialogRef>(null);

    function selectActiveTask(task:userTasksIntf) {
        setActiveTask(task);
    }

    function handleDeleteTask(task:userTasksIntf) {
        deleteTask(task.id);
        const remainingTasks = userTasks.filter(t => t.id !== task.id);
        setActiveTask(remainingTasks[0] || null);
        
    }

    function handleCloseModal(){
        dialog.current?.close();
        setIsModalOpen(false);
    }

    function handleSaveTask(taskValues:any) {
        if(formMode === 'add'){
            const newTask={
                id:crypto.randomUUID(),
                status: 'Not Started',
                createdAt: new Date(),
                ...taskValues
            };
            addTask(newTask);
            setActiveTask(newTask);
        } else if(formMode === 'edit' && activeTask){
            const updatedTask = { ...activeTask, ...taskValues };
            editTask(updatedTask);
            setActiveTask(updatedTask);
        }
        handleCloseModal();
    }

    return (
        <>
        {isModalOpen && <TaskFormModal 
        ref={dialog} 
        onSave={handleSaveTask}
        onClose={handleCloseModal} 
        mode={formMode}
        taskToEdit={activeTask}
        />}
        <div id='dashboard' className='flex gap-6 bg-white overflow-y-auto  w-11/12 max-w-[950px] h-full p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%] max-md:flex-col'>

            <section className={`w-7/12 flex flex-col gap-5 rounded-2xl shadow-xl p-5 max-md:w-full relative ${!activeTask? 'justify-center items-center':''}`}>
            {activeTask && <>
                <h2 className="text-[16px] font-semibold">{activeTask.title}</h2>
                <p className="text-[12px]">Priority: <span className={`${{
                        'Extreme':'text-red-500',
                        'Moderate':'text-blue-400',
                        'Low':'text-amber-800'
                    }[activeTask.priority] || 'text-amber-800'}`}>{activeTask.priority}</span></p>
                <p className="text-[12px]">Status: <span className={`${{
                    'Not Started':'text-red-600',
                    'In Progress':'text-blue-600',
                    'Completed':'text-green-600'
                }[activeTask.status] || 'text-red-600'}`}>{activeTask.status}</span></p>
                <time dateTime={activeTask.createdAt.toISOString()} className="text-gray-400 text-[12px]">{`Created on: ${getFormattedDate(activeTask.createdAt).date}`}          
                </time>
                <p className="text-gray-600"><span className="text-black font-semibold">Task Description: </span>{activeTask.description}</p>
                <time dateTime={activeTask.dueDate.toISOString()} className="text-gray-600"><span className="text-black font-semibold">Due Date: </span>{getFormattedDate(activeTask.dueDate).date}</time>
                <p className='flex gap-2 absolute bottom-3 right-3'>
                    <OneIconBtn onClick={()=>{
                        setFormMode('edit');
                        setIsModalOpen(true);
                        setTimeout(() => {dialog.current?.open()}, 0);   
                    }}><RiEditBoxFill className='text-2xl max-md:text-xl'/></OneIconBtn>
                    <OneIconBtn onClick={()=>handleDeleteTask(activeTask)}><MdDelete className='text-2xl max-md:text-xl'/></OneIconBtn>
                </p> 
            </>}
            {!activeTask && <img src='./add-tasks.avif' alt='a man stands beside a plant holding a tablet asking user to add a Task' className='w-8/12 aspect-square rounded-full'/>}
            </section>
            <section id="My-Tasks" className="flex flex-col flex-1 gap-5 w-5/12 rounded-2xl shadow-xl p-5 max-md:w-full">
                <header className="flex w-full justify-between">
                    <TitleDash htmlTag='h2' className="text-[16px]">My Tasks</TitleDash>
                    <TransparentBtn
                    onClick={()=>{
                        setFormMode('add');
                        setIsModalOpen(true);
                        setTimeout(() => {dialog.current?.open()}, 0);
                    }}
                    ><FaPlus className="text-sm text-WaterMelon-Red"/>Add Task</TransparentBtn>
                </header>
                <ul className="flex flex-col gap-4 w-full h-full overflow-y-auto">
                    {userTasks.map((task)=>{
                        return <li key={task.id} className="w-full">
                            <TaskCard 
                            task={task} isClickable={true}
                            handleCardClick={()=>selectActiveTask(task)}
                            />
                        </li>
                    })}
                </ul>
            </section>
            
        </div>
        </>
    );
}