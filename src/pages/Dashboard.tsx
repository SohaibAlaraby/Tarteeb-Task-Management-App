import { MdAssignmentAdd } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { SiListmonk } from "react-icons/si";
import { IoStatsChart } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import {TransparentBtn} from "../components/TransparentBtn.tsx"
import { useOutletContext } from 'react-router-dom';
import { type userTasksIntf } from "../data/Tasks.tsx";

import {getFormattedDate} from '../components/Time.tsx';
interface OutletContextType {
  userTasks: userTasksIntf[],
  handleAddTask:Function,
  handleDeleteTask: Function
}
export function Dashboard(){
    const {userTasks,handleAddTask,handleDeleteTask} = useOutletContext<OutletContextType>();

    return (
         <div id='dashboard' className='flex gap-6 bg-white min-h-full w-11/12 max-w-[950px] p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%]'>

            <section id="To-Do" className="flex flex-col gap-5 w-1/2 rounded-2xl shadow-xl p-5">
                <header className="flex w-full justify-between">
                    <h2 className="flex items-center gap-1.5 text-WaterMelon-Red"><MdAssignmentAdd className="text-2xl text-gray-400"/> To-Do</h2>
                    <TransparentBtn><FaPlus className="text-sm text-WaterMelon-Red"/>Add Task</TransparentBtn>
                </header>
                <ul className="flex flex-col gap-4 w-full">
                   {userTasks.map((task)=>{
                        return <li key={task.id} className="w-full">
                            <article className="flex flex-col gap-3 p-3 border border-gray-400 rounded-2xl">
                                <header className="flex justify-start">
                                    <h3 className="flex items-center gap-2 font-bold max-w-3/4 text-[16px]"><SiListmonk className={`${
                                    {
                                        Extreme:'text-red-600',
                                        Moderate:'text-blue-600',
                                        Low:'text-green-600'
                                    }[task.priority] || 'text-green-600'
                                    } shrink-0`}/>{task.title}</h3>
                                </header>
                                <p className="text-gray-400 text-[14px]">{task.description}</p>
                                <footer className="text-[10px] flex justify-between">
                                    <span>{`Priority: ${task.priority}`}</span>
                                    <time dateTime={task.date.toISOString()} className="text-gray-400">{`Created on: ${getFormattedDate(task.date).date}`}                                        
                                    </time>
                                </footer>
                            </article>
                        </li>
                    })}
                </ul>
            </section>
            <div>
                <section id="Task-Status">
                    <header></header>
                </section>
                <section id="Completed Task">
                    <header></header>
                </section>

            </div>
        </div>
    );
}