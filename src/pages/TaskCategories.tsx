import {Category} from '../components/Category.tsx';
import {CategoryBtn} from '../components/CategoryBtn.tsx';
import {TitleDash} from '../components/TitleDash.tsx';
import {useState} from 'react';
export interface CategoryItemIntf {
    id:string,
    name:string
}

export interface CategoryIntf {
    id: string,
    title: string,
    items: CategoryItemIntf[]
}
const initialCategories: CategoryIntf[] = [
    {
        id: 'cat-1',
        title: 'Task Status',
        items: [
            {
                id:'item-comp-1',
                name:'Completed'
            }, 
            {
                id:'item-prog-2',
                name:'In Progress'
            },
            {
                id:'item-NotStarted-3',
                name:'Not Started'
            }  
        ]
    },
    {
        id: 'cat-2',
        title: 'Task Priority',
        items: [
            {
                id:'item-Extreme-1',
                name:'Extreme'
            }, 
            {
                id:'item-Moderate-2',
                name:'Moderate'
            },
            {
                id:'item-Low-3',
                name:'Low'
            }  
        ]
    },
];
export function TaskCategories(){
    const [categories,setCategories] = useState<CategoryIntf[]>(initialCategories);

    function handleCategoryDelete(categoryID:string) {
        setCategories((prevCategories) => {
            return( prevCategories.filter((category)=>category.id !== categoryID));
        });
    }

    function handleCategoryItemDelete(categoryID:string,itemID:string){
        setCategories((prevCategories:CategoryIntf[]) => {
            return prevCategories.map((category:CategoryIntf)=>{
                if(category.id === categoryID){
                    return {
                        ...category,
                        items: category.items.filter((item:CategoryItemIntf)=> item.id !== itemID)
                    }
                }
                return category
            })
        });
    }

    function handleAddCategory(CategoryTitle:string) {
        setCategories((prevCategories:CategoryIntf[])=>{
            return [
                    ...prevCategories,
                    {
                        id:crypto.randomUUID(),
                        title:CategoryTitle,
                        items:[]
                    }
                ];
        })
    }

    function handleAddCategoryItem(itemName:string, categoryID:string){
        setCategories((prevCategories)=>{

            return prevCategories.map((category)=>{
                if(category.id === categoryID) {
                    let newItem:CategoryItemIntf = {
                        id:crypto.randomUUID(),
                        name:itemName
                    }
                    return {
                        ...category,
                        items: [newItem,...category.items]
                    };
                }
                return category;
            })
        });
    }
    return (
        <section id='task-categories' className='flex flex-col justify-start items-start gap-6 bg-white min-h-full w-11/12 max-w-[950px] rounded-2xl p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%]'>
                <header className='flex justify-between w-full'>
                  <TitleDash htmlTag='h2' className=' text-[24px] max-md:text-lg'>Task Categories</TitleDash>
                  <button className='font-Montserrat font-semibold underline cursor-pointer max-md:text-sm'>Go Back</button>
                </header>
                <CategoryBtn className='rounded-[6px] shadow-lg bg-light-Orange'>Add Category</CategoryBtn>
                {categories.map((category) => {
                    return (
                    <Category 
                    key={category.id} 
                    category={category}
                    handleEntryDelete={handleCategoryItemDelete}
                    handleCategoryDelete={handleCategoryDelete}
                    handleAddCategoryItem={handleAddCategoryItem}
                    />
                    );
                })}
                
                
                
            </section>
    );
}