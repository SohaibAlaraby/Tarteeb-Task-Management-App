import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Time } from './Time.tsx';
import {OneIconBtn} from './OneIconBtn.tsx';
export function Header(){

    return (
        <header className="bg-Milky-White flex justify-between items-center flex-wrap px-28 py-4 shadow-md  gap-3 max-sm:px-6 max-lg:flex-col max-lg:px-12 max-lg:py-2 relative max-md:gap-1">
                
                <h1 className="w-3/12 text-5xl font-bold font-Lobster-Two flex justify-start max-md:text-4xl"><span className="text-WaterMelon-Red capitalize">tar</span>teeb</h1>
                <div className="flex justify-between items-center gap-3 flex-wrap grow max-md:gap-1">
                    <div className='w-7/12 h-9 relative box-border flex shadow-md grow rounded-lg max-md:h-7'>
                        <label htmlFor='searchInput' className="hidden">Search Input</label>
                        <input className='w-full px-4 bg-white box-border border-0 rounded-lg text-sm outline-hidden font-Montserrat' id='searchInput' type="search" placeholder="Search your task here..."/>
                        <OneIconBtn id="search" className="absolute right-0 top-1/2 -translate-y-1/2"><IoSearch className="size-6/12"/></OneIconBtn>
                    </div>
                    <div className="grow flex justify-around items-center flex-wrap">
                        <div className=" flex justify-start gap-2">
                            <OneIconBtn id="notification"><FaRegBell className="size-6/12"/></OneIconBtn>
                            <OneIconBtn id="calendar"><SlCalender className="size-5/12"/></OneIconBtn>
                        </div>
                        <Time/>
                    </div>
                    
                </div>
            </header>
    );
}