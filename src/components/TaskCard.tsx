import { SiListmonk } from "react-icons/si";
import { type userTasksIntf } from "../data/initialTasks.tsx";
import { type ComponentPropsWithoutRef } from "react";
import {getFormattedDate} from '../components/Time.tsx';

interface TaskCardIntf extends ComponentPropsWithoutRef<'article'> {
    task: userTasksIntf
}

export function TaskCard({task}:TaskCardIntf){
    return (
        <article className="flex gap-3 p-3 border border-gray-400 rounded-2xl">
        <SiListmonk className={`${
            {
                'Not Started':'text-red-600',
                'In Progress':'text-blue-600',
                'Completed':'text-green-600'
            }[task.status] || 'text-red-600'
            } shrink-0`}/>
        <div className="flex flex-col gap-1">
            <header className="flex justify-start">
                <h3 className="flex items-center gap-2 font-bold max-w-3/4 text-[16px]">{task.title}</h3>
            </header>
            <p className="text-gray-400 text-[14px] line-clamp-2 wrap-break-word">{task.description}</p>
            <footer className="text-[9px]">
                <div className="flex justify-between flex-wrap gap-1">
                    <span>Priority: <span className={`${
                        {
                    'Extreme':'text-red-500',
                    'Moderate':'text-blue-400',
                    'Low':'text-amber-800'
                }[task.priority] || 'text-red-600'
                    }`}>{task.priority}</span></span>
                    <time dateTime={task.createdAt.toISOString()} className="text-gray-400">{`Created on: ${getFormattedDate(task.createdAt).date}`}                                        
                    </time>
                </div>
                <div className="flex justify-between flex-wrap gap-1">
                    <span >Status: <span className={`${
                        {
                    'Not Started':'text-red-600',
                    'In Progress':'text-blue-600',
                    'Completed':'text-green-600'
                }[task.status] || 'text-red-600'
                    }`}>{task.status}</span></span>
                    <time dateTime={task.dueDate.toISOString()} className="text-gray-400">{`due on: ${getFormattedDate(task.dueDate).date}`}          
                    </time>

                </div>
            </footer>

        </div>
    </article>
    );
}