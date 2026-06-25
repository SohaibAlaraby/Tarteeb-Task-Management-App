import { MdDashboard } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { FaListUl } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
// import { MdLogout } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import type { IconType } from 'react-icons';
import {useState} from 'react';
import { NavLink } from "react-router-dom";

interface SidebarBtn {
    id: string,
    icon: IconType,
    text: string,
    path: string

}

const btns: SidebarBtn[] = [
    {
        id: 'sb-dashboard-btn',
        icon: MdDashboard,
        text: 'Dashboard',
        path: '/dashboard'
    },
    {
        id: 'sb-vitaltask-btn',
        icon: FaExclamation,
        text: 'Vital Task',
        path: '/vital-tasks'
    },
    {
        id: 'sb-mytask-btn',
        icon: HiOutlineClipboardCheck,
        text: 'My Task',
        path: '/my-tasks'
    },
    {
        id: 'sb-taskcategories-btn',
        icon: FaListUl,
        text: 'Task Categories',
        path: '/categories'
    },
    {
        id: 'sb-settings-btn',
        icon: IoMdSettings,
        text: 'Settings',
        path: '/settings'
    },
    {
        id: 'sb-help-btn',
        icon: IoIosHelpCircle,
        text: 'Help',
        path: '/help'
    }
];
// const logoutBtn:SidebarBtn = {
//     id: 'sb-logout-btn',
//     icon: MdLogout,
//     text: 'Logout'
// };

export function Sidebar(){
    const [activeBtn, setActiveBtn] = useState<string | null>('sb-dashboard-btn');
    const [isMinimized,setIsMinimized] = useState(false);

    function handleBtnClick(btnID:string){
        setActiveBtn(btnID);
    }

    function handleMinimizeBtn(){
        setIsMinimized((prevState) => {
            return !prevState;
        })
    }

    return (
        <div className={`relative h-full shrink-0 max-md:w-0 ${isMinimized ? 'w-auto' : 'w-[330px] max-lg:w-[240px]'}`}>
            <button
                type="button"
                aria-expanded={!isMinimized}
                aria-label={isMinimized ? 'Expand sidebar' : 'Collapse sidebar'}
                className={`bg-WaterMelon-Red aspect-square h-9 border-none cursor-pointer flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-hover-light active:scale-90 text-white
                absolute top-2 z-50
                    ${isMinimized
                        ? ' md:left-1/2 md:-translate-x-1/2 max-md:left-2 max-md:translate-x-0 '
                        : 'md:right-2'
                    }`}
                onClick={handleMinimizeBtn}
            >
                {isMinimized ? <FaArrowRight className="text-xl" /> : <FaArrowLeft className="text-xl" />}
            </button>

            <aside
                className={`bg-WaterMelon-Red h-full relative overflow-y-auto py-[50px] transition-all duration-200 ease-in-out
                    
                    ${isMinimized
                        ? 'w-auto px-[4px] max-md:-translate-x-full'
                        : 'w-full px-[21px] max-lg:px-[12px] max-md:px-[8px] translate-x-0 max-md:absolute max-md:inset-y-0 max-md:left-0 max-md:z-40 max-md:w-[200px]'
                    }`}
            >
            <ul className={`flex flex-col gap-2 max-lg:gap-0`}>
                {btns.map((btn)=>{
                    const Icon = btn.icon;
                    return (
                        <li key={btn.id}>
                            <NavLink to={btn.path} 
                            className={`h-[59px] flex items-center font-Inter rounded-[14px] px-[16px] hover:bg-hover-light transition-transform duration-200 hover:scale-105 active:scale-95 text-[16px] max-md:h-[48px] max-md:text-[12px]
                            ${activeBtn === btn.id?'bg-white text-WaterMelon-Red': 'text-white'}
                            ${isMinimized?'aspect-square':'w-full gap-4'}
                            `}

                            onClick={() => {
                                handleBtnClick(btn.id);
                            }}
                            ><Icon className="text-3xl max-md:text-2xl shrink-0"/>
                            {!isMinimized && btn.text}
                            </NavLink>
                        </li>
                    );
                })}
                {/* <li className=" w-inherit fixed bottom-[31px]">
                    <button className="w-full h-[59px] flex items-center gap-4 font-Inter text-[16px] text-white  rounded-[14px] px-[16px] active:bg-black"><MdLogout className="text-3xl"/>
                    Logout
                    </button>
                </li> */}
            </ul>
            </aside>
        </div>
    );
}