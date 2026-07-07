import { useActionState } from 'react';

import { Modal } from './Modal.tsx';
import { TitleDash } from './TitleDash.tsx';
import { type DialogRef } from './Modal.tsx';
import type { userTasksIntf } from '../data/initialTasks.tsx';

type modeType = 'add' | 'edit';

interface TaskFormModalProps {
    ref:React.Ref<DialogRef>;
    mode: modeType;
    taskToEdit?: userTasksIntf | null;
    onSave: (taskValues:any) => void;
    onClose: () => void;
    isOpen?:boolean;
}

export function TaskFormModal({ref, onSave, mode, taskToEdit, onClose}:TaskFormModalProps) {

    const formateDateForInput = (date?: Date) => {
        if(!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    }
    function taskAction(_prevState:any, formData:any){
            const title = formData.get('title') as string;
            const dueDateInput = formData.get('dueDate') as string;
            const priority = formData.get('priority') as string;
            const description = formData.get('description') as string;
    
            const error = [];
    
            if(title.length < 5 || title.length > 50) {
                error.push('Title must be in range of 5 to 20 characters');
            }
    
            if(!dueDateInput || mode === 'add' && new Date(dueDateInput) < new Date(new Date().setHours(0,0,0,0))) {
                error.push("Due date must be at present or future");
            }
    
            if(!priority) {
                error.push("You need to fulfill all categories")
            }
    
            if(description.length < 10 || description.length > 500) {
                error.push("Description must be in range of 10 to 500 characters");
            }
            const inputValues = {
                title,
                dueDate:dueDateInput,
                priority,
                description
            }
            if(error.length > 0) {
                return {
                    error,
                    inputValues
                };
            }
            onSave({
                title,
                dueDate:new Date(dueDateInput),
                priority,
                description
            });
            return {error:null}
    
        }
        const initialFormState = {
            error: null as string[] | null,
            inputValues: mode === 'edit' && taskToEdit? {
                title: taskToEdit.title,
                dueDate: formateDateForInput(taskToEdit.dueDate),
                priority: taskToEdit.priority,
                description: taskToEdit.description
            } : undefined
        }
        const [formState, formAction] = useActionState(taskAction as (s:any,p:any)=>any, initialFormState as any);
    return(
        <Modal 
        ref={ref} 
        className='fixed top-[50%] left-[50%] translate-[-50%] rounded-2xl px-15.5 py-12 w-6/12 backdrop:bg-black/70 
        max-lg:px-8 max-lg:py-4 max-lg:w-8/12
        max-md:px-5 max-md:py-2.5 
        max-sm:w-11/12
        '
        >
            <form action={formAction}>
                <header className='flex justify-between w-full mb-12 max-lg:mb-8 max-md:mb-5'>
                    <TitleDash 
                    htmlTag='h3' 
                    className="text-[16px]"
                    >{mode ==='add'? 'Add New Task':'Edit Task'}</TitleDash>

                    <button 
                    type='button'
                    onClick={onClose}
                    className='font-Montserrat font-semibold text-[14px] underline cursor-pointer max-md:text-sm'>Go Back</button>
                </header>
                    <div className='border border-gray-300 p-4 flex flex-col gap-3'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="task-title" className='font-bold'>Title</label>
                        <input 
                        type="text" 
                        id='task-title' 
                        name='title' 
                        className='border border-gray-300 p-1.5 rounded-md'
                        // key={taskToEdit?.id} 
                        defaultValue={formState.inputValues?.title || ''}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label htmlFor="task-dueDate" className='font-bold'>Due Date</label>
                    <input 
                    type="date" 
                    id='task-dueDate' 
                    name='dueDate' 
                    className='border border-gray-300 p-1.5 rounded-md'
                    // key={taskToEdit?.id}
                    defaultValue={typeof formState.inputValues?.dueDate === 'string'?  formState.inputValues.dueDate :formateDateForInput(formState.inputValues?.dueDate)}
                    />
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label htmlFor="task-priority" className='font-bold'>priority</label>
                    <select 
                    name="priority" 
                    id="task-priority"
                    className='border border-gray-300 p-1.5 rounded-md'
                    // key={taskToEdit?.id}
                    defaultValue={formState.inputValues?.priority || ''}
                    >
                        <option value="" className='text-gray-400'>-- Choose Priority --</option>
                        <option value="Extreme">Extreme</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Low">Low</option>
                    </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label htmlFor="task-description" className='font-bold'>Task Description</label>
                    <textarea 
                    name="description" 
                    id="task-description"
                    maxLength={500}
                    className='border border-gray-300 p-1.5 rounded-md h-30'
                    // key={taskToEdit?.id}
                    defaultValue={formState.inputValues?.description}
                    ></textarea>
                    </div>
                    </div>
                    {formState.error && <ul className='mt-2 text-sm text-orange-400'>
                        {formState.error.map((error:string) => {
                            return (
                                <li key={error}>{error}</li>
                            );
                        })}
                    </ul>}
                    <button type='submit' className='rounded-[6px] shadow-lg bg-light-Orange text-white px-6 py-1 mt-6'>{mode==='add'? 'Done' : 'Save Changes'}</button>
                    
                </form>
            </Modal>
    );
}