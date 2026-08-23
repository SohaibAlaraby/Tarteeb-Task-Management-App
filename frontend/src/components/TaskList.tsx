import type ITaskListProps from './TaskList.type';
import TaskCard from './TaskCard';

export default function TaskList({tasksArr,areTasksAccessable = false, handleTaskAccess=()=>{}}:ITaskListProps){
    return(
        <ul className="flex flex-col gap-4 w-full  overflow-y-auto">
            {tasksArr.map((task)=>{
                return <li key={task.id} className="w-full">
                    <TaskCard 
                    task={task}
                    isClickable={areTasksAccessable}
                    handleCardClick={()=>handleTaskAccess!(task)}
                    />
                </li>
            })}
        </ul>
    );
}