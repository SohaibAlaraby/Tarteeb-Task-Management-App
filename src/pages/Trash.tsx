import { useOutletContext } from 'react-router-dom';

import type IoutletContext from '../Interfaces/outletContext.type.ts';
// import type IUserTasks from '../Interfaces/userTasks.type.ts';
import TaskList from '../components/TaskList.tsx';
export function Trash(){
    const {tasksInTrash} = useOutletContext<IoutletContext>();
    return (
        <div className='flex  gap-6 bg-white overflow-y-auto  w-11/12 max-w-[950px] min-h-full p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%] max-md:flex-col'>
            <TaskList tasksArr={tasksInTrash}/>
        </div>
    );
}