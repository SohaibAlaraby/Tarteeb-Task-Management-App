import type { ComponentPropsWithoutRef } from "react";

// interface oneIconBtnProps extends ComponentPropsWithoutRef<'button'> {}

export function OneIconBtn({children, className = '', ...props}:ComponentPropsWithoutRef<'button'>){
    const baseStyle = 'bg-WaterMelon-Red aspect-square h-9 border-none rounded-lg cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90 text-white max-md:h-7';
    return (
        <button className={`${baseStyle} ${className}`} {...props}>
        {children}
        </button>
    );
}