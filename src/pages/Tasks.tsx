import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { FaPlus } from "react-icons/fa6";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { OneIconBtn } from "../components/OneIconBtn.tsx";
import {TransparentBtn} from "../components/TransparentBtn.tsx"
import { type userTasksIntf } from "../data/initialTasks.tsx";
import { TaskCard } from "../components/TaskCard.tsx";
import { TitleDash } from "../components/TitleDash.tsx";
import {getFormattedDate} from '../components/Time.tsx';

interface OutletContextType {
  userTasks: userTasksIntf[],
  handleAddTask:Function,
  handleDeleteTask: Function
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
    const {userTasks/*,handleAddTask*/,handleDeleteTask} = useOutletContext<OutletContextType>();
    const [activeTask,setActiveTask] = useState<userTasksIntf | null>(null);

    function selectActiveTask(task:userTasksIntf) {
        setActiveTask(task);
    }

    function DeleteTask(task:userTasksIntf) {
        handleDeleteTask(task.id);
        const remainingTasks = userTasks.filter(t => t.id !== task.id);
        setActiveTask(remainingTasks[0] || null);
        
    }
    return (
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
                    <OneIconBtn><RiEditBoxFill className='text-2xl max-md:text-xl'/></OneIconBtn>
                    <OneIconBtn onClick={()=>DeleteTask(activeTask)}><MdDelete className='text-2xl max-md:text-xl'/></OneIconBtn>
                </p> 
            </>}
            {!activeTask && <img src='./add-tasks.avif' alt='a man stands beside a plant holding a tablet asking user to add a Task' className='w-8/12 aspect-square rounded-full'/>}
            </section>
            <section id="My-Tasks" className="flex flex-col flex-1 gap-5 w-5/12 rounded-2xl shadow-xl p-5 max-md:w-full">
                <header className="flex w-full justify-between">
                    <TitleDash htmlTag='h2' className="text-[16px]">My Tasks</TitleDash>
                    <TransparentBtn><FaPlus className="text-sm text-WaterMelon-Red"/>Add Task</TransparentBtn>
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
    );
}