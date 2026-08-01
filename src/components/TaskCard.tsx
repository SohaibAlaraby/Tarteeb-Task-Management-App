import { SiListmonk } from "react-icons/si";
import type ITaskCardProps from "./TaskCard.type.ts";
import TaskCardContent from "./TaskCardContent.tsx";

export default function TaskCard({task, isClickable = false, handleCardClick = ()=>{}}:ITaskCardProps){
    return (
        <article 
        className={`flex gap-3 p-3 border border-gray-400 rounded-2xl ${isClickable? 'cursor-pointer hover:bg-gray-200': ''}`}
        onClick={handleCardClick}
        >
        <SiListmonk className={`${
            {
                'Not Started':'text-red-600',
                'In Progress':'text-blue-600',
                'Completed':'text-green-600'
            }[task.status] || 'text-red-600'
            } shrink-0`}/>
        <TaskCardContent task={task}/>
    </article>
    );
}