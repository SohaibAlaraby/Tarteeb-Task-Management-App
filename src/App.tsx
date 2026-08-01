// import { useState } from 'react';
import './App.css'
import {Header} from './components/Header.tsx';
import {Sidebar} from './components/Sidebar.tsx';
import { Outlet } from 'react-router-dom';
import {useState} from 'react';
import {initialTasks} from './data/initialTasks.tsx';
import type IUserTasks from './Interfaces/userTasks.type.ts';

function App() {
  const [userTasks,setUserTasks] = useState<IUserTasks[]>(initialTasks);

  const [tasksInRecyclBin, setTasksInRecyclBin] = useState<IUserTasks[]>([]);
  

  function addTask(newTask:IUserTasks){
    setUserTasks((previousTasks ) => {
      return [
        newTask,
        ...previousTasks
      ];
    });
  }

  function moveTasktoTrash(taskID:string){
    const taskObject:IUserTasks|undefined= userTasks.find((task)=> task.id === taskID);
    if(!taskObject){
      return;
    }
    setTasksInRecyclBin((prevTrashTasks)=>{
      return[
        taskObject,
        ...prevTrashTasks
      ]
    });
    setUserTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskID);
    });
  }

  function editTask(editedTask:IUserTasks){
    setUserTasks((previousTasks) => {
      return previousTasks.map(task => {
        return (task.id === editedTask.id)? editedTask: task;
      })
    });
  }
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col bg-white h-dvh overflow-hidden'>
      <Header/>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar/>
        <main className='bg-white flex flex-1 justify-center items-start py-[24px] h-full overflow-y-auto'>
            <Outlet context={{userTasks, addTask, moveTasktoTrash, editTask,tasksInRecyclBin}}/>
        </main>
      </div>
    </div>
  )
}

export default App
