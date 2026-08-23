import { MdAssignmentAdd } from 'react-icons/md';
import { MdAssignmentTurnedIn } from 'react-icons/md';
// import { IoStatsChart } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";
// import {TransparentBtn} from "../components/TransparentBtn.tsx"
import { useOutletContext } from 'react-router-dom';
import {TaskStatusWidget} from '../components/TaskStatusWidget.tsx'

import type IUserTasks from '../Interfaces/userTasks.type.ts';
// import {getFormattedDate} from '../components/Time.tsx';

// import TaskCard  from '../components/TaskCard.tsx';

import TaskList from '../components/TaskList.tsx';
interface OutletContextType {
  userTasks: IUserTasks[],
  addTask:Function,
  deleteTask: Function
}
/*
to do
tasks is sorted in creation date by default 
we may add button to sort it in dueDate
*/
export function Dashboard(){
    const {userTasks/*,addTask,deleteTask*/} = useOutletContext<OutletContextType>();

    return (
         <div id='dashboard' className='flex  gap-6 bg-white overflow-y-auto  w-11/12 max-w-[950px] min-h-full p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%] max-md:flex-col'>
            <div className="flex flex-col gap-5 w-1/2 max-md:w-full">
                <TaskStatusWidget userTasks={userTasks}/>
                <section id="Completed Task" className="flex flex-col gap-3 bg-white p-5 rounded-2xl shadow-xl flex-1 ">
                    <header>
                        <h2 className="flex items-center gap-1.5 text-WaterMelon-Red"><MdAssignmentTurnedIn className="text-2xl text-gray-400"/> Completed Tasks</h2>
                    </header>
                    <TaskList tasksArr={userTasks.filter((task) => task.status==='Completed')}/>
                </section>

            </div>
            <section id="To-Do" className="flex flex-col flex-1 gap-5 w-1/2 rounded-2xl shadow-xl p-5 max-md:w-full">
                <header className="flex w-full justify-between">
                    <h2 className="flex items-center gap-1.5 text-WaterMelon-Red"><MdAssignmentAdd className="text-2xl text-gray-400"/> To-Do</h2>
                    {/* <TransparentBtn><FaPlus className="text-sm text-WaterMelon-Red"/>Add Task</TransparentBtn> */}
                </header>
                <TaskList tasksArr={userTasks.filter((task) => task.status!=='Completed')}/>
            </section>
        </div>
    );
}