import { useOutletContext } from 'react-router-dom';

import type IoutletContext from '../Interfaces/outletContext.type.ts';
import {TitleDash} from '../components/TitleDash.tsx';
// import type IUserTasks from '../Interfaces/userTasks.type.ts';
import RecycleBinTaskList from '../components/RecycleBinTaskList.tsx';
export default function RecycleBin(){
    const {tasksInRecyclBin} = useOutletContext<IoutletContext>();
    return (
        <div className='flex flex-col gap-6 bg-white overflow-y-auto  w-11/12 max-w-[950px] min-h-full p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%] max-md:flex-col'>
            <TitleDash htmlTag='h2' className=' text-[24px] max-md:text-lg'>Recycle Bin</TitleDash>

            <RecycleBinTaskList tasksArr={tasksInRecyclBin}/>
        </div>
    );
}