import type { ComponentPropsWithoutRef } from "react";

export function TransparentBtn({children, className, ...props}:ComponentPropsWithoutRef<'button'>){
    const baseStyle = 'flex items-center text-[12px] text-gray-500 font-Inter cursor-pointer gap-1 max-md:text-[9px]';
    return (
        <button className={`${baseStyle} ${className}`} {...props}>
        {children}
        </button>
    );
}