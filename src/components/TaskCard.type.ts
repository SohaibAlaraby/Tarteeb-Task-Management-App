import { type ComponentPropsWithoutRef, type MouseEventHandler } from "react";
import type IUserTasks from "../Interfaces/userTasks.type";

export default interface ITaskCardProps extends ComponentPropsWithoutRef<'article'> {
    task: IUserTasks,
    isClickable?: boolean,
    handleCardClick?: MouseEventHandler<HTMLElement>,
}