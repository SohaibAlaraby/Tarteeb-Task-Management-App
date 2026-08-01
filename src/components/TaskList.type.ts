import type IUserTasks from '../Interfaces/userTasks.type.ts';
export default interface ITaskListProps {
  tasksArr: IUserTasks[];
  areTasksAccessable?: boolean;
  handleTaskAccess?: (task:IUserTasks) => void;
}