import { FaPlus } from "react-icons/fa6";
import {CategoryBtn} from './CategoryBtn.tsx';
import { RiEditBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import {TitleDash} from './TitleDash.tsx';
import {TransparentBtn} from './TransparentBtn.tsx';

import type { ComponentPropsWithoutRef } from "react";
import type {CategoryIntf} from '../pages/TaskCategories.tsx'

interface category_prop extends ComponentPropsWithoutRef<'div'> {
    category:CategoryIntf,
    handleEntryDelete:Function,
    handleCategoryDelete:Function,
    handleAddCategoryItem:Function
}
export function Category({category,handleEntryDelete,handleCategoryDelete, handleAddCategoryItem ,...props}:category_prop){
    return (
        <div className="flex flex-col gap-6 w-full " {...props}>
            <header className="flex justify-between">
                <TitleDash htmlTag='h3' className=" text-[15px] max-md:text-sm">
                {category.title}
                </TitleDash>

                <TransparentBtn onClick={() => handleCategoryDelete(category.id)}><MdDelete className="text-light-Orange text-sm"/>
                {`Delete Category`}
                </TransparentBtn>

                <TransparentBtn onClick={()=>handleAddCategoryItem(
                'Sohaib',category.id)}><FaPlus className="text-light-Orange text-sm"/>
                {`Add ${category.title}`}
                </TransparentBtn>
            </header>
            <div className="border border-gray-300 rounded-[14px] overflow-hidden shadow-lg">

            <table className="w-full text-center text-[15px] border-collapse max-md:text-[12px]">
            <thead>
                <tr className="border-b border-gray-300">
                    <th className="w-1/12 py-[12px] border-r border-gray-300 font-semibold max-md:py-[6px]">SN</th>
                    <th className="w-5/12 border-r font-semibold border-gray-300">{category.title}</th>
                    <th className="w-6/12 font-semibold">Action</th>
                </tr>
            </thead>
            <tbody>
                {category.items.map((item,index) => {
                    return (
                    <tr key={item.id}>
                        <td className="border-r border-gray-300">{index+1}</td>
                        <td className="border-r border-gray-300">{item.name}</td>
                        <td className="flex justify-center gap-2 py-[9px] max-md:py-[6px]">
                        <CategoryBtn className='rounded-[8px] bg-light-Orange'><RiEditBoxFill className="text-2xl max-md:text-[16px]"/>Edit</CategoryBtn>
                        <CategoryBtn className='rounded-[8px] bg-light-Orange' onClick={()=>{handleEntryDelete(category.id, item.id)}}><MdDelete className="text-2xl max-md:text-[16px]"/>Delete</CategoryBtn>
                        </td>
                    </tr>
                    );
                })}
                
                </tbody>
            </table>
            </div>
        </div>
    );
}