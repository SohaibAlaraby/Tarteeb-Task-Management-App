import {CategoryBtn} from '../components/CategoryBtn.tsx';
import {TitleDash} from '../components/TitleDash.tsx';

export function CreateCategories(){
    return (
        <section id='task-categories' className='flex flex-col justify-start items-start gap-6 bg-white min-h-full w-11/12 max-w-[950px] rounded-2xl p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%]'>
                <header className='flex justify-between w-full'>
                  <TitleDash htmlTag='h2' className='text-[24px] max-md:text-lg'>Create Categories</TitleDash>
                  <button className='font-Montserrat font-semibold text-[14px] underline cursor-pointer max-md:text-sm'>Go Back</button>
                </header>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='category-name' className='font-semibold font-Montserrat text-[14px]'>Category Name</label>
                    <input 
                    id='category-name' 
                    type="text" 
                    className='border border-gray-400 rounded-[6px] font-Inter px-[1em] py-[0.25em] w-8/12 max-sm:w-full'
                    placeholder='Enter category name' />
                </div>
                <div className='flex gap-2'>
                    <CategoryBtn className='rounded-[6px] shadow-lg bg-light-Orange'>Create</CategoryBtn>
                    <CategoryBtn className='rounded-[6px] shadow-lg bg-gray-400'>Cancel</CategoryBtn>
                </div>
                
                
                
            </section>
    );
}