import type { ComponentPropsWithoutRef } from 'react';

type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface TitleDashProps extends ComponentPropsWithoutRef<'h1'> {
    htmlTag: HeaderTag;
}

export function TitleDash({htmlTag, className,children, ...props}:TitleDashProps){
    const Tag = htmlTag;
    const baseStyle = 'relative font-semibold font-Inter after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-12 after:bg-WaterMelon-Red '; 
    return (
        <Tag className={`${baseStyle}${className}`} {...props}>
        {children}
        </Tag>
    );
}