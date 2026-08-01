
import type ITaskListProps from './TaskList.type';
import RecycleBinTaskCard from './RecycleBinTaskCard';

export default function RecycleBinTaskList({tasksArr}:ITaskListProps){


    return(
        <ul className="flex flex-col gap-4 w-full  overflow-y-auto">
            {tasksArr.map((task)=>{
                return <li 
                key={task.id} 
                className="w-full" 
                >
                    <RecycleBinTaskCard 
                    task={task}
                    />
                </li>
            })}
        </ul>
    );
}