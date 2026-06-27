// import { useState } from 'react';
import './App.css'
import {Header} from './components/Header.tsx';
import {Sidebar} from './components/Sidebar.tsx';
import { Outlet } from 'react-router-dom';
import {useState} from 'react';
import {initialTasks, type userTasksIntf} from './data/initialTasks.tsx';
function App() {
  const [userTasks,setUserTasks] = useState<userTasksIntf[]>(initialTasks);

  function handleAddTask(task:userTasksIntf){
    setUserTasks((previousTasks ) => {
      return [
        task,
        ...previousTasks
      ];
    });
  }

  function handleDeleteTask(taskID:string){
    setUserTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskID);
    });
  }
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col bg-white h-dvh overflow-hidden'>
      <Header/>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar/>
        <main className='bg-white flex flex-1 justify-center items-start py-[24px] h-full overflow-y-auto'>
            <Outlet context={{userTasks, handleAddTask, handleDeleteTask}}/>
        </main>
      </div>
    </div>
  )
}

export default App
