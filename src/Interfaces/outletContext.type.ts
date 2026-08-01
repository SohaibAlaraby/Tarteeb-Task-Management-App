import type IUserTasks from './userTasks.type';
export default interface OutletContextType {
  userTasks: IUserTasks[];
  addTask:(newTask:IUserTasks)=>void;
  moveTasktoTrash: (taskID:string)=>void;
  editTask: (editedTask:IUserTasks)=>void;
  tasksInTrash: IUserTasks[];
}