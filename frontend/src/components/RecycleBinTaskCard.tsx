import { SiListmonk } from "react-icons/si";
import type ITaskCardProps from "./TaskCard.type.ts";
import TaskCardContent from "./TaskCardContent.tsx";
import {useState} from "react";
import { FaTrashRestore } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function RecycleBinTaskCard({task}:ITaskCardProps){
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const btnStyle:string = 'bg-light-Orange flex items-center gap-2 px-4 py-2 text-white text-sm rounded hover:cursor-pointer active:scale-90'
    return (
        <article 
        className={`flex flex-col gap-3 p-3 border border-gray-400 rounded-2xl cursor-pointer hover:bg-gray-200`}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        >
            <div className="flex flex-1 gap-3">
                <SiListmonk className={`${
                    {
                        'Not Started':'text-red-600',
                        'In Progress':'text-blue-600',
                        'Completed':'text-green-600'
                    }[task.status] || 'text-red-600'
                    } shrink-0`}/>
                <TaskCardContent task={task}/>
            </div>
            {isHovered && <div className="flex gap-3">
                <button 
                className={btnStyle}
                >
                    <FaTrashRestore />
                    Restore
                </button>
                <button 
                className={btnStyle}
                >
                    <MdDelete />
                    Delete
                </button>
            </div>}
    </article>
    );
}