import type { ComponentPropsWithoutRef } from "react";

// interface categoryBtnProps extends ComponentPropsWithoutRef<'button'> {}

export function CategoryBtn({children, className, ...props}:ComponentPropsWithoutRef<'button'>){
    const baseStyle = 'flex items-center  gap-1 text-white cursor-pointer active:scale-95 text-[15px] px-[18px] py-[9px] max-md:text-[12px] max-md:px-[9px] max-md:py-[6px]'
    return (
        <button className={`${baseStyle} ${className}`} {...props}>
        {children}
        </button>
    );
}